import React, { Component } from 'react'
import { EntriesWrap } from "./styledHome"
import { NavLink } from "react-router-dom"

export default class Entries extends Component {

    state={
        categoryList:{
            main:[
                {
                    id:"category-live-large",
                    title:"演唱会",
                    categoryId:1,
                    url:"http://assets.piaoniu.com/home/icons/category-live-large.png"
                },
                {
                    id:"category-drama-large",
                    title:"话剧歌剧",
                    categoryId:2,
                    url:"http://assets.piaoniu.com/home/icons/category-drama-large.png"
                },
                {
                    id:"category-exibition-large",
                    title:"休闲展览",
                    categoryId:5,   
                    url:"http://assets.piaoniu.com/home/icons/category-exibition-large.png"
                },
                {
                    id:"category-sports-large",
                    title:"体育赛事",
                    categoryId:8,
                    url:"http://assets.piaoniu.com/home/icons/category-sports-large.png"
                },
                {
                    id:"category-concert-large",
                    title:"音乐会",
                    categoryId:3,
                    url:"http://assets.piaoniu.com/home/icons/category-concert-large.png"
                }
            ],
            sub:[
                {
                    id:"category-child-small-v2",
                    title:"儿童亲子",
                    categoryId:4,
                    url:"http://assets.piaoniu.com/home/icons/category-child-small-v2.png"
                },
                {
                    id:"category-xiqu-small-v2",
                    title:"戏曲综艺",
                    categoryId:7,
                    url:"http://assets.piaoniu.com/home/icons/category-xiqu-small-v2.png"
                },
                {
                    id:"category-dance-small",
                    title:"舞蹈芭蕾",
                    categoryId:6,
                    url:"http://assets.piaoniu.com/home/icons/category-dance-small.png"
                },
                {
                    id:"category-travel-small",
                    title:"旅游玩乐",
                    categoryId:9,
                    url:"http://assets.piaoniu.com/home/icons/category-travel-small.png"
                },
                {
                    id:"category-play-small-v2",
                    title:"更多精彩",
                    categoryId:0,
                    url:"http://assets.piaoniu.com/home/icons/category-play-small-v2.png"
                }
            ]
        }
    }


    renderCategory(type){
        return this.state.categoryList[type].map((value)=>{
            return (
                <NavLink
                    key={value.id}
                    to={`/list/${value.categoryId}`}
                >
                    <img src={value.url} alt=""/>
                    <div>{value.title}</div>
                </NavLink>
            )
        })
    }

    render() {
        return (
            <EntriesWrap>
                <div className="main-categories">
                   {this.renderCategory("main")}
                </div>
                <div className="sub-categories">
                    {this.renderCategory("sub")}
                </div>
            </EntriesWrap>
        )
    }
}
