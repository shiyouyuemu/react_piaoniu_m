import React, { Component } from 'react'
import { SearchWrap } from "./styledSearch"
import SearchKeyWords from "./SearchKeyWords"
import SearchSuggest from "./SearchSuggest"
import { get } from "utils/http"
import { withRouter } from "react-router-dom"
import _ from "lodash"
import store from "nodemodules/store"
import { connect } from "react-redux"
import { SET_IFSHOWSEARCH } from "pages/list/store/action-types"
const mapDispatchToProps=(dispatch)=>{
    return{
        setIfShowSearch:()=>{
            dispatch({type:SET_IFSHOWSEARCH,data:false})
        }
    }
}
@connect(null,mapDispatchToProps)
@withRouter
class Search extends Component {

    state={
        ifShowInput:this.props.ifshowCancel,//显示placeholder
        ifShowKeyWords:this.props.ifshowCancel,//显示历史记录
        ifShowSuggest:false,//显示suggest
        ifshowCancel:this.props.ifshowCancel,//显示取消
        ifShowBack:this.props.ifShowBack,//显示返回
        keywordsList:[],
        keyWords:"",
        autoFocus:!this.props.ifShowBack
    }

    showInput=()=>{
        if(this.refs.searchInput.value){
            return;
        }
        this.setState({
            ifShowInput:false
        })
    }

    showKeyWords=(bol)=>()=>{
        if(this.refs.searchInput.value){
            this.setState({
                ifShowSuggest:bol,//显示suggest
                ifShowKeyWords:false,//显示历史记录
                ifShowInput:true,//显示placeholdeer
                ifshowCancel:bol//显示取消
            })
        }else{
            this.setState({
                ifShowInput:bol,
                ifShowKeyWords:bol,
                ifshowCancel:bol
            })
        }
        if(!bol){
            this.refs.searchInput.blur()
            if(this.props.ifHome){
                this.props.setIfShowSearch()
            }
        }
        return false
    }
    goBack=()=>{
        this.props.setIfShowSearch(false)
        this.props.history.goBack()
    }

    search=async (e)=>{
        let keyWords=this.refs.searchInput.value
        _.debounce(async ()=>{
            if(keyWords&&e){
                this.setState({
                    ifShowSuggest:true
                })
            }else{
                this.setState({
                    ifShowSuggest:false
                })
            }
            this.setState({
                keyWords:keyWords
            })
            let result=await get({
                url:"/ajax/api/v2/activities/suggest",
                params:{
                    input:keyWords,
                    size:10
                }
            })
            this.setState({
                keywordsList:result
            })
        },500)()
    }

    remove=()=>{
        this.setState({
            keyWords:"",
            keywordsList:[],
            ifShowSuggest:false,
            ifShowKeyWords:true,
            ifshowCancel:true
        })
        this.refs.searchInput.value=""
    }

    changeKeyWord=(keyword)=>{
        this.refs.searchInput.value=keyword
        let arr=store.get("searchHistory")||[]
        if(arr.indexOf(keyword)===-1){
            arr.push(keyword)
            store.set('searchHistory',arr)
        }
        this.showKeyWords(true)()
        this.search()
        this.hideAll(keyword)()
        this.props.history.push(`/searchlist/${keyword}`)
    }

    goSearch=(e)=>{
        if(e.key==="Enter"){
            let arr=store.get("searchHistory")||[]
            if(arr.indexOf(e.target.value)===-1){
                arr.push(e.target.value)
                store.set('searchHistory',arr)
            }
            this.props.history.push(`/searchlist/${e.target.value}`)
            this.hideAll(e.target.value)()
        }
    }

    hideAll=(value)=>()=>{
        this.setState({
            ifShowKeyWords:false,
            keyWords:value,
            ifshowCancel:false,
            ifShowBack:true
        })
        this.refs.searchInput.value=value
    }

    render() {
        return (
            <>
                <SearchWrap>
                    <div className="container">
                        <div className="back" style={{display:this.state.ifShowBack?"block":"none"}} onClick={this.goBack}>返回</div>
                        <div className="search-box">
                            <div className={`search-inner ${this.state.ifShowInput&&"focus"}`}>
                                <div className="search-wrap" onClick={this.showKeyWords(true)}>
                                    <div className="icon-search"></div>
                                    <span className="placeholder">搜索明星、演出、场馆</span>
                                </div>
                                <form>
                                    <input 
                                        type="text" 
                                        className="search-input" 
                                        ref="searchInput" 
                                        onClick={this.showKeyWords(true)}
                                        onChange={this.search} 
                                        onBlur={this.showInput}
                                        onKeyDown={this.goSearch}
                                        autoFocus={this.state.autoFocus}
                                    />
                                    <div className="clear-input" onClick={this.remove}></div>
                                </form>
                            </div>
                        </div>
                        <div
                            className="cancel"
                            style={{display:this.state.ifshowCancel||"none"}}
                            onClick={this.showKeyWords(false)}
                        >取消</div>
                    </div>
                </SearchWrap>
                <SearchKeyWords
                    ifShowKeyWords={this.state.ifShowKeyWords}
                    changeKeyWord={this.changeKeyWord}
                    hideAll={this.hideAll}
                ></SearchKeyWords>
                <SearchSuggest
                    ifShowSuggest={this.state.ifShowSuggest} 
                    keywordsList={this.state.keywordsList} 
                    keyWords={this.state.keyWords}
                    changeKeyWord={this.changeKeyWord}
                ></SearchSuggest>
            </>
        )
    }
}
export default Search