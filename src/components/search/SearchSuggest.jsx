import React, { Component } from 'react'
import { SearchSuggestWrap } from "./styledSearch"
import SuggestActivity from "./SuggestActivity"
import BScroll from "better-scroll"
export default class SearchSuggest extends Component {

    componentDidMount(){
        new BScroll("#searchSuggest",{click:true,stopPropagation: true})
    }

    changeKeyWord=(keyword)=>()=>{
        console.log(1)
        this.props.changeKeyWord(keyword)
    }

    render() {
        return (
            <SearchSuggestWrap id="searchSuggest" style={{display:this.props.ifShowSuggest&&"block"}}>
                <div>
                    {
                        this.props.keywordsList.map(value=>{
                            return <SuggestActivity item={value} key={value.id}></SuggestActivity>
                        })
                    }
                    <div className="suggest-end" onClick={this.changeKeyWord(this.props.keyWords)}>查找“{this.props.keyWords}”</div>
                </div>
            </SearchSuggestWrap>
        )
    }
}
