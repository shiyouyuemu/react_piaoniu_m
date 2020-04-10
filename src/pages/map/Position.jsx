import React, { Component } from 'react'
import { PositionWrap , VenueWrap , ListTitleWrap , TransportWrap} from "./styledPosition"
import { NavBar,Icon } from "antd-mobile"
import ActivitieItem from "components/activitieItem/ActivitieItem"
import { get } from "utils/http"

export default class Position extends Component {

    state={
        activityList:[],
        address:{}
    }

    async componentDidMount(){
        let id=this.props.match.params.id;
        let activityList=await get({
            url:`/ajax/api/v1/venues/${id}/activities`,
            pageSize:10,
            pageIndex:1
        })
        let address=await get({
            url:`/ajax/api/v1/venues/${id}`
        })
        this.setState({
            activityList:activityList.data,
            address:address
        })
        if(this.state.address.address!=="票牛商城"){
            this.refs.map.contentWindow.postMessage(address,"*")
        }
    }

    goBack=()=>{
        this.props.history.goBack()
    }

    render() {
        return (
            <PositionWrap>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" color="#bbb"size="lg" onClick={this.goBack}></Icon>}
                ><div className="title">场馆详情</div></NavBar>
                {
                    this.state.address.address!=="票牛商城"?(
                        <iframe ref="map" className="map" id="venue" title="map" frameBorder="0"src="/map.html"></iframe>
                    ):(
                        <img width="100%" src="https://static.piaoniu.com/m/static/img/mapDefault.1d74686.png" alt=""/>
                    )
                }
                <VenueWrap
                    width="0 0 1px 0"
                    color="#e6e6e6"
                >
                    <div className="name">
                        <div className="icon"></div>
                        <div className="text">{this.state.address.name}</div>
                    </div>
                    <div className="address">{this.state.address.address}</div>
                </VenueWrap>
                {
                    this.state.address.transportation&&(
                        <TransportWrap
                            width="0 0 1px 0"
                            borderStyle="dashed"
                            color="#e6e6e6"
                        >
                            <div className="title">
                                <span className="icon"></span>
                                <span className="text">交通：</span>
                            </div>
                            <div className="transport-container">
                                <p>{this.state.address.transportation}</p>
                            </div>
                        </TransportWrap>
                    )
                }
                <div className="activity-list">
                    <ListTitleWrap
                        width="0 0 1px 0"
                        color="#e6e6e6"
                    >近期演出</ListTitleWrap>
                    <div className="list-container">
                        {
                            this.state.activityList.map(value=>{
                                return (
                                    <ActivitieItem
                                        key={value.id}
                                        item={value}
                                    ></ActivitieItem>
                                )
                            })
                        }
                    </div>
                </div>
            </PositionWrap>
        )
    }
}
