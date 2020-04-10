import React, { Component } from 'react'
import { DiscountWrap } from "./styledActivities"

export default class Discount extends Component {

    discount(num){
        let str=num+""
        let arr=str.split(".")
        if(arr.length<2){
            arr.push(0)
        }
        return arr
    }

    render() {
        return (
            <DiscountWrap className="discount-tag">
                <div className="text">
                    <span className="num">{this.discount(this.props.num)[0]}</span>
                    <span className="fraction">.{this.discount(this.props.num)[1]}</span>
                    <span className="unit">折</span>
                </div>
            </DiscountWrap>
        )
    }
}
