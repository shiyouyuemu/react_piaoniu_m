import React, { Component } from 'react'
import { SearchWrap } from "./styledHome"
import { SET_IFSHOW } from "./store/action-types"
import { SET_IFSHOWSEARCH } from "../list/store/action-types"
import { connect } from "react-redux"

const mapStateToProps=(state)=>{
    return{
        cityName:state.getIn(["home","cityName"])
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        setIfshow:(ifShow)=>{
            dispatch({type:SET_IFSHOW,data:ifShow})
        },
        setIfShowSearch:()=>{
            dispatch({type:SET_IFSHOWSEARCH,data:true})
        }
    }
}

class Search extends Component {

    showCityList=()=>{
        this.props.setIfshow(true)
    }

    showSearch=()=>{
        this.props.setIfShowSearch()
    }
    saoyisao=()=>{
        window.wx.ready(function(){
            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
            window.wx.scanQRCode({
                needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function (res) {
                    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                    alert(result)
                }
            });
          });
    }

    render() {
        return (
            <SearchWrap>
                <div className="city-picker" onTouchEnd={this.showCityList}>{this.props.cityName}</div>
                <div className="search-box" onClick={this.showSearch}>
                    <div className="container">
                        <div className="search-icon"></div>
                        <span className="search-placeholder">搜索明星、演出、场馆</span>
                    </div>
                </div>
                <div className="user">
                    <span className="user-icon" onClick={this.saoyisao}></span>
                </div>
            </SearchWrap>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)