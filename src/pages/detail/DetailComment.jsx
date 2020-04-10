import React, { Component } from 'react'
import { DetailCommentWrap } from "./styledDetail"

export default class DetailComment extends Component {
    render() {
        return (
            <DetailCommentWrap className="section">
                <div className="section-title">
                    所有评论(9)
                </div>
                <div className="comment-showall">全部评论 9条</div>
            </DetailCommentWrap>
        )
    }
}
