import React, { Component } from 'react'
import { CityWrap,CurrentCityWrap,ChunkWrap,CityLetterWrap,CityLetterItemWrap } from "./styledHome"
import store from "nodemodules/store"
import BScroll from "better-scroll"
import { connect } from 'react-redux'
import { SETCITY, SET_IFSHOW } from "./store/action-types"
import storelo from "nodemodules/store"
const mapStateToProps=(state)=>{
    return {
        cityName:state.getIn(["home","cityName"]),
        cityId:state.getIn(["home","cityId"]),
        ifShow:state.getIn(["home","ifShow"])
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setCity:(payload)=>{
            dispatch({type:SETCITY,data:payload})
        },
        setIfShow:(ifShow)=>{
            dispatch({type:SET_IFSHOW,data:ifShow})
        }
    }
}

class City extends Component {

    state={
        bScroll:null,
        history:store.get("historyCity")?store.get("historyCity"):[]
    }

    async componentDidMount(){
        this.setState({bScroll:new BScroll("#cityWrap",{click:true,stopPropagation: true})})
    }

    chooseCity=(cityId,cityName)=>()=>{
        let arr=storelo.get('historyCity')?storelo.get('historyCity'):[];
        let ifhas=false
        arr.forEach(item=>{
            if(item.cityId===cityId){
                ifhas=true
            }
        })
        if(!ifhas){
            arr.push({cityId,cityName})
            storelo.set("historyCity",arr)
        }
        this.props.setIfShow(false)
        this.props.setCity({cityId,cityName})
    }

    scrollTo=(letter)=>()=>{
        this.state.bScroll.scrollToElement(this.refs[letter])
    }

    render() {
        return (
            <CityWrap id="cityWrap">
                            <div>                   
                                <CurrentCityWrap
                                    width="0 0 1px 0"
                                    color="#e6e6e6"
                                >
                                    <span className="currentCity-name"
                                        onClick={this.chooseCity(this.props.cityId,this.props.cityName)}
                                    >{this.props.cityName}</span>
                                    <span className="currentCity-type">当前城市</span>
                                </CurrentCityWrap>
                                <div className="cityChunks" ref="history">
                                    <div className="cityChunks-title">历史访问城市</div>
                                    <div className="cityChunks-wrap">
                                        {
                                            this.state.history.map((value)=>{
                                                return (
                                                    <ChunkWrap
                                                        className="cityChunks-chunk"
                                                        width="1px"
                                                        color="#e6e6e6"
                                                        radius="3"
                                                        key={value.cityId+"history"}
                                                        onClick={this.chooseCity(value.cityId,value.cityName)}
                                                    >{value.cityName}</ChunkWrap>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="cityChunks" ref="hot">
                                    <div className="cityChunks-title">热门城市</div>
                                    <div className="cityChunks-wrap">
                                        {
                                            this.props.hotList.map((value)=>{
                                                return (
                                                    <ChunkWrap
                                                        className="cityChunks-chunk"
                                                        width="1px"
                                                        color="#e6e6e6"
                                                        radius="3"
                                                        key={value.cityId+"hot"}
                                                        onClick={this.chooseCity(value.cityId,value.cityName)}
                                                    >{value.cityName}</ChunkWrap>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                {
                                    Object.keys(this.props.cityList).map((value)=>{
                                        return (
                                            <div className="cityLetter-list" key={value} ref={value}>
                                                <div className="cityLetter-letter">{value}</div>
                                                <CityLetterWrap
                                                    className="cityLetter-wrap"
                                                    width="1px 0 1px 0"
                                                    color="#e6e6e6"
                                                >
                                                {
                                                    this.props.cityList[value].map((value)=>{
                                                        return (
                                                            <CityLetterItemWrap 
                                                                className={`cityLetter-item ${value.cityId===this.props.cityId?"active":""}`}
                                                                width="0 0 1px 0"
                                                                color="#e6e6e6"
                                                                key={value.cityId}
                                                                onClick={this.chooseCity(value.cityId,value.cityName)}
                                                            >{value.cityName}</CityLetterItemWrap>
                                                        )
                                                    })
                                                }   
                                                </CityLetterWrap>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="cityIndex">
                                <div className="cityIndex-wrap">
                                    <div className="cityIndex-item" onClick={this.scrollTo("history")}>历史</div>
                                    <div className="cityIndex-item" onClick={this.scrollTo("hot")}>热门</div>
                                    <div className="cityIndex-divide"></div>
                                    {
                                        this.props.indexList.map((value)=>{
                                            return (
                                            <div
                                                className="cityIndex-item"
                                                key={value+"letter"}
                                                onClick={this.scrollTo(value)}
                                            >{value}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
            </CityWrap>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(City)