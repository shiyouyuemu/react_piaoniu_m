import React, { PureComponent } from 'react'
import { GuessLikeWrap,NoMoreWrap } from "./styledHome"
import ActivitieItem from "components/activitieItem/ActivitieItem"
import { get } from "utils/http"
import { Toast } from "antd-mobile"
import _ from "lodash"


class GuessLike extends PureComponent {

    state={
        data:[],
        pageIndex:1,
        pageSize:10,
        hasMore:true
    }

    async componentDidMount(){
        this.getData()
        this.timer=setTimeout(()=>{
            this.props.bScroll.on("pullingUp",this.pullRefresh)
            },0)
    }
    componentWillUnmount(){
        this.props.bScroll.off("pullingUp",this.pullRefresh)
        this.props.bScroll.scrollTo(0,0)
        clearTimeout(this.timer)
        this.setState = (state, callback) => {
            return;
        };
    }
    
    pullRefresh=()=>{
        _.throttle(async ()=>{
            if(this.state.hasMore){
                Toast.loading("Loading...",1)
                await this.getData()
                 this.props.bScroll.finishPullUp()
                 this.props.bScroll.refresh()
                }else{
                Toast.fail("没有更多数据了...",1)
                this.props.bScroll.finishPullUp()
            }
         },1000)()
    }

    async getData(){
        let result=await get({
            url:"/ajax/api/v2/home/recommends",
            params:{
                pageIndex:this.state.pageIndex,
                pageSize:this.state.pageSize
            }
        })
        this.setState({
            data:[...this.state.data,...result.data],
            pageIndex:this.state.pageIndex+1,
            hasMore:result.hasMore
        })
    }
    
    render() {
        return (
            <GuessLikeWrap>
                <div className="title">猜你喜欢</div>
                <div className="guess-wrap">
                    {
                        this.state.data.map((value)=>{
                            return(
                                <ActivitieItem
                                    key={value.recommendContent.id}
                                    item={value.recommendContent}
                                    ifBorder={true}
                                ></ActivitieItem>
                            )
                        })
                    }
                    {
                        !this.state.hasMore&&(<NoMoreWrap>没有更多了...</NoMoreWrap>)
                    }
                </div>
            </GuessLikeWrap>
        )
    }
}
export default GuessLike