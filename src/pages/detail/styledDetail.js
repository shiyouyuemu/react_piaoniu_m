import styled from "styled-components"
import border from "components/public/border"

export const DetailWrap= styled.div`
    height:100vh;
    .title{
        color:#525252;
        font-size:.17rem;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
        font-weight:500;
    }
    .section{
        overflow:hidden;
        background-color:#fff;
        margin-top:0.1rem;
        .section-title{
            font-weight:700;
            font-size:0.15rem;
            padding-left:0.15rem;
            margin-bottom:-0.15rem;
            overflow:hidden;
            height:0.55rem;
            line-height:0.55rem;
            color:#262626;
        }
        .content{
            line-height:1.6;
            font-size:0.15rem;
            padding:0.05rem 0.14rem 0;
            color:#666;
            margin-bottom:0.15rem;
            position: relative;
        }
    }
`

export const DetailCardWrap=styled.div`
    background-color:#FFF;
    position: relative;
    .card-img{
        height:2.1rem;
        width:100%;
        background-color:#292138;
        position: absolute;
        overflow:hidden;
        min-height:1.8rem;
    }
    .card-main{
        position: relative;
        overflow:hidden;
        background-color: #292138;
        .poster{
            float: left;
            height:1.28rem;
            width:0.96rem;
            margin-left:0.15rem;
            margin-top:0.2rem;
        }
        .info{
            position: relative;
            margin:0.2rem 0.15rem 0.16rem 1.27rem;
            min-height:1.28rem;
            .top{
                min-height:1rem;
                margin-bottom:0.1rem;
                .title{
                    font-size:.17rem;
                    font-weight:700;
                    min-height:0.44rem;
                    line-height:0.22rem;
                    color:#fff;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-bottom:0.13rem;
                    white-space:pre-wrap;
                }
                
                .price-line{
                    display: flex;
                    align-items:center;
                    color:#fff;
                    .price-info{
                        flex:1;
                        display:flex;
                        align-items:center;
                        .price{
                            font-size:0.24rem;
                            margin-right:0.03rem;
                        }
                        .qi{
                            font-size:.12rem;
                        }
                    }
                    .buy-num{
                        font-size:.1rem;
                    }
                }
            }
        }
        .like-comment{
            color:#fff;
            margin:0.16rem 0.15rem;
            display:flex;
            justify-content:space-between;
            .like,.comment{
                background:hsla(0,0%,100%,.1);
                height:0.3rem;
                border-radius:0.03rem;
                line-height:0.3rem;
                text-align:center;
                font-size:0.14rem;
                width:48%;
                img{
                    width:.15rem;
                    height:.14rem;
                    margin-bottom:-0.02rem;
                    margin-right:0.04rem;
                }
            }
        }
    }
    .card-bar{
        padding-left:0.14rem;
        .time{
            font-size:0.15rem;
            padding-top:0.24rem;
        }
        .text{
            font-size:.13rem;
            color:#333;
            margin-right:0.2rem;
        }
        .arr-right{
            width:0.08rem;
            height:0.13rem;
            background-image:url('https://static.piaoniu.com/nuxt-static/img/arr-right.1655c6a.png');
            background-size:0.08rem 0.13rem;
            position: absolute;
            top:50%;
            right:0.14rem;
            margin-top:-0.07rem;
        }
    }
`

export const PositionWrap=border(styled.div`
    display:flex;
    align-items:center;
    height:0.33rem;
    padding-bottom:0.15rem;
    padding-top:0.16rem;
    box-sizing:content-box;
    .inner{
        margin-right:0.11rem;
        overflow:hidden;
        flex:1;
        .name{
            font-size:0.15rem;
            white-space:nowrap;
            text-overflow:ellipsis;
            overflow:hidden;
        }
    }
    .icon{
        padding:0 0.22rem;
        border-left:1px solid #f5f5f5;
        img{
            width:0.2rem;
            height:0.24rem;
        }
    }
`)
export const TicketInfoWrap=border(styled.div`
    position: relative;
    padding:0.16rem 0;
    
`)
export const ServiceInfoWrap=border(styled.div`
    position: relative;
    padding:0.16rem 0;
    display:flex;
    .service-item{
        margin-right:0.1rem;
        img{
            width:.12rem;
            margin-right:0.04rem;
        }
    }
`)

export const PromotionWrap=border(styled.div`
    position: relative;
    font-size:0.12rem;
    padding:.15rem 0;
    ul>li{
        margin-bottom:0.08rem;
        img{
            width:0.11rem;
            height:0.11rem;
        }
        .desc{
            width:84%;
            color:#efaa35;
            font-size:0.12rem;
            display: inline-block;
            margin-left:0.03rem;
            white-space:nowrap;
            text-overflow:ellipsis;
            overflow:hidden;
        }
        &:last-child{
            margin-bottom:0;
        }
    }
`)

export const StarsArrayWrap =styled.div`
    margin-top:0.1rem;
    color:#333;
    padding:0.2rem 0.14rem;
    background-color:#fff;
    .stars-one{
        .stars-head{
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:0.19rem;
            .title{
                font-size:.15rem;
                font-weight:700;
                color:#333;
            }
            .link{
                font-size:0.12rem;
                color:#888;
            }
        }
        .stars-detail{
            display:flex;
            overflow:hidden;
            flex-direction:column;
            .star-item{
                margin-bottom:0.1rem;
                width:100%;
                display:flex;
                align-items:flex-start;
                .star-item-img{
                    width:0.68rem;
                    height:0.68rem;
                    margin-right:0.12rem;
                }
                .star-item-detail{
                    flex:1;
                    .star-item-name{
                        font-size:0.18rem;
                        color:#333;
                        .desc{
                            font-size:0.11rem;
                            color:#999;
                            margin-left:0.06rem;
                        }
                    }
                    .star-item-focus{
                        display:flex;
                        justify-content:space-between;
                        margin-top:0.12rem;
                        .focus-people{
                            display:flex;
                            align-items:center;
                            .small-head{
                                width:0.28rem;
                                height:0.28rem;
                                border-radius:50%;
                                margin-right:0.05rem;
                            }
                            .focus-num{
                                font-size:.11rem;
                                color:#999;
                                margin-left:0.11rem;
                                >span{
                                    font-size:0.14rem;
                                    font-weight:700;
                                    color:#ffb200;
                                }
                            }
                        }
                        .focus-btn{
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            color:#4b8feb;
                            width:0.68rem;
                            height:0.28rem;
                            text-align:center;
                            border:1px solid #4b8feb;
                            border-radius:0.14rem;
                            background-color:#fff;
                            font-size:0.12rem;
                            img{
                                height:0.08rem;
                                margin-right:0.06rem;
                            }
                        }
                    }
                }
            }
        }
    }
`

export const IntroductionWrap=styled.div`
    .introduction-content{
        
        .inner{
            height:3rem;
            overflow:hidden;
            .cont{
                p{
                    margin:0;
                    font-size:0.14rem;
                    line-height:1.8;
                    color:#666;
                }
                img{
                    margin-top:0.22rem;
                    margin-bottom:0.15rem;
                    height:auto!important;
                    width:3.45rem!important;
                }
            }
        }
        .more{
            position: absolute;
            left:0;
            bottom:0;
            width:100%;
            .shadow{
                width:100%;
                height:0.4rem;
                background:linear-gradient(180deg,hsla(0,0%,100%,0),#fff);
            }
            .text{
                width:100%;
                height:0.5rem;
                background-color:#fff;
                line-height:0.5rem;
                font-size:0.15rem;
                text-align:center;
                color:#5fb7fc;
                img{
                    width:.11rem;
                    margin-left:0.05rem;
                    position: relative;
                    top:-0.01rem;
                    margin-top:0;
                    margin-bottom:0;
                }
            }
        }
    }
`

export const DetailCommentWrap=styled.div`  
    .comment-showall{
        height:0.44rem;
        line-height:0.44rem;
        text-align:center;
        font-size:.15rem;
        color:#5fb7fc;
    }
`
export const AboutActivityWrap=styled.div`
    .content{
        margin-bottom:0;
        padding:0.15rem 0;
    }
`

export const CreditWrap=styled.div`
    padding:.16rem 0;
    background-color:transparent;
    text-align:center;
    .top{
        margin-bottom:0.22rem;
        color:#999;
        position: relative;
        height:0.2rem;
        &:before,&:after{
            content:"";
            display:inline-block;
            width:0.6rem;
            height:0.01rem;
            background-color:#e6e6e6;
            margin-bottom:0.05rem;
        }
    }
    .items{
        display:flex;
        align-items:center;
        justify-content:center;
        padding:0 0.35rem;
        .credit-item{
            margin-right:0.56rem;
            img{
                width:0.3rem;
                height:0.3rem;
                margin:0 auto;
            }
            span{
                margin-top:0.07rem;
                color:#999;
                font-size:0.12rem;
                display:block;
                line-height:1;
                white-space:nowrap;
            }
            &:last-child{
                margin-right:0;
            }
        }
    }
`
export const SupportWrap=styled.div`
    width:100%;
    line-height:0.47rem;
    background-color:#f2f2f2;
    text-align:center;
    color:#999;
    font-size:0.12rem;
`

export const BottomWrap=styled.div`
    position: fixed;
    display:flex;
    height:0.49rem;
    width:100%;
    bottom:0;
    z-index:9;
    .custom-service{
        width:0.65rem;
        background-color:#fff;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        border-top:1px solid #e6e6e6;
        .icon{
            width:0.2rem;
            height:0.2rem;
            margin-bottom:0.02rem;
            background-size:contain;
            background-image:url("https://static.piaoniu.com/nuxt-static/img/custom-service.89c653b.png");
        }
        >span{
            height:0.16rem;
            display:block;
            text-align:center;
            font-size:0.11rem;
            color:#666;
        }
    }
    .buy-btn{
        background-color:#ff2661;
        flex:1;
        font-size:0.16rem;
        line-height:0.49rem;
        min-width:1.1rem;
        height:100%;
        color:#fff;
        text-align:center;
    }
`

export const NowPicWrap=styled.div`
    .section-title{
        position: relative;
        .more{
            padding-right:0.15rem;
            color:#888;
            font-size:0.12rem;
            margin-right:0.1rem;
            float:right;
            font-weight:400;
            .icon{
                right:0.14rem;
                top:40%;
                position: absolute;
                background-image:url('https://static.piaoniu.com/nuxt-static/img/arr-right.1655c6a.png');
                width:0.05rem;
                height:0.1rem;
                background-size:0.05rem 0.1rem;
            }
        }
    }
    .content{
        position: relative;
        overflow:hidden;
        ul{
            white-space:nowrap;
            float:left;
        }
        .item{
            position: relative;
            width:1.71rem;
            height:1.14rem;
            margin-right:0.05rem;
            display: inline-block;
            .img{
                width:100%;
                height:100%;
                background-size:cover;
                background-position:50%;
            }
        }
        .more-item{
            background-color:#eaebee;
            margin-right:0.1rem;
            .inner{
                position: absolute;
                width:1.07rem;
                left:50%;
                margin-left:-0.54rem;
                text-align:center;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                height:100%;
                .tt{
                    height:0.21rem;
                    line-height:0.21rem;
                    font-size:0.15rem;
                    margin-bottom:0.03rem;
                    color:#7c7c7c;
                }
                .split{
                    width:100%;
                    height:0.01rem;
                    background-color:#d0d1d4;
                    transform:scaleY(0.5);
                }
                .num-pic{
                    margin-top:0.07rem;
                    color:#a8a8a8;
                }
            }
        }
    }
`