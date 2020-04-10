import React, { Component } from 'react'
import { ActivitiesWrap } from "./styledActivities"
import BScroll from "better-scroll"

export default class Activities extends Component {

    componentDidMount(){
        this.setState({
            bScroll:new BScroll(`#${this.props.id}`,{
                scrollX:true
            })
        })
    }

    componentDidUpdate(){
        this.state.bScroll.refresh();
    }    

    render() {
        return (
            <ActivitiesWrap id={this.props.id}>
                <div className="wrap">
                    {this.props.children}
                </div>
            </ActivitiesWrap>
        )
    }
}
