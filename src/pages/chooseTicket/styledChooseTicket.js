import styled from "styled-components"
import border from "components/public/border"
export const ChooseTicketWrap = styled.div`
    #scroll{
        padding-top:0.44rem;
        background-color:#fff;
        .calendar{
            margin-top:0.82rem;
        }
        .select_pannel{
            overflow:auto;
            height:5.01rem;
            .shop_info{
                height:0.22rem;
                line-height:0.22rem;
                font-size:0.12rem;
                color:#666;
                padding-left:0.15rem;
            }
            .shop_event_picker{
                .event_picker_head{
                    width:0.3rem;
                    height:0.04rem;
                    background-color:#f2f2f2;
                    margin:0 auto;
                    margin-top:0.05rem;
                    margin-bottom:0.09rem;
                    border-radius:0.02rem;
                }
                .event_picker_body{
                    position: relative;
                    .event-picker-wrap{
                        display:flex;
                        margin-left:0.14rem;
                        margin-right:0.14rem;
                        overflow-x:auto;
                        overflow-y:hidden;
                        z-index:9;
                        .event_item{
                            padding-top:0;
                            padding-right:0;
                            padding-left:0.2rem;
                            padding-bottom:0.15rem;
                            border:0;
                            margin-bottom:0;
                            display:flex;
                            flex-wrap:wrap;
                            align-items:center;
                            border-radius:0.03rem;
                            box-sizing:border-box;
                            .event-spec{
                                width:1.1rem;
                                font-size:0.14rem;
                                text-align:center;
                                margin:auto;
                            }
                            &:first-child{
                                padding-left:0;
                            }
                            &:nth-child(odd){
                                margin-right:0;
                            }
                            &.active{
                                color:#ff2661;
                                position: relative;
                                &:after{
                                    content:"";
                                    width:0.1rem;
                                    height:0.1rem;
                                    position: absolute;
                                    left:50%;
                                    bottom:-0.05rem;
                                    transform:rotate(45deg);
                                    background-color:#fff;
                                    border-width:0.01rem;
                                    border-style:solid;
                                    margin-left:-0.0707rem;
                                    border-color:#e6e6e6 #fff #fff #e6e6e6;
                                    z-index:10;
                                }
                            }
                        }
                    }
                    .event-picker-line{
                        position: absolute;
                        border-bottom:0.01rem solid #e6e6e6;
                        bottom:0;
                        width:100%;
                    }
                }
            }
        }
    }
`

export const HeaderWrap = styled.div`
    position: fixed;
    top:0;
    left:0;
    width:100%;
    box-shadow:0 0.01rem 0.03rem 0 rgba(0, 0, 0, 0.15);
    z-index:12;
    span{
        color:#262626;
        font-size:0.16rem;
    }
    .title{
        color:#333;
        font-size:0.16rem;
        height:0.44rem;
        line-height:0.44rem;
        margin:0 0.16rem;
        border-bottom:0.02rem solid #fff;
        box-sizing:border-box;
    }
    .icon-tip{
        width:0.2rem;
        height:0.2rem;
        margin-right:0;
    }
`

export const CalenderTopWrap=styled.div`
    position: fixed;
    width:100%;
    top:0.44rem;
    background-color:#f2f2f2;
    z-index:1;
    .calender_week{
        display:flex;
        justify-content:space-around;
        color:#999;
        .day{
            width:14.286%;
            line-height:0.4rem;
            text-align:center;
        }
    }
`
export const CalenderMonth=border(styled.div`
    display:flex;
    line-height:0.4rem;
    overflow:auto;
    .month_item_wrap{
         width:0.84rem;
         flex-shrink:0;
         padding:0 0.25rem;
         box-sizing:border-box;
         .month_item{
             border-bottom:0.02rem solid transparent;
             &.active{
                 border-color:#ff2661;
             }
         }
    }
`)

export const CalenderRowWrap = styled.div`
    display:flex;
    justify-content:space-around;
    width:100%;
    background-color:#f2f2f2;
    .calender_day{
        width:0.4rem;
        height:0.4rem;
        line-height:0.4rem;
        color:#999;
        box-sizing:border-box;
        border:0.01rem solid transparent;
        border-radius:0.2rem;
        position: relative;
        text-align:center;
        &.ticket_day{
            color:#262626;
        }
        &.active{
            color:#ff2661;
            border-color:#ff2661;
        }
    }
`

export const ShopCategoryPickerWrap = styled.div`
    padding:0 0.15rem;
    background-color:#fff;
    overflow:hidden;
    .body{
        overflow:scroll;
        padding-top:0.16rem;
        display:flex;
        flex-wrap:wrap;
    }
`

export const ItemWrap =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:0.1rem 0.13rem;
    margin-right:0.07rem;
    margin-bottom:0.05rem;
    min-width:0.96rem;
    line-height:0.18rem;
    text-align:center;
    color:#262626;
    border-radius:0.03rem;
    box-sizing:border-box;
    position: relative;
    border:1px solid #e6e6e6;
    .category{
        .spec{
            margin-right:0.05rem;
            font-size:0.14rem;
        }
        .tt{
            font-size:0.11rem;
        }
    }
    .tag{
        color:#fff;
        position: absolute;
        top:0;
        right:0;
        height:0.14rem;
        line-height:0.14rem;
        padding:0 0.04rem;
        font-size:0.1rem;
        border-radius:0 0.03rem 0 0.03rem;
        margin-right:0;
        display:inline-block;
        text-align:center;
        box-sizing:border-box;
        &.discount{
            background-color:#b5dc76;
        }
    }
    &.active{
        border-color:#ff2661;
        color:#ff2661;
        &:after{
            content:"";
            position: absolute;
            width:0.25rem;
            height:0.17rem;
            right:0;
            bottom:0;
            background-size:cover;
            background-image:url("https://static.piaoniu.com/m/static/img/selected-tag.9a607f3.png");
        }  
    }
    &.disabled{
        background-color:#f7f7f7;
        color:#999;
    }
`

export const NumSelectorWrap =styled.div`
    position: fixed;
    bottom:0.46rem;
    left:0;
    background-color:#fff;
    width:100%;
    margin:0;
    border:none;
    z-index:10;
    .num-picker{
        height:0.44rem;
        line-height:0.44rem;
        box-sizing:border-box;
        display:flex;
        justify-content:center;
        padding:0 0.14rem;
        margin-right:0;
        background-color:#fff;
        align-items:center;
        box-shadow:0px -0.01rem 0.03rem rgba(0, 0, 38, 0.2);
        .num-picker_text{
            font-size:0.12rem;
            width:0.24rem;
            margin-right:0.14rem;
        }
        .num-picker_nums{
            display:flex;
            align-items:center;
            flex:1;
            overflow:scroll;
            .num-picker_num{
                position: relative;
                width:0.4rem;
                height:0.32rem;
                line-height:0.32rem;
                border:0.01rem solid #d4d4d4;
                color:#262626;
                border-radius:0.03rem;
                box-sizing:border-box;
                text-align:center;
                flex-shrink:0;
                margin-left:0.08rem;
                &.active{
                    border-color:#ff2661;
                    color:#ff2661;
                    &:after{
                        content:"";
                        position: absolute;
                        width:0.15rem;
                        height:0.10rem;
                        right:0;
                        bottom:0;
                        background-size:cover;
                        background-image:url("https://static.piaoniu.com/m/static/img/selected-tag.9a607f3.png");
                    }
                }
                &:first-child{
                    margin-left:0;
                }
            }
            .num-picker_space{
                width:0.2rem;
                height:0.32rem;
                flex-shrink:0;
            }
        }
        .num-picker_seat-wrap{
            padding-left:0.2rem;
            margin-left:-0.2rem;
            background:linear-gradient(to left, #ffffff, #ffffff, #ffffff, #ffffff, rgba(255, 255, 255, 0));
            z-index:1;
            height:100%;
            .num-picker_tag{
                border:0.01rem solid #e6e6e6;
                color:#999;
                background-color:#fff;
                height:0.21rem;
                font-size:0.12rem;
                text-align:center;
                border-radius:0.03rem;
                line-height:0.21rem;
                padding:0 0.05rem;
                box-sizing:border-box;
                display:inline-block;
            }
        }
    }
`

export const BottomBarWrap =styled.div`
    position: fixed;
    bottom:0;
    left:0;
    height:0.45rem;
    border-top:0.01rem solid #e6e6e6;
    background-color:#fff;
    width:100%;
    overflow:hidden;
    z-index:10;
    .price{
        position: relative;
        float: left;
        font-size:0.13rem;
        height:0.45rem;
        line-height:0.45rem;
        >span{
            vertical-align:bottom;
        }
        .tt{
            color:#666;
            font-size:0.13rem;
            margin-left:0.13rem;
            margin-right:0.1rem;
        }
        .unit{
            color:#ff2661;
            font-size:0.1rem;
        }
        .num{
            color:#ff2661;
            font-size:0.2rem;
        }
        .unit-price{
            position: absolute;
            bottom:0.02rem;
            line-height:0.1rem;
            left:0.59rem;
            white-space:nowrap;
            font-size:0.12rem;
            transform:scale(0.8);
            color:#999;
        }
    }
    .notice{
        >span{
            margin-right:1.22rem;
            margin-top:0.06rem;
            padding-top:0.22rem;
            float: right;
            font-size:0.1rem;
            color:#666;
        }
        .no-set{
            background:url("https://static.piaoniu.com/m/static/img/no-set.cac6248.png") no-repeat center top;
            background-size:0.22rem 0.22rem;
        }
        .have-set{
            background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAACnklEQVRYR+2Yz0sUcRjGn3dmd1MQc11nVbC8RR0kxfIHXSIi6lSXomtka1v6F3SIDv0FWZtmdI261KlAiC7hrxYLD0U3S1B3/JUI2u7O943xEAbqvDOzsyLMXN/nfd4Pz3z5MvMSDthDB4wXIXDQb8x1wmvtqbpNLdJEGut+4FiRVaGKs9XZoUU3PmLgxfbUcdZpgMHnABL37Q3DTKAPZHFfXXbouwRcNNjsuHWMoY0BiEtMPWhWCKrLmHj2w6lXBJzr6H0H4KKTmc/6++TE4CUnD0fg1ZZ0vFCpTAZ8nVkBiBXd0Iya6czKXlpH4IWO3pMEfHEaWIo6A631E4NffQGbnel2ZvW5FEBOHkTaKWM8kw2BnZLyWi9LwvqRJPTmehGjNbMA61duV23gwJSoRuLNQ1AsKgLmfAFLV+6Bl9Z21AcPXFWJ+Mv70I0aEbBlrmLl+gPw+sb+AG9NjejQaqpEwGp1HSha+3ckRJQuRIEfCRcsImkILIrJh6gsCYf3cJDfEhTew+HXmo8rQNBalltCwCGWhMDiqDwKw4Q9BiduCxMWR+VRWJKEy7lIiQKtcb+LlN/dN2v/FCMmCJrH4GRtDHUoUjQOjz5f9rVIsZvNztQIM50XTN4E8EpjfcDWKrL6AFwDUOHYyxhJTg5ecNI57tZsg8WuOyeUsux1a/VOhgT8JMLTQj423Dj1yNyumWvrN6KxfA8zbjNwdBegNU3Tu+rGnnwrCbBtMt+datGKlAHhzJYpQzHhIxiPk5PLbwmvd/8d3pJf1XOnay+DcJcYZ/8dMcYnFeF0w+jQtBOsXRclvN1oqbOnSbHeUCzkZxqnXvyXpmSgrZlru2FEorFmjaz5xPjwrLTPE7Ab8yC0rhMOAsKNZwjsJi0v2r/Edos8ipmH+QAAAABJRU5ErkJggg==")no-repeat center top;
            background-size:0.22rem 0.22rem;
        }
    }
    .btn-buy{
        cursor: pointer;
        font-size:0.16rem;
        position: absolute;
        right:0;
        top:0;
        height:0.45rem;
        line-height:0.45rem;
        width:1rem;
        color:#fff;
        text-align:center;
        background-color:#ff2661;
        float: right;
    }
`