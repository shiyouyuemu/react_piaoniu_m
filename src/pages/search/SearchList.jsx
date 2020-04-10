import React, { Component } from 'react'
import { SearchListWrap } from "./styledSearch"
import ListList from "../list/ListList"
import BScroll from "better-scroll"

export default class SearchList extends Component {

    state={
        bScroll:null,
        status:{
            title:"全部分类",
            categoryId:0
        },
        sortStatus:{},
        ifSetMap:false
    }

    componentDidMount(){
        this.setState({
            bScroll:new BScroll("#searchList",{
                click:true,
                bounce:false,
                probeType:3,
                pullUpLoad:true
            })
        })
    }

    render() {
        return (
            <SearchListWrap id="searchList">
                <div>
                    <ListList
                        key={this.state.status.categoryId+this.state.sortStatus.type+this.state.ifSetMap+"list"+"dfsdf"} 
                        categoryId={this.state.status.categoryId} 
                        sortStatus={this.state.sortStatus.type}
                        ifSetMap={this.state.ifSetMap}
                        bScroll={this.state.bScroll}
                        keyword={this.props.match.params.keywords}
                    ></ListList>
                </div>
            </SearchListWrap>
        )
    }
}
