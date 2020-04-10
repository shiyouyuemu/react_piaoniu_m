import styled from 'styled-components'
import border from "components/public/border"

export const ListWrap=styled.div`
    height:100vh;
    .list-container{
        width:100%;
        padding-top:.44rem;
        .list-menu{
            position: relative;
            height:.4rem;
            .list-menu-wrap{
                display:block;
                position: absolute;
                z-index:11;
                box-shadow:0 0.5px 0 0 #e6e6e6;
                background-color:#fcfcfc;
                white-space:nowrap;
                .list-menu-item{
                    display:inline-block;
                    margin:0 0.15rem;
                    padding:0.1rem 0;
                    font-size:0.14rem;
                    line-height:1.2;
                    /* box-sizing:border-box; */
                    &.active{
                        border-bottom:0.03rem solid #ff2661;
                        color:#ff2661;
                    }
                }
            }
        }
        .list-filter{
            position: relative;
            width:100%;
            z-index:1000;
            background-color:#fff;
            .list-filter-wrap{
                position: relative;
                display:flex;
                box-shadow: 0 0 0.04rem 0 rgba(0,0,0,.15);
                z-index:11;
            }
        }
        
    }
    .overlay{
        position: fixed;
        top:0;
        width:100%;
        left:0;
        background-color:rgba(0,0,0,.35);
        height:100%;
        z-index:5;
    }
`

export const ListListWrap=styled.div`
    width:100%;
    background-color:#fff;
    .advert{
        img{
            padding:0.14rem;
            display:block;
            padding-bottom:0;
            background-color:#fff;
            width:100%;
            box-sizing:border-box;
        }
    }
    .no-result{
        width:100%;
        background-color:#fff;
        margin:0 auto;
        padding-top:0.35rem;
        padding-bottom:0.27rem;
        z-index:3;
        >img{
            margin:0 auto;
            width:0.37rem;
            display: block;
        }
        .text{
            margin-top:0.18rem;
            color:#999;
            text-align:center;
        }
    }
`
export const ListFilterItemWrap=styled.div`
    flex:1;
    font-size:.12rem;
    color:#666;
    text-align:center;
    padding:0.1rem 0;
    border-bottom: 1px solid #e6e6e6;
    line-height:1.2;
    &.pop{
        &:after{
            content:"";
            display:inline-block;
            position: relative;
            top:0;
            left:0.03rem;
            width:0;
            height:0;
            border:3px solid transparent;
            border-top-color:#666;
        }
    }
    &.active{
        color:#ea3667;
        &:after{
            top:-0.03rem;
            border-color:transparent;
            border-bottom-color:#ea3667;
        }
    }
    
`
export const ListFilterPopWrap=border(styled.div`
    position: absolute!important;
    /* top:0.34rem; */
    left:0;
    width:100%;
    background-color:#fff;
    z-index:10;
    .row-list{
        padding-left:.15rem;
    }
    
`)
export const RowListItemWrap=styled.div`
    position: relative;
    font-size:.12rem;
    padding-left:0.09rem;
    padding:0.14rem 0.3rem 0.14rem 0.09rem;
    width:100%;
    border-bottom:1px solid #f5f5f5;
    &.active{
        color:#ff2661;
        &:after{
            content:"";
            position: absolute;
            top:0.18rem;
            right:0.18rem;
            width:0.12rem;
            height:0.09rem;
            background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAAAXNSR0IArs4c6QAAAlRJREFUOBG1lE1oE0EUx9+b2WpbbLHJVtKjeNGbp6Zp/IhIUaNCD1VBMQc9tFkVqhc9eNiLNy9SUqMoKloKRQ8qmuZSBDVNBG968qKCWt21qbZmlWRnfCNtWGKTUIwDy87se//fe2/mzSL8h5GPDK8tFZz7APidN5ovQ6db5os/J4m7FRHnWCMDyIip2a4zAVKGCf5B4/xgwwJIKdFyPl+XIPcRPM80vqsjk3inNaoCOzh0kVgxegqM873+54nXit2QCgh+TgKcQYAiMDbgzySmFVwN+vZv40v34HEiXCOQBIZHO7PJMS8RrZ4hE4Rs01u7zuITs+Q11pvb3fF+ieKulMAp1eF1uSuXKjWMDiemyrOcmXHVBZUO1dZWKL5doBhXcAZ4YTm40jIO7DAizFNrDdjOpzvywETdu5HvNTZT1Q9oU5pJe1V/kTxfLRHmz13OMsZ3A+ICZXPIfj91u1aQud5TG4quO0mVt5Pmnr6nK14Nrr6XD3k2aGwpgUhRJWsQcEyPBmJomsIrXogYgYLjZijz9dTrU7qvKYqpkV9en8p5uU19udFnQP1LDj/oshyxUzM3pWmW7er/UnBEehH+ErT2/npwFaxcwVJkdXjSFY9p3UrmW53RwDFIf1ttCydN26L+L2+aVzWF256OWEuaWu+/AihnK2jskCAe0Xa1UAo3UIJOnbaf4B81hHBHNvm2FtRrWzaAcrBDJ3YK4T78E4TWBM9zDtt8meQrL6DevGoAJfwaHOxzAVQ7Cs55n396NFMPuGK73WNsskMnN65YuCj4DSGs3WDtt8yYAAAAAElFTkSuQmCC");
            background-size:100%;
            background-position:100%;
            background-repeat: no-repeat;
        }
    }
`