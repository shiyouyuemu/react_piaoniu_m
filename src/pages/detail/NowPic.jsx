import React, { Component } from 'react'
import { NowPicWrap } from "./styledDetail"

import BScroll from "better-scroll"

export default class NowPic extends Component {


    async componentDidMount(){
        
        new BScroll("#picList",{
            scrollX:true
        })
    }

    render() {
        return (
            <NowPicWrap className="section">
                <div className="section-title">
                    正在现场
                    <div className="more">
                        全部图片
                        <div className="icon"></div>
                    </div>
                </div>
                <div className="content" id="picList">
                    <ul>
                        {
                            this.props.imgList.data&&this.props.imgList.data.slice(0,5).map(value=>{
                                return (
                                    <li 
                                        className="item"
                                        key={value.id}
                                    >
                                        {
                                            value.url.indexOf("mp4")>=0
                                            ?<video className="img" src={value.url} controls></video>
                                            :<div className="img" style={{"backgroundImage":`url(${value.url})`}}></div>
                                        }
                                    </li>
                                )
                            })
                        }
                        <li className="item more-item">
                            <div className="inner">
                                <div className="tt">全部图片</div>
                                <div className="split"></div>
                                <div className="num-pic">{this.props.imgList.totalNum}张</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </NowPicWrap>
        )
    }
}
