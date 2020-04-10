import React, { Component } from 'react'
import ActivitieItem from "components/activitieItem/ActivitieItem"
import { get } from "utils/http"
import { ListListWrap } from "./styledList"
import { Toast } from "antd-mobile"
import _ from "lodash"

class ListList extends Component {

    state={
        pageIndex:1,
        data:[],
        hasMore:true
    }

    componentDidMount(){
        this.getData()
        Toast.info("加载中...",0)
        this.timer=setTimeout(()=>{
            this.props.bScroll.on("pullingUp",_.throttle(async ()=>{
                if(this.state.hasMore){
                    Toast.loading("Loading...",1)
                     await this.getData()
                     this.props.bScroll.finishPullUp()
                     this.props.bScroll.refresh()
                }else{
                    Toast.fail("没有更多数据了...",1)
                    this.props.bScroll.finishPullUp()
                }
             },1000))
        },0)
    }

    async getData(){
        let result=await get({
            url:"/ajax/api/v3/activities",
            params:{
                pageIndex: this.state.pageIndex,
                categoryId: this.props.categoryId,
                keyword:this.props.keyword,
                time: "",
                sort: this.props.sortStatus,
                seatMap: this.props.ifSetMap,
                highestPrice: "",
                lowestPrice: "",
                startTime:this.props.startTime,
                endTime:this.props.endTime
            }
        })
        this.setState({
            data:[
                ...this.state.data,
                ...result.data
            ],
            pageIndex:this.state.pageIndex+1
        })
        Toast.hide()
    }

    render() {
        return (
            <ListListWrap className="list-list">
                {
                    this.state.data.length>0&&this.state.data.map(value=>{
                        return(
                                value.activityType===2
                                ?(<div className="advert"key={value.id}>
                                    <img src={value.poster} alt=""/>
                                </div>)
                                :(
                                value.activityType===1&&(
                                    <ActivitieItem
                                        key={value.id+this.state.pageIndex}
                                        item={value}
                                    ></ActivitieItem>
                                ))
                        )
                    })
                }
                {
                    this.state.data.length===0&&(
                        <div className="no-result">
                            <img src="https://static.piaoniu.com/nuxt-static/img/ticket.ae49b23.png" alt=""/>
                            <div className="text">天了噜，没找到相关演出</div>
                        </div>
                    )
                }
            </ListListWrap>
        )
    }
    componentWillUnmount(){
        this.setState=(state,callback)=>{
            return
        }
    }
}
export default ListList