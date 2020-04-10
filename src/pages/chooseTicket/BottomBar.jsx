import React from 'react'
import { BottomBarWrap } from "./styledChooseTicket"

function BottomBar(props) {
    return (
        <BottomBarWrap>
            <div className="price">
                <span className="tt">合计：</span>
                <span className="unit">￥</span>
                <span className="num">{props.chooseType.lowPrice?props.chooseType.lowPrice*props.ticketNum:100}</span>
                <span className="unit-price">￥{props.chooseType.lowPrice?props.chooseType.lowPrice:100}/张</span>
            </div>
            <div className="notice">
                <span className="no-set">降价提醒</span>
                <span className="have-set" style={{display:"none"}}>取消提醒</span>
            </div>
            <div className="btn-buy">
                结算(
                    <span>{props.ticketNum}</span>
                )
            </div>
        </BottomBarWrap>
    )
}

export default BottomBar
