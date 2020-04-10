import React, { Component } from 'react'
import { ActivityWrap } from "./styledHome"
import Discount from "components/activities/Discount"
import { withRouter } from "react-router-dom"

@withRouter
class Activity extends Component {

    numCalc=(num)=>{
        if(num>9999){
            return Math.floor(num/10000)+"万"
        }else{
            return num
        }
    }

    goDetail=(id)=>()=>{
        this.props.history.push(`/detail/${id}`)
    }

    render() {
        return (
            <ActivityWrap onClick={this.goDetail(this.props.item.id)}>
                <div 
                    className="poster"
                    style={{backgroundImage:`url(${this.props.item.poster})`}}
                >
                    {
                        this.props.type==="hot"?(
                            <div className="watch">
                                <div className="num">{this.numCalc(~~this.props.item.wantWatchNum)}</div>
                                <div className="like"></div>
                            </div>
                        ):(
                            <Discount
                                num={this.props.item.discountRate}
                            ></Discount>
                        )
                    }
                </div>
                <div className="name">{this.props.item.properName}</div>
                <div className="price">
                    <span className="price-num">￥{this.props.item.lowPrice}</span>
                    <span className={`price-desc ${this.props.type==="discount"?"through":""}`}>
                        {
                            this.props.type==="hot"?"起":`￥${this.props.item.originPrice}`
                        }
                    </span>
                </div>
            </ActivityWrap>
        )
    }
}
export default Activity
