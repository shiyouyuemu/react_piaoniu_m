import React, { Component } from 'react'
import { TagsWrap,TagItemWrap } from "./styledHome"

export default class Tags extends Component {
    state={
        tagList:[
            {
                id:"dae9abe27089b8d80f4ab01d78a2e7fc4f72af71",
                title:"0元看演出",
                textUrl:"https://assets.piaoniu.com/home/op1-title-v2@3x.png",
                topUrl:"https://assets.piaoniu.com/home/op1-bgtext@3x.png",
                posterUrl:"https://img.piaoniu.com/misc/dae9abe27089b8d80f4ab01d78a2e7fc4f72af71.png"
            },
            {
                id:"1cca4af4f80feda66133b40c8ce0c196dbb1f9f2",
                title:"限时限量抢",
                textUrl:"https://assets.piaoniu.com/home/op2-title@3x.png",
                topUrl:"https://assets.piaoniu.com/home/op2-bgtext@3x.png",
                posterUrl:"https://img.piaoniu.com/misc/1cca4af4f80feda66133b40c8ce0c196dbb1f9f2.png"
            }
        ]
    }
    renderItem(){
        return this.state.tagList.map((value)=>{
            return (
                <TagItemWrap
                    className="item"
                    width="1px"
                    color="#e6e6e6"
                    radius="6"
                    key={value.id}
                >
                    <div className="title-wrap">
                        <div className="main-title" style={{backgroundImage:`url(${value.textUrl})`}}></div>
                        <div className="sub-title">
                        {value.title}
                        </div>
                    </div>
                    <div className="poster-wrap">
                        <div 
                            className="top-text"
                            style={{backgroundImage:`url(${value.topUrl})`}}
                        > 
                        </div>
                        <div
                            className="poster"
                            style={{backgroundImage:`url(${value.posterUrl})`}}
                        >
                        </div>
                    </div>
                </TagItemWrap>
            )
        })
    }
    render() {
        return (
            <TagsWrap>
                {
                    this.renderItem()
                }
            </TagsWrap>
        )
    }
}
