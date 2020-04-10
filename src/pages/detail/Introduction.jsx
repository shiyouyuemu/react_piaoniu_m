import React, { Component } from 'react'
import { IntroductionWrap } from "./styledDetail"

export default class Introduction extends Component {

    state={
        ifShowAll:false
    }

    showAll=()=>{
        this.setState({
            ifShowAll:true
        })
    }

    render() {
        return (
            <IntroductionWrap className="section">
                <div className="section-title">
                    演出简介
                </div>
                <div className="introduction-content content">
                    <div className="inner" style={{height:this.state.ifShowAll?"auto":""}}>
                        <div className="cont">
                            {
                                this.props.activityDetails.map(value=>{
                                    return (
                                            <p
                                                key={value.id}
                                                dangerouslySetInnerHTML={{__html:value.detailDesc}}
                                            ></p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="more" style={{display:this.state.ifShowAll?"none":"block"}}>
                        <div className="shadow"></div>
                        <div className="text" onClick={this.showAll}>
                            展开更多
                            <img src="https://static.piaoniu.com/nuxt-static/img/blueArrowDown.9e945aa.png" alt=""/>
                        </div>
                    </div>
                </div>
            </IntroductionWrap>
        )
    }
}
