import styled from "styled-components"
import border from "components/public/border"

export const PositionWrap=styled.div`
    .title{
        color:#525252;
        font-size:0.17rem;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
        font-weight:500;
    }
    .map{
        width:3.75rem;
        height:2.2rem;
    }
    .activity-list{
        width:100%;
        background-color:#fff;
        margin-top:0.1rem;
    }
`
export const VenueWrap=border(styled.div`
    background-color:#fff;
    overflow:hidden;
    .name{
        margin-top:0.13rem;
        position: relative;
        .icon{
            background:url('https://static.piaoniu.com/m/static/img/venueIcon.7ffd824.png');
            width:0.16rem;
            height:0.16rem;
            background-size:0.16rem;
            position: absolute;
            left:0.14rem;
        }
        .text{
            text-align:left;
            padding-right:0.25rem;
            margin-left:0.36rem;
        }
    }
    .address{
        font-size:0.12rem;
        color:#666;
        margin-left:0.36rem;
        margin-top:0.05rem;
        margin-bottom:0.15rem;
    }
   
`)

export const ListTitleWrap=border(styled.div`
    height:0.36rem;
    line-height:0.36rem;
    padding-left:0.15rem;
    background-color:#fff;
`)

export const TransportWrap =border(styled.div`
    position: relative;
    padding-top:0.1rem;
    line-height:1;
    padding-bottom:0.1rem;
    background-color:#fff;
    overflow:hidden;
    .title{
        float:left;
        .icon{
            background:url('https://static.piaoniu.com/m/static/img/venueTrafficIcon.f0db479.png');
            width:.15rem;
            height:.15rem;
            background-size:0.15rem 0.15rem;
            position: absolute;
            left:0.14rem;
        }
        .text{
            vertical-align:top;
            margin-left:0.36rem;
            font-size:0.12rem;
        }
    }
    .transport-container{
        margin-right:0.15rem;
        overflow:hidden;
        p{
            font-size:0.12rem;
            color:#666;
            margin-top:0;
            line-height:1.2;
        }
    }
`)