import React, { Component } from 'react'
import { BottomWrap } from "./styledDetail"

export default class Bottom extends Component {
    render() {
        return (
            <BottomWrap>
                <a href="#a" className="custom-service">
                    <div className="icon"></div>
                    <span>客服</span>
                </a>
                <div className="buy-btn">直接购票</div>
            </BottomWrap>
        )
    }
}
