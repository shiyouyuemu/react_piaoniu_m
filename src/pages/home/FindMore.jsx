import React, { Component } from 'react'
import { FindMoreWrap } from "./styledHome"

export default class FindMore extends Component {
    render() {
        return (
            <FindMoreWrap
                width="1px"
                radius="4"
                color="#f5f5f5"
            >
                <span>更多精彩内容待你发现</span>
                <span className="arrow"></span>
            </FindMoreWrap>
        )
    }
}
