import React, { Component } from 'react'
import { HeaderWrap } from "./styledHeader"

export default class Header extends Component {
    render() {
        return (
            <HeaderWrap>
                <div className="title">{this.props.children}</div>
                <a href={this.props.href} className="more">全部</a>
            </HeaderWrap>
        )
    }
}
