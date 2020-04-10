import React, { Component } from 'react'
import { ListWrap,ListFilterItemWrap, ListFilterPopWrap , RowListItemWrap} from "./styledList"

import ListList from "./ListList"
import Calender from "components/calender/Calender"

import BScroll from "better-scroll"
import { connect } from "react-redux"
import { SET_IFSHOWSEARCH } from "./store/action-types"

const mapDispatchToProps=(dispatch)=>{
    return{
        setIfShowSearch:()=>{
            dispatch({type:SET_IFSHOWSEARCH,data:false})
        }
    }
}

@connect(null,mapDispatchToProps)
class List extends Component {

    constructor(props){
        super(props)
        this.props.setIfShowSearch()
    }

    state={
        menuList:[{
                title:"全部分类",
                categoryId:0
            },{
                title:"演唱会",
                categoryId:1
            },{
                title:"话剧歌剧",
                categoryId:2
            },{
                title:"休闲展览",
                categoryId:5
            },{
                title:"体育赛事",
                categoryId:8
            },{
                title:"旅游玩乐",
                categoryId:9
            },{
                title:"音乐会",
                categoryId:3
            },{
                title:"儿童亲子",
                categoryId:4
            },{
                title:"舞蹈芭蕾",
                categoryId:6
            },{
                title:"戏曲综艺",
                categoryId:7
            }
        ],
        sortTypeList:[
            {
                title:"综合排序",
                type:1
            },
            {
                title:"最新排序",
                type:2
            },
            {
                title:"低价优先",
                type:3
            },
            {
                title:"好评优先",
                type:4
            }
        ],
        status:{
            title:"全部分类",
            categoryId:0
        },
        ifShowoverlay:false,
        sortStatus:{
            title:"综合排序",
            type:1
        },
        scroll:null,
        bScroll:null,
        ifSetMap:false,
        showType:"",
        startTime:"",
        endTime:"",
        timeType:"全部时间"
    }

    getDefaultSortStatus=()=>{
        let sortStatus={
            title:"全部分类",
            categoryId:0
        }
        this.state.menuList.forEach(value=>{
            if(value.categoryId===this.props.match.params.categoryId){
                sortStatus=value
            }
        })
        return sortStatus
    }

    static getDerivedStateFromProps(props,state){
        if(state.status.categoryId!==props.match.params.categoryId){
            let status={}
            state.menuList.forEach(value=>{
                if(value.categoryId===(~~props.match.params.categoryId)){
                        status=value
                }
            })
            return {
                status:status
            }
        }
        return null
    }
    
    componentDidMount(){
        this.setState({
            scroll:new BScroll(".list-menu",{scrollX:true,scrollY:false,click:true,bounce:false}),
            bScroll:new BScroll("#list",{
                click:true,
                bounce:false,
                probeType:3,
                pullUpLoad:true
            })
        },()=>{
            this.state.scroll.scrollToElement(this.refs[`type${this.state.status.categoryId}`])
        })
        
        
    }

    changeType=(status)=>()=>{
        this.props.history.push("/list/"+status.categoryId)
    }

    changeShowType=(type)=>()=>{
        if(type!==this.state.showType){
            this.setState({
                showType:type,
                ifShowoverlay:true
            })
        }else{
            this.setState({
                showType:"",
                ifShowoverlay:false
            })
        }
    }

    changSortType=(type)=>()=>{
        this.setState({
            sortStatus:type,
            showType:"",
            ifShowoverlay:false
        })
    }

    changeSetMap=()=>{
        this.setState({
            ifSetMap:!this.state.ifSetMap
        })
    }

    changeTime=(startTime,endTime,timeType)=>{
        this.setState({
            startTime,
            endTime,
            timeType,
            showType:"",
            ifShowoverlay:false
        })
    }

    render() {
        return (
            <ListWrap id="list">
                <div className="list-container">
                    <div className="list-menu">
                        <div className="list-menu-wrap">
                            {
                                this.state.menuList.map((value)=>{
                                    return (
                                        <span
                                            ref={"type"+value.categoryId}
                                            key={value.categoryId} 
                                            className={`list-menu-item ${this.state.status.categoryId===value.categoryId&&"active"}`}
                                            onClick={this.changeType(value)}
                                        >{value.title}</span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="list-filter">
                        <div className="list-filter-wrap">
                            <ListFilterItemWrap 
                                className={`pop ${this.state.showType==="sort"&&"active"}`} 
                                onClick={this.changeShowType("sort")}
                            >
                                {this.state.sortStatus.title}
                            </ListFilterItemWrap>
                            <ListFilterItemWrap  
                                className={`pop ${this.state.showType==="time"&&"active"}`}
                                onClick={this.changeShowType("time")}
                            >
                                {this.state.timeType}
                            </ListFilterItemWrap>
                            <ListFilterItemWrap
                                className={`${this.state.ifSetMap&&"active"}`}
                                onClick={this.changeSetMap}
                            >
                                在线选座
                            </ListFilterItemWrap>
                        </div>
                        <ListFilterPopWrap 
                            style={{display:this.state.showType!=="sort"&&"none"}}
                            className="list-filter-pop"
                        >
                            <div className="row-list">
                                {
                                    this.state.sortTypeList.map(value=>{
                                        return(
                                            <RowListItemWrap
                                                key={value.title}
                                                className={this.state.sortStatus.type===value.type&&"active"}
                                                onClick={this.changSortType(value)}
                                            >
                                                {value.title}
                                            </RowListItemWrap>
                                        )
                                    })
                                }
                            </div>
                        </ListFilterPopWrap>
                        <ListFilterPopWrap 
                            style={{display:this.state.showType!=="time"&&"none"}} 
                            className="list-filter-pop"
                        >
                            <Calender
                                changeTime={this.changeTime}
                            ></Calender>
                        </ListFilterPopWrap>
                    </div>
                    <ListList 
                        key={this.state.status.categoryId+this.state.sortStatus.type+this.state.ifSetMap+this.state.startTime+this.state.endTime+"list"} 
                        categoryId={this.state.status.categoryId} 
                        sortStatus={this.state.sortStatus.type}
                        ifSetMap={this.state.ifSetMap}
                        bScroll={this.state.bScroll}
                        startTime={this.state.startTime}
                        endTime={this.state.endTime}
                    ></ListList>
                <div className="overlay" style={{display:!this.state.ifShowoverlay&&"none"}}></div>
                </div>
            </ListWrap>
        )
    }

}
export default List