import styled from "styled-components"
import border from "components/public/border"

export const SearchWrap =styled.div`
    position: absolute;
    background-color: #fcfcfc;
    z-index:20;
    width:100%;
    height:.44rem;
    .container{
        display:flex;
        .back{
            height:.46rem;
            min-width:.28rem;
            line-height:.46rem;
            padding:0 0.2rem 0 0.1rem;
            font-size:.16rem;
        }
        .search-box{
            flex:1;
            .search-inner{
                height:.34rem;
                line-height:.34rem;
                margin:0.05rem 0.08rem;
                position: relative;
                background-color: #f2f2f2;
                border-radius:0.03rem;
                .search-wrap{
                    margin:0 auto;
                    position: relative;
                    z-index:1;
                    .icon-search{
                        background-image:url('https://static.piaoniu.com/nuxt-static/img/search.0622317.png');
                        background-size:.15rem .17rem;
                        width:.15rem;
                        height:.17rem;
                        position: absolute;
                        left:.14rem;
                        top:50%;
                        margin-top:-0.09rem;
                    }
                    .placeholder{
                        font-size:.12rem;
                        color:#666;
                        margin-left:.37rem;
                    }
                }
                .search-input{
                    outline:none;
                    color:#8f8f8f;
                    position: absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                    border:none;
                    background-color:transparent;
                    padding:0 0.15rem;
                }
                .clear-input{
                    display:none;
                    position: absolute;
                    right:0.06rem;
                    top:0.08rem;
                    width:0.18rem;
                    height:0.18rem;
                    background-image:url("https://static.piaoniu.com/nuxt-static/img/close.47d02ac.png");
                    background-size:100%;
                }
            }
            .focus{
                .search-wrap{
                    display:none;
                }
                .clear-input{
                    display:block;
                }
            }
        }
        .cancel{
            font-size:.16rem;
            height:.44rem;
            line-height:.44rem;
            color:#666;
            padding:0 0.15rem 0 0.05rem;
        }
    }
`

export const SearchKeyWordsWrap=styled.div`
    display:none;
    position: fixed;
    top:.44rem;
    bottom:0;
    overflow:auto;
    width:100%;
    z-index:1000;
    background-color:#fff;
    transition:all .2s linear;
    opacity:1;
    .row-title{
        background-color:#f2f2f2;
        height:.32rem;
        line-height:.32rem;
        padding-left:0.15rem;
        color:#666;
    }
    .hot-keywords{
        padding:0.15rem 0 0 0.15rem;
        overflow:hidden;
        .keyword{
            margin-right:0.13rem;
            margin-bottom:0.13rem;
            font-size:.14rem;
            padding:0.09rem 0.13rem;
            border:1px solid #e6e6e6;
            border-radius:0.04rem;
            float:left;
        }
    }
    .search-history{
        li{
            white-space:nowrap;
            text-overflow:ellipsis;
            overflow:hidden;
            height:0.44rem;
            line-height:0.44rem;
            padding-left:.1rem;
            padding-right:0.5rem;
            position: relative;
            border-bottom:1px solid #e6e6e6;
            span{
                position:absolute;
                right:0;
                color:#ff5636;
                padding-right:0.1rem;
            }
        }
        .remove-all{
            color:#ff5636;
            text-align:center;
        }
    }
`

export const SearchSuggestWrap=styled.div`
    display:none;
    position: fixed;
    left:0;
    width:100%;
    top:.44rem;
    right:0;
    bottom:0;
    padding-left:.14rem;
    background-color:#fff;
    z-index:1001;
    overflow:auto;
    .suggest-end{
        color:#4b8feb;
        text-align:center;
        padding:0.15rem 0;
    }

`

export const SuggestActivityWrap=border(styled.div`
    display:flex;
    padding:0.1rem 0.1rem 0.1rem 0;
    .suggest-poster{
        position: relative;
        margin-right:.16rem;
        img{
            width:0.44rem;
            height:0.58rem;
        }
    }
    .suggest-detail{
        flex:1;
        .suggest-name{
            font-size:0.15rem;
            font-weight:700;
            line-height:.22rem;
            color:#262626;
            margin-bottom:0.09rem;
            overflow:hidden;
            text-overflow:ellipsis;
        }
        .suggest-line{
            display:flex;
            justify-content:space-between;
            align-items:center;
            .suggest-rank{
                font-size:.12rem;
                color:#666;
                >span{
                    font-size:.14rem;
                    color:#ffb02e;
                }
            }
            .suggest-price{
                .unit{
                    font-size:.1rem;
                    color:#ff2661;
                }
                .num{
                    font-size:.18rem;
                    color:#ff2661;
                }
                .end{
                    font-size:.1rem;
                    color:#666;
                }
            }
        }
    }
`)