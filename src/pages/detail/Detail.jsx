import React, { Component } from 'react'
import { DetailWrap } from "./styledDetail"
import { NavBar , Icon} from "antd-mobile"
import DetailCard from "./DetailCard"
import StarsArray from "./StarsArray"
import Introduction from "./Introduction"
import DetailComment from "./DetailComment"
// import AboutActivity from "./AboutActivity"
import Credit from "./Credit"
import Support from "./Support"
import Bottom from "./Bottom"
import NowPic from "./NowPic"

import { get } from "utils/http"
import BScroll from "better-scroll"
class Detail extends Component {

    state={
        data:{},
        imgList:{}
    }

    async componentDidMount(){
        let id=this.props.match.params.dId
        let result=await get({
            url:`/ajax/api/v1/activities/${id}.json`
        })
        let imgList=await get({
            url:`/ajax/api/v1/activityGallery/${id}`
        })
        this.setState({
            imgList:imgList,
            data:result
        })
        new BScroll("#detail",{
            click:true,
            bounce:false
        })
    }

    goBack=()=>{
        this.props.history.goBack()
    }

    render() {
        return (
            <DetailWrap id="detail">
               <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" color="#bbb"size="lg" onClick={this.goBack}></Icon>}
                ><div className="title">演出详情</div></NavBar>
                {
                    Object.keys(this.state.data).length>0&&(
                        <>
                            <DetailCard
                                poster={this.state.data.poster}
                                name={this.state.data.name}
                                star={this.state.data.star}
                                rank={this.state.data.rank}
                                lowPrice={this.state.data.lowPrice}
                                timeRange={this.state.data.timeRange}
                                position={this.state.data.venue.name}
                                campaigns={this.state.data.campaigns}
                                venueId={this.state.data.venueId}
                            ></DetailCard>
                            {
                                this.state.data.activityLineup.length>0&&(<StarsArray
                                    starsList={this.state.data.activityLineup}
                                ></StarsArray>)
                            }
                            {
                                this.state.imgList.data.length>0&&(
                                    <NowPic
                                        imgList={this.state.imgList}
                                    ></NowPic>
                                )
                            }
                            <Introduction
                                activityDetails={this.state.data.activityDetails}
                            ></Introduction>
                            <DetailComment></DetailComment>
                            {/* <AboutActivity></AboutActivity> */}
                            <Credit></Credit>
                            <Support></Support>
                        </>
                        )
                    }
               </div>
               <Bottom></Bottom>
            </DetailWrap>
        )
    }
}
export default  Detail