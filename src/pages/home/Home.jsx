import React, { Component } from 'react'

import Search from "./Search"
import Banner from "./Banner"
import Entries from "./Entries"
import Tags from "./Tags"
import ServiceEntry from "./ServiceEntry"
import Activities from "./Activities"
import FindMore from "./FindMore"
import GuessLike from "./GuessLike"

import { HomeCont } from "./styledHome"

import BScroll from "better-scroll"

export default class Home extends Component {

    state={
        bScroll:null
    }

    componentDidMount(){
        this.setState({
            bScroll:new BScroll("#home",{
                click:true,
                probeType:3,
                pullUpLoad:true,
                bounce:false
            })
        })
    }

    render() {
        return (
            <HomeCont id="home">
                <div>
                    <Search></Search>
                    <Banner></Banner>
                    <Entries></Entries>
                    <Tags></Tags>
                    <ServiceEntry></ServiceEntry>
                    <Activities href="#asd" title="近期热门" key="hot" type="hot" id="hotActivities" url="/ajax/api/v1/activities/hot"></Activities>
                    <Activities href="#asd" title="折扣专区" key="discount" type="discount" id="discountActivities" url="/ajax/api/v1/activities/discount"></Activities>
                    <FindMore></FindMore>
                    <GuessLike bScroll={this.state.bScroll}></GuessLike>
                </div>
            </HomeCont>
        )
    }
}
