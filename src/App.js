import React from 'react';
import Home from "./pages/home/Home"
import "assets/styles/reset.css"
import { get } from "utils/http"
import _ from "lodash"
import store from "nodemodules/store"

import { connect } from "react-redux"

import Search from "components/search/Search"
import City from "pages/home/City"
import List from "pages/list/List"
import Detail from "pages/detail/Detail"
import Position from "pages/map/Position"
import SearchList from "pages/search/SearchList"
import ChooseTicket from "pages/chooseTicket/ChooseTicket"

import { SET_BSCROLL } from "pages/home/store/action-types"
import { Switch,Route,Redirect,withRouter } from "react-router-dom"

const mapStateToProps=(state)=>{
  return{
    ifShow:state.getIn(["home","ifShow"]),
    cityName:state.getIn(["home","cityName"]),
    ifShowSearch:state.getIn(["list","ifShowSearch"])
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    setBScroll:(action)=>{
      dispatch({type:SET_BSCROLL,data:action})
    }
  }
}
@withRouter
class App extends React.Component{


  state={
    cityList:store.get("cityList")?store.get("cityList"):{},
    indexList:store.get("indexList")?store.get("indexList"):[],
    hotList:store.get("hotList")?store.get("hotList"):[],
    ifShowSearch:true
}

async componentDidMount(){
    if(this.state.indexList.length===0){
        let result=await get({
            url:"/ajax/api/v2/cities/active"
        })
        result=_.groupBy(result,"firstLetter")
        this.setState({
            cityList:result,
            indexList:Object.keys(result)
        })
        store.set("indexList",Object.keys(result))
        store.set("cityList",result)
    }
    if(this.state.hotList.length===0){
        let hot_result=await get({
            url:"/ajax/api/v1/cities/hot"
        })
        this.setState({
            hotList:hot_result
        })
        store.set("hotList",hot_result)
    }
}

  render(){
    let path=this.props.location.pathname
    return (
      <div>
        {
         this.props.ifShow?(
         <City
          {...this.state}
          ></City>
         ):""
        }
        {
          (path.indexOf("list")!== -1||this.props.ifShowSearch)&&(
            <Search
              ifShowBack={!this.props.ifShowSearch}
              ifshowCancel={this.props.ifShowSearch}
              ifHome={this.props.ifShowSearch}
            ></Search>
          )
        }
              <Switch>
                <Route
                  path="/home"
                  render={()=>{
                    return <Home key={this.props.cityName}></Home>
                  }}
                ></Route>
                <Route
                  path="/list/:categoryId"
                  render={(props)=>{
                    return <List {...props}></List>
                  }}
                ></Route>
                <Route
                  path="/detail/:dId"
                  render={(props)=>{
                    return <Detail {...props}></Detail>
                  }}
                ></Route>
                <Route
                  path="/position/:id"
                  render={
                    (props)=>{
                      return (
                        <Position {...props}></Position>
                      )
                    }
                  }
                ></Route>
                <Route
                  path="/searchlist/:keywords"
                  render={
                    (props)=>{
                      return (
                        <SearchList {...props}></SearchList>
                      )
                    }
                  }
                ></Route>
                <Route
                  path="/chooseTicket/:tid"
                  render={
                    (props)=>{
                      return (
                        <ChooseTicket {...props}></ChooseTicket>
                      )
                    }
                  }
                ></Route>
                <Redirect
                  from="/"
                  exact
                  to="/home"
                ></Redirect>
              </Switch>
          
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
