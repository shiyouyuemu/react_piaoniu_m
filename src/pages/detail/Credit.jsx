import React, { Component } from 'react'

import { CreditWrap } from "./styledDetail"
export default class Credit extends Component {
    render() {
        return (
            <CreditWrap>
                <div className="top">票牛服务保障</div>
                <div className="items">
                    <div className="credit-item">
                        <img src="https://static.piaoniu.com/nuxt-static/img/icon-danbao2.2e56eee.png" alt=""/>
                        <span>出票保真</span>
                    </div>
                    <div className="credit-item">
                        <img src="https://static.piaoniu.com/nuxt-static/img/icon-youpiao2.0df1e5e.png" alt=""/>
                        <span>配送保障</span>
                    </div>
                </div>
            </CreditWrap>
        )
    }
}
