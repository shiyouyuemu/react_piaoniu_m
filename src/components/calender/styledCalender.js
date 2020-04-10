import styled from "styled-components"

export const CalenderWrap=styled.div`
    position:absolute;
    padding:.16rem 0 0.06rem;
    background:#fff;
    .timePicker-month{
        display:flex;
        justify-content:center;
        .prev-month{
            width:0;
            height:0;
            border:0.05rem solid transparent;
            border-right-color:#ababab;
            margin-top:0.06rem;
        }
        .text-month{
            font-size:.17rem;
            font-weight:700;
            color:#525252;
            margin:0 0.17rem;
        }
        .next-month{
            width:0;
            height:0;
            border:0.05rem solid transparent;
            border-left-color:#ababab;
            margin-top:0.06rem;
        }
    }
    .timePicker-time-period{
        display:flex;
        justify-content:space-between;
        padding:0 0.15rem;
        margin-top:0.16rem;
        margin-bottom:0.17rem;
        .time-period-item{
            line-height:0.32rem;
            color:#333;
            border-radius:0.16rem;
            padding:0 0.14rem;
            background-color:#f5f5f5;
            &.active{
                color:#ff2661;
                background-color:#fff0f4;
            }
        }
    }
    .timePicker-week{
        display:flex;
        font-size:.11rem;
        color:#666;
        .week-item{
            width:14.28%;
            margin:0.06rem 0;
            text-align:center;
        }
    }
    .timePicker-days{
        display:flex;
        flex-wrap:wrap;
        .days-item{
            width:14.28%;
            display:flex;
            justify-content:center;
            padding:0.06rem 0;
            .sample-day{
                position: relative;
                width:0.28rem;
                height:0.28rem;
                line-height:0.28rem;
                text-align:center;
                &.before-today{
                    color:#999;
                }
                &.today{
                    color:#ff2661;
                    &:after{
                        content:"今天";
                        position: absolute;
                        top:0.14rem;
                        left:0;
                        width:100%;
                        text-align:center;
                        font-size:0.09rem;
                    }
                }
                &.active-oneday{
                    color:#ff2661;
                    background-color:#fff0f4;
                    border-radius:0.14rem;
                }
            }
        }
    }

`