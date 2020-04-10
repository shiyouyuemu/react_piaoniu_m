import React, { Component } from 'react'
import { StarsArrayWrap } from "./styledDetail"

export default class StarsArray extends Component {
    render() {
        return (
            <StarsArrayWrap>
                <div className="stars-one">
                    <div className="stars-head">
                        <div className="title">艺人明星</div>
                        <div className="link">详情 ></div>
                    </div>
                    <div className="stars-detail">
                        {
                            this.props.starsList.map(value=>{
                                return (
                                    <div className="star-item" key={value.id}>
                                        <img className="star-item-img" src={value.avatar} alt=""/>
                                        <div className="star-item-detail">
                                            <div className="star-item-name">{value.name}<span className="desc"></span></div>
                                            <div className="star-item-focus">
                                                <div className="focus-people">
                                                    {
                                                        value.fans.slice(0,3).map(item=>{
                                                            return (
                                                                <img key={item.userId} className="small-head" src={item.avatar||"https://static.piaoniu.com/nuxt-static/img/defaultAvatar.99f8eed.png"} alt=""/>
                                                            )
                                                        })
                                                    }
                                                    <div className="focus-num">
                                                        <span>{value.followNum}</span>
                                                        人关注
                                                    </div>
                                                </div>
                                                <div className="focus-btn">
                                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADxJREFUOBFjZMABvPtf/0eW2looyojMh7GZYAxy6VEDGBgY0UOb1MAcBoGINXWBwgE9bEZTIu7UQXE6AACcpgriqX9F/wAAAABJRU5ErkJggg==" alt=""/>
                                                    <div className="focus-text">关注</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </StarsArrayWrap>
        )
    }
}
