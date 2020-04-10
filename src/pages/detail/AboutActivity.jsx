import React, { Component } from 'react'
import { AboutActivityWrap } from "./styledDetail"
import ActivitieItem from "components/activitieItem/ActivitieItem"

export default class AboutActivity extends Component {
    render() {
        return (
            <AboutActivityWrap className="section">
                <div className="section-title">相关演出</div>
                <div className="content">
                    <ActivitieItem></ActivitieItem>
                </div>
            </AboutActivityWrap>
        )
    }
}
