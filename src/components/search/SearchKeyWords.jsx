import React, { Component } from 'react'
import { SearchKeyWordsWrap } from "./styledSearch"
import { get } from "utils/http"
import store from "nodemodules/store"
import { withRouter } from "react-router-dom"

@withRouter
class SearchKeyWords extends Component {

    state={
        data:[],
        history:store.get('searchHistory')||[]
    }

    async componentDidMount(){
        let result=await get({
            url:"/ajax/api/v1/activities/hottest"
        })
        this.setState({
            data:result
        })
    }

    changeKeyWord=(keyword)=>()=>{
        this.props.changeKeyWord(keyword)
    }

    remove=(value)=>(e)=>{
        e.stopPropagation();
        let arr=store.get('searchHistory')
        arr.splice(arr.indexOf(value),1)
        store.set('searchHistory',arr)
        this.setState({
            history:arr
        })
    }

    goSearch=(value)=>()=>{
        let arr=store.get("searchHistory")||[]
        if(arr.indexOf(value)===-1){
            arr.push(value)
            store.set('searchHistory',arr)
        }
        this.props.hideAll(value)()
        this.props.history.push(`/searchlist/${value}`)
    }

    render() {
        return (
            <SearchKeyWordsWrap style={{display:this.props.ifShowKeyWords&&"block"}}>
                <div className="row-title">热门搜索</div>
                <div className="hot-keywords">
                    {
                        this.state.data.map(value=>{
                            return (
                                <div 
                                    className="keyword"
                                    key={value.id+value.keyword+"fsfd"}
                                    onClick={this.changeKeyWord(value.keyword)}
                                >
                                    {value.keyword}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row-title">搜索记录</div>
                <div className="search-history">
                    {
                        this.state.history.length>0&&(
                            <ul>
                                {
                                    this.state.history.map(value=>{
                                        return (
                                            <li 
                                                key={value+"-keyword"}
                                                onClick={this.goSearch(value)}
                                            >{value}
                                                <span onClick={this.remove(value)}>删除</span>
                                            </li>
                                        )
                                    })
                                }
                                <li className="remove-all">清除历史记录</li>
                            </ul>
                        )
                    }
                </div>
            </SearchKeyWordsWrap>
        )
    }
}
export default SearchKeyWords