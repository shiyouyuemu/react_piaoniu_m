import React from "react"
import { NavBar } from "antd-mobile"
import { HeaderWrap } from "./styledChooseTicket"
export default (props)=>{


    return (
        <HeaderWrap>
            <NavBar
                mode="light"
                leftContent={
                    <span>返回</span>
                }
                rightContent={
                    <img className="icon-tip" src="https://static.piaoniu.com/m/static/img/hint.958a721.png" alt=""/>
                }
            ><div className="title">直接购票</div></NavBar>
        </HeaderWrap>
    )
}