import React, { Component } from 'react'
import { SuggestActivityWrap } from './styledSearch'
import store from "nodemodules/store"
import { withRouter} from "react-router-dom"
@withRouter
class SuggestActivity extends Component {

    getCityName=(cityId)=>{
        let city=store.get("cityList")||{}
        let cityName=""
        Object.keys(city).forEach((value)=>{
            city[value].forEach((value)=>{
                if(value.cityId===cityId){
                    cityName=value.cityName
                }
            })
        })
        return cityName
    }

    goDetail=(id)=>()=>{
        this.props.history.push(`/detail/${id}`)
    }

    render() {
        return (
            <SuggestActivityWrap
                width="0 0 1px 0"
                color="#e6e6e6"
                onClick={this.goDetail(this.props.item.id)}
            >
                <div className="suggest-poster">
                    <img src={this.props.item.poster} alt=""/>
                </div>
                <div className="suggest-detail">
                    <div className="suggest-name">[{this.getCityName(this.props.item.cityId)}]{this.props.item.properName}</div>
                    <div className="suggest-line">
                        <div className="suggest-rank">
                            {
                                this.props.item.rank
                                ?(
                                    <>
                                        评分&nbsp;
                                        <span>{this.props.item.rank}</span>
                                    </>
                                )
                                :(
                                    <>暂无评分</>
                                )
                            }
                        </div>
                        <div className="suggest-price">
                            <span className="unit">￥</span>
                            <span className="num">{this.props.item.lowPrice}</span>
                            <span className="end">起</span>
                        </div>
                    </div>
                </div>
            </SuggestActivityWrap>
        )
    }
}
export default SuggestActivity