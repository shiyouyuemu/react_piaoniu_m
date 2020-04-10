import styled from "styled-components"
import border from "components/public/border"

export const ActivitieItemWrap=styled.div`
    position: relative;
    margin-left:0.15rem;
    margin-right:0.15rem;
    background-color: #fff;
    .main-body{
        min-height:1.25rem;
        position: relative;
        .poster{
            width:0.75rem;
            height:1rem;
            background-size:cover;
            background-position:50%;
            position: absolute;
            left:0;
            top:0.15rem;
        }
    }
`

export const InfoWrap=border(styled.div`
    padding-top:.15rem;
    margin-left:0.92rem;
    .info-title{
        display:flex;
        .title{
            font-size:.15rem;
            color:#333;
            max-height:.44rem;
            line-height:.22rem;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: Helvetica Neue,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans;
            font-weight: 600;
            padding:0;
            white-space:pre-wrap;
        }
        .activity-tag{
            flex-shrink:0;
            max-width:.4rem;
            margin-left:0.04rem;
            color:#fff;
            .choose{
                display:flex;
                align-items:center;
                justify-content:center;
                border-radius:0.02rem;
                padding:0.01rem;
                margin-right:0.05rem;
                bottom:.12rem;
                text-align:center;
                font-size:.1rem;
                width:.15rem;
                height:.15rem;
                background-color: #f66b9d;
                box-sizing:border-box;
            }
            .eCard{
                margin-right:0.05rem;
                border-radius:0.02rem;
                padding:0.01rem;
                width:0.15rem;
                height:0.15rem;
                background-color: #96a3ff;
                bottom:0.12rem;
                text-align:center;
                font-size:.1rem;
                display:inline-block;
            }
        }
    }
    .time-address{
        font-size:.12rem;
        color:#999;
        margin-top:0.09rem;
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow:hidden;
        .split{
            margin:0 0.04rem;
        }
    }
    .rank{
        font-size:.1rem;
        color:#999;
        margin-top:0.04rem;
        margin-bottom:0.16rem;
        >span{
            font-size:.12rem;
            font-weight:700;
            color:#ffb02e;
        }
    }
    .price-wrap{
        padding-bottom:0.1rem;
        .price{
            color:#ff2661;
            font-size:.18rem;
            font-weight:700;
            margin-right:0.04rem;
            top:0.01rem;
            position: relative;
        }
        .qi{
            font-size:.1rem;
            color:#999;
        }
        .status-text{
            font-size:0.1rem;
            color:#999;
            width:0.45rem;
            line-height:0.19rem;
            text-align:center;
            background-color:#f0f0f0;
        }
    }
    .promotion-info{
        margin-bottom:.1rem;
        li{
            white-space:nowrap;
            text-overflow:ellipsis;
            overflow:hidden;
            margin-bottom:0.05rem;
            .inner-icon{
                width:.11rem;
                height:.11rem;
                background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAxhJREFUOBGlVM1LVFEUP+cp5fd7kkW1McEiKMKgmUH7skVREkU6PZLELAyiWrQwrEUmBm1aFC2iNmUmRTOjQSZliZl96ChRf4Ab29XGGRW1HN/pdyfuNOiMs/DyHufdc37nd84959zHlGKJ73hamMdOs1BGCmjUnEdZrWz3T6UvBRZpNkKB7lYSqpGlgHG2WYq8xDY5sYhwOOB5oEiJeZJJnoA8Ob/wKZhzdIykGYf8nrsA1hPTdLohh3OrRga0UyI57nMdgX5p4pDfdQsZX2TiWTKMo7lVQwOo9QrUukVIahUxbG2mFDax7f+TKNCijMf9nhYRp4GJ5vB6zaqhXuUYJRVp1CQI0Aid2l7RunhpxG9w/KskzjVmjginnTDt4W5t15mGiq9Xhzc2nVR6rdOYeBnLGJleQqY3kaXDTLWWd6gzHvj/2wEET4oVJQ4F3OfEcW6DUISMessbfLbQT9VUHd8avfFU25ROfy+U6ehmHejuRQ1CF/Lt4KOFILVXjVI11cfXzSMaTgQnDvncMwBn4HAdlj3iTYhKoQz7Sosdmv+m5jiDVhZm2p9+GGzwWVUClK0yHHBXp+BYZJ4IlG52OIIZx+Vg/piRk/tTgQzTG2zHdbqM4rI48jjk8+xf5J1EMdlZttVx5vuR1jqUps/Ksw5xxevfCh5r779LQQ1QTQFUbtnBr0n4omr0pgTO75BUAfA9JqUdY3twRvvEiNW/AdPRhug1mONfLGk7TXtwVAPjJXA7yKG36E0+jv/Kyl7l1ZlqXOyCgEysou1nEP0NgqwRjvRM+VxrNVDLCZ+7FCXrVaTAvrCKSioXkipsLGPtKD0HssPh8T4c0Q3H72YO7+WK4ISyT/jdu+eJujGeuXB8bq7OruF9/RHtGy8XEUcJusoLnJnpz8hqE8jfm1R4MExju4SlC6XKQjrtlmyoww8IcRKvhMQKOtNRVjg7P/cFn+vxfsDh3BipTJTsoemtwIg2OwqXbCUlVg5TAc+2OcfBjJKp9iC9j/E8r/qh9stakx2uPep2YrzuLIsokfNkwLUlkX4p3V9wXTp38EZEtgAAAABJRU5ErkJggg==');
                background-size:100%;
                margin-right:0.05rem;
                vertical-align:middle;
                display: inline-block;
            }
            .desc{
                font-size:.12rem;
                color:#efaa35;
            }
        }
    }
`)

export const LightSpotWrap=border(styled.div`
    font-size:.12rem;
    color:#999;
    padding:0.14rem 0;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
`)