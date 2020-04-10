import React, { Component } from 'react'
import { ActivitieItemWrap,LightSpotWrap,InfoWrap } from "./styledActivitieItem"
import Discount from "components/activities/Discount"
import { withRouter } from "react-router-dom"
import store from "nodemodules/store"

// const mapStateToProps=(state)=>{
//     return {
//         cityName:state.home.cityName
//     }
// }

// @connect(mapStateToProps)
@withRouter
class ActivitieItem extends Component {


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
            <ActivitieItemWrap onClick={this.goDetail(this.props.item.id)}>
                <div className="main-body">
                    <div
                        className="poster"
                        style={{backgroundImage:`url(${this.props.item.poster})`}}
                    >
                        {
                            this.props.item.discountRate?(
                                <Discount
                                    num={this.props.item.discountRate}
                                ></Discount>
                            ):""
                        }
                    </div>
                    <InfoWrap
                        width={this.props.ifBorder?"0 0 1px 0":0}
                        color="hsla(0,0%,90%,.5)"
                    >
                        <div className="info-title">
                            <div className="title">
                                <span className="city">[{this.getCityName(this.props.item.cityId)}]</span>
                                {this.props.item.properName}
                            </div>
                            <div className="activity-tag">
                                {
                                    this.props.item.areaTicketType===1?(
                                        <div className="choose">座</div>
                                    ):""
                                }
                                {
                                    this.props.item.canBuyEcard?(
                                        <div className="eCard">电</div>
                                    ):""
                                }
                            </div>
                        </div>
                        <div className="time-address">
                            <span className="time">{this.props.item.timeRange}</span>
                            <span className="split">|</span>
                            <span className="address">{this.props.item.venueName}</span>
                        </div>
                        <div className="rank">
                            {
                                this.props.item.rank?(
                                <>
                                        评分&nbsp;
                                        <span>{this.props.item.rank}</span>
                                </>
                                ):<>暂无评分</>
                            }
                        </div>
                        <div className="price-wrap">
                            {
                                !this.props.item.soldOut?(
                                    <div>
                                        <span className="price">{this.props.item.lowPrice}</span>
                                        <span className="qi">元起</span>
                                    </div>
                                ):(
                                    <div className="status-text">暂时缺票</div>
                                )
                            }
                        </div>
                        {
                            this.props.item.campaigns&&this.props.item.campaigns.length>0?(
                                <div className="promotion-info">
                                    <ul>
                                        {
                                            this.props.item.campaigns.map((value)=>{
                                                return(
                                                    <a href="#asd" key={value.id}>
                                                        <li>
                                                            <span className="inner-icon"></span>
                                                            <span className="desc">{value.desc}</span>
                                                        </li>
                                                    </a>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            ):""
                        }
                        {
                            this.props.item.desc?(
                                <LightSpotWrap
                                    width="1px 0 0 0"
                                    color="hsla(0,0%,90%,.5)"
                                >“{this.props.item.desc}”</LightSpotWrap>
                            ):""
                        }
                    </InfoWrap>
                </div>
            </ActivitieItemWrap>
        )
    }
}
export default ActivitieItem