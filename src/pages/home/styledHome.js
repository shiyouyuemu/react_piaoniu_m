import  styled  from "styled-components"

import border from "components/public/border"

export const HomeCont=styled.div`
    background:#fff;
    height:100vh;
`

export const SearchWrap=styled.div`
    position:relative;
    top:0;
    width:100%;
    z-index:10;
    background:#fff;
    height:.44rem;
    width:100%;
    display:flex;
    align-items:center;
    .city-picker{
        color:#262626;
        background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAiUlEQVQYV32OsQ0CMRAE9ywCp9+AMx8uAfJPoBRo56EUSD6HEsw5cwOfOrLRoQcBEmxyu6vR6oiZBwB7/NeBACyY+Qyg/8GOIrJREM65zlp7AbD8gm+llHXOeXqAqhAC11qvALq5mowxqxijaH6BGrz3PRGd1LfWtiml8Tn0AWrJzDu9InJ8f+MOa9AlEd8hxgYAAAAASUVORK5CYII=');
        min-width:.28rem;
        padding:0 .2rem 0 .1rem;
        background-repeat: no-repeat;
        background-position:100%;
        background-size:0.05rem 0.03rem;
        font-weight:500;
        padding-left:.16rem;
        padding-right:.12rem;
        margin-right:0.09rem; 
    }
    .search-box{
        flex:1;
        border-radius:0.03rem;
        overflow:hidden;
        position: relative;
        .container{
            margin: 0.05rem 0.08rem;
            height:.34rem;
            line-height:.34rem;
            border-radius: 0.17rem;
            margin-right:0;
            background:#f5f5f5;
            position: relative;
            .search-icon{
                width:.16rem;
                height:.15rem;
                background-size:.16rem .15rem;
                background-image:url('https://static.piaoniu.com/nuxt-static/img/search-dark.8a69379.png');
                position: absolute;
                left:.14rem;
                top:50%;
                margin-top:-0.09rem;
            }
            .search-placeholder{
                color:#999;
                font-size:.15rem;
                margin-left:.37rem;
            }
        }
    }
    .user{
        width:.57rem;
        height:.44rem;
        display:flex;
        justify-content:center;
        align-items:center;
        .user-icon{
            width:.17rem;
            height:.19rem;
            background-size:.17rem .19rem;
            background-image:url("https://static.piaoniu.com/nuxt-static/img/personIcon-dark.6093e97.png");
            display:block;
        }
    }
`
export const BannerWrap=styled.div`
    background:#fff;
    margin:.16rem .16rem 0;
    overflow:hidden;
    .banner-cont{
        touch-action:none;
        width:3.4333rem;
        transition-duration:300ms;
        border-radius:0.05rem;
        background-color: #ddd;
        display:block;
        img{
            display:block;
            height:1.04rem;
            border-radius:0.05rem;
        }
    }
`
export const EntriesWrap=styled.div`
    background-color: #fff;
    padding:0.02rem 0.16rem 0;
    display:flex;
    flex-wrap:wrap;
    width:100%;
    .main-categories,.sub-categories{
        display:flex;
        justify-content:space-between;
        width:100%;
        a{
            width:25%;
            display:block;
            margin-top:.22rem;
            img{
                display:block;
                width:.42rem;
                height:.42rem;
                margin:0 auto;
                margin-bottom:.1rem;
            }
            div{
                text-align:center;
                font-size:.13rem;
                line-height:.16rem;
                color:#444;
            }
        }
    }
    .sub-categories a img{
        width:.26rem;
        height:.26rem;
    }
`
export const TagsWrap=styled.div`
    margin:6.4vw 4.267vw 0;
    position: relative;
    display:flex;
    justify-content:space-between;
`
export const TagItemWrap=border(styled.div`
    width:1.65rem;
    height:0.675rem;
    box-shadow:0 0.02rem 0.06rem 0 rgba(0,0,0,.07);
    border-radius:0.06rem;
    overflow:hidden;
    position: relative;
    .title-wrap{
        width:0.8rem;
        padding-top:0.16rem;
        padding-left:.12rem;
        .main-title{
            background-size: contain;
            background-repeat: no-repeat;
            height:0.14rem;
            width:100%;
            margin-bottom:0.07rem;
        }
        .sub-title{
            font-weight:400;
            color:#666;
            font-size:.12rem;
            max-width:0.7rem;
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
        }
    }
    .poster-wrap{
        position: absolute;
        width:0.86rem;
        top:0;
        bottom:0;
        right:0;
        .top-text{
            position: absolute;
            left:0;
            top:0;
            width:0.7rem;
            height:0.16rem;
            background-size:contain;
            background-repeat: no-repeat;
        }
        .poster{
            width:0.8rem;
            height:.6rem;
            position: absolute;
            right:0;
            bottom:0;
            background-size: cover;
            background-repeat: no-repeat;
            margin-top:0.09rem;
        }
    }
`)

export const ServiceEntryWrap=styled.div`
    display:flex;
    justify-content:space-between;
    border-radius:0.02rem;
    margin:0.2rem 0.16rem;
    margin-bottom:0;
    padding: 0 0.08rem;
    height:0.32rem;
    line-height:0.32rem;
    background:hsla(0,0%,96%,.53);
    .title{
        font-size:.12rem;
        font-weight:500;
        color:#666;
    }
    .services{
        display:flex;
        .service-item{
            color:#999;
            font-size:.12rem;
            display:flex;
            align-items:center;
            .line{
                height:.12rem;
                width:0.01rem;
                background-color: #e6e6e6;
                margin:0 .12rem;
            }
        }
    }
`
export const ActivitiesWrap=styled.div`
    .cont{
        background-color: #fff;
        padding-bottom:0.08rem;
        padding-top:0.32rem;
    }
`

export const ActivityWrap=styled.div`
    width:1.02rem;
    margin-right:0.1rem;
    flex-shrink:0;
    .poster{
        height:1.37rem;
        background-position:50%;
        background-size:cover;
        width:100%;
        position: relative;
        .watch{
            background-color: rgba(0,0,0,.55);
            width:.4rem;
            height :.32rem;
            position: absolute;
            top:0;
            left:0.01rem;
            .num{
                font-weight:500;
                font-size:.12rem;
                height:.14rem;
                color:#fff;
                margin-top:0.03rem;
                text-align:center;
                line-height:1.1;
            }
            .like{
                width:0.1rem;
                height:0.09rem;
                background-size:cover;
                background-repeat: no-repeat;
                background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAAAXNSR0IArs4c6QAAAvlJREFUOBGdVF1Ik2EUPuf9vq2Zorm5aVFE1kVYEPSDriwqWF1oFKQXESGV5NSSiijIG2+8NIqYPxB0IRWkXmTRRX+KpGxBP0Z2UYFE0I9zzpU53fZ9p/PmvrVySnUudr5zzvM+55z3vGcIcQkUVhXohPUEsBOBrAA4TALa7Za8JuxtmJIwcp5K81P4NBIcJKAV7AohYI+iQKN1oPWVxKD88TvdpaBRF5OZpZ0siPjUZEIXqQsoFp56QEQbkuPym0kiIJQyu7f5NgYKTyzVITrEwEyOXDUr5sYsUj+O6ZPFGkEL41dyFXc4WZhrLOcEb7lCt81m6g8FaElUaPWk60cR4ZsAc4GqQ6SOCJgMOx2+1iNJ2e8HttXs0Ke0l9xe6U8/4oSqKK7sAc/7OG6YdeVIoTuLCyrTMVInuOASGVQAm+KghLL1NX8AISo4+xi3FUKBVUlkCdyvs1iicvZ8GbGm5b5IIJI+7N6WbjZtXAF3y82mEKuwDPq1SZBcgu+H7wYgGAs6UmATrrnIJGBMj9mkllyC769XGlp0ukLq/xEe6uH4uT4BqnJRGtzSuZCzZtW/EgY31y7nezg7c05cEo4BTx+Xeo0d6dO63km7zqT/LSltb7DEYloHV5PBDXfYfc09PGUAgaYanuIbDqzzj090UXnDrAf+ZxIqv6mMhj/d4EFs4ssbNpuxSmKYZ0Zku1xhP5M6eAB3c9Ly9hsrZ2AMTcfaTP7B59cZW8bYoAAqtvnaXst4glAacp81gEc8/1yOPLZkqPsyH3oCMmYIb1amBtFOJnPJ9wmouuxezzMj/huhdI46j68mLXaPW1nG2/NOAdprZB8vrs6PROgWj3AtJ/xiItid/aRt0CCTehahdPq3nlwM0+Funt5GJp0AFJWI+nf+A2ln3yI+NKSqakmqrUlJKElpT8PC0ZHPV/g5HZC2IXxn3QJMh2y+y18NX7Kek9AAjRa5q3WiC7x0vLJwPsfb2jTf1hjn5tWBLbVr/EW16+cFxYM/AF7oK0vkxaJRAAAAAElFTkSuQmCC");
                margin:0.02rem auto;
            }
        }
        
    }
    .name{
        white-space:nowrap;
        margin-top:0.07rem;
        margin-bottom:0.03rem;
        color:#262626;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .price{
        height:.17rem;
        .price-num{
            color:#ff2661;
            font-size:.12rem;
        }
        .price-desc{
            font-size:.12rem;
            transform: scale(.8);
            transform-origin: left bottom;
            display: inline-block;
            margin-left: 0.02rem;
            color: #999;
            &.through{
                text-decoration:line-through;
            }
        }
    }
`

export const FindMoreWrap=border(styled.div`
    margin:.24rem .14rem;
    border-radius:0.04rem;
    color:#262626;
    display:flex;
    justify-content:center;
    align-items:center;
    line-height:.4rem;
    .arrow{
        height:0.1rem;
        width:0.07rem;
        background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAYAAAC9BQwsAAABWklEQVQ4T63Tv0sCYRgH8O/zGvYDiYMaaqmlW1qE7vF0aMvSQWgIXBr7w5rdAgkaCskK9Hp0ipYLpJZaHG5wiLh74oYgSy8T3/3D87zP830IUz6a0mE2UERuVHVRVSuu674ldTNU0fO8eyJiIvIBFJn5ZRwegu12e8UYcwEgxs9EVHQc52kU/vXHVqu1nEqlzgHsAngFcJDL5R5+4pHDEZElVT0DsA+gb4wpOY7T+Y7HTtX3/fkgCGqqegggIKIKM99+4cR1NBqNuUwmUwdQBjAIw9AtFAqPMU6EIrKjqlcALACnzHxCRJoIu93udhiG1wBWAdR6vd5xtVoNE1vtdDpbURQ1AawDqBPRETN/JA5HRDZUNUabAC4ty6rYtv2euA7P89aMMU1VtQHcpdPpUjabHfwZABERVXWIKN7ZHjMHE0UuDnkURQuqWs7n8/2JQ/6f25zNPf6n4idVCH8VpPxxiAAAAABJRU5ErkJggg==") no-repeat;
        background-size:cover;
        margin-left:0.08rem;
    }
`)
export const GuessLikeWrap=styled.div`
    margin-top:0.38rem;
    .title{
        font-size:.18rem;
        color:#565656;
        padding:0 0.14rem;
    }
`

export const CityWrap=styled.div`
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:9999;
    background-color: #f2f2f2;
    overflow:auto;
    .cityIndex{
        position: fixed;
        top:0;
        right:0;
        width:.3rem;
        height:100%;
        background-color: hsla(0,0%,98%,.8);
        z-index:99;
        .cityIndex-wrap{
            position: absolute;
            top:50%;
            transform:translateY(-50%);
            .cityIndex-item{
                font-size:.11rem;
                color:#1c70fe;
                width:.3rem;
                text-align:center;
                line-height:.14rem;
            }
            .cityIndex-divide{
                height:.1rem;
            }
        }
    }
    .cityChunks{
        margin:.2rem .14rem;
        .cityChunks-title{
            color:#999;
            margin-bottom:.2rem;
        }
        .cityChunks-wrap{
            display:flex;
            justify-content:flex-start;
            flex-wrap:wrap;
        }
    }
    .cityLetter-list{
        .cityLetter-letter{
            color:#999;
            margin:0.06rem 0.14rem;
        }
    }
`

export const CurrentCityWrap=border(styled.div`
    position: relative;
    z-index:100;
    line-height:.21rem;
    padding:.12rem .13rem;
    background-color: #fff;
    .currentCity-name{
        font-size:.15rem;
        margin-right:.11rem;
    }
    .currentCity-type{
        font-size:.12rem;
        color:#999;
    }
`)
export const ChunkWrap=border(styled.div`
    width:1rem;
    height:.35rem;
    line-height:.35rem;
    text-align:center;
    background-color: #fff;
    margin-right:.1rem;
    margin-bottom:.09rem;
    box-sizing:border-box;
`)

export const CityLetterWrap =border(styled.div`
    background-color: #fff;
    padding-left:0.17rem;
    .cityLetter-item:last-child:after{
        border:0;
    }
`)
export const CityLetterItemWrap=border(styled.div`
    height:0.43rem;
    line-height:0.43rem;
    &.active{
        color:#ff2661;
        background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAaCAYAAADfcP5FAAAAAXNSR0IArs4c6QAAA1xJREFUSA3tll9IU2EUwM+5u1IkIUpFGApGNZeSWS8RSIOE0iCKSsw3Nxsh5YNkgQRd6EEiIiKJNDfRwAczKKg0yUiwP1AvYsNNoWAPgS++OP/gtns692737m5tcyrOl76H3fOde853fjvfd879AP6P2AyQJAlUdX2LpkVN2IwnHbSXQ5AGACEXBKEaJ7u+CZsBosSk0gYLhGiYpb1AlAsh+ZSiF5WfTA8yNxRBQP7AIDvU2IizAEKvImc8Q1R2dQ+APMIw+RGYOSDTafR2/VbmJlWZoR8qr98JC/JH3qb9kZCLnJIz6HV+0RAyliE66siBeXzPMBY1OGIAAC+gp3tUg1GeGQGiQzeywR94xzDlkeAhlutwyjVohMkIkNpjlmZfAcHxSHDiErejt3sgHmbDgcgqifBrvp+zUakHF4Qm9Dh79HmcIPLebgN/UOL9JG4C99Dt5BJc/1A6MPT5uJTprL6aILQyTLs+TyAIsBC8yCXYAiTfhACNUWljQQK71av6fE8Z5rLBsY1h2gzzhKLAx3qcsyOH33IFLC9+VrtoQvP0lFRse8AwVwzW7TjV3WqYJxUFdLvGAbGWvyfLEasC7qJjZGk4ltQrxQuGkUCmZoNJD3hdTYZ5SlEte25ML4CEagabU62J8kCWRxiqOqV33Es6YGtmmDu6GnEAyqrsiHw+0xwxX3uyOI5AKKD0hl2qP2IQCG045Xy+0nqcGQfDdOh2iIMgFp5Dt6RlXn+VSogBUgypxL6PrwTDfNCLIo7cN7AFPS4+F4kHFdvrGIahKdxoEUchL6cKvz5cTOyRXPsPkGJKJY27IbA0xFKZ7op4HzzOW/HpJ7NNKeuX/AfCNweE71wkJ9HrCm+/vkB6QkIgxVX99viDrznQiehS2Av5hXb8JAVVG4utEkLwhq3DNz6ECRAF63p6WVIgNaBV2gp/fH0c8LwB6i1sF2tgng4DBXlrIVt9hzANWaYK/Nk1E7VdvZQSSFmOLvWbYHzoCUsOfXnEHwzCVwjKUXUIPhCzKtDd6dNt1iisCKStS+b6uwxxW5tHnzgDJoaZ7JiO6tYupQ2khOBqusbV9IglrZpmAUUrejon1o4Q67kqIBXKbKvhg/6YK8nPF85anHrGVbXJQ7lWqGdrAzj+ArV6Ih9UB7CnAAAAAElFTkSuQmCC');
        background-position:80%;
        background-repeat: no-repeat;
        background-size:.18rem .13rem;
    }
`)

export const NoMoreWrap=styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    height:.4rem;
    font-size:.18rem;
    color:#ccc;
`