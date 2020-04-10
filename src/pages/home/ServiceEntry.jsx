import React, { Component } from 'react'
import { ServiceEntryWrap } from "./styledHome"

export default class ServiceEntry extends Component {
    render() {
        return (
            <ServiceEntryWrap>
                <div className="title">服务保障</div>
                <div className="services">
                    <div className="service-item">无票赔付 <span className="line"></span></div>
                    <div className="service-item">出票保真 <span className="line"></span></div>
                    <div className="service-item">配送保障 </div>
                </div>
            </ServiceEntryWrap>
        )
    }
}
