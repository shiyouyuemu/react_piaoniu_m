import styled from "styled-components"

export const ActivitiesWrap= styled.div`
    width:100%;
    overflow:hidden;
    display:inline-block;
    height:1.85rem;
    position: relative;
    .wrap{
        display:flex;
        flex-wrap:nowrap;
        padding-left:0.14rem;
        position: absolute;
    }
`

export const MoreActivityWrap=styled.div`
    flex-shrink:0;
    width:1.02rem;
    height:1.77rem;
    padding-right:0.14rem;
    box-sizing:content-box;
    .poster{
        background-size: cover;
        height:1.37rem;
        background-image:url('https://static.piaoniu.com/nuxt-static/img/more.63a091c.png')
    }
`
export const DiscountWrap=styled.div`
    position: absolute;
    top: -0.03rem;
    left: 0.02rem;
    color: #fff;
    width: 0.28rem;
    height: 0.3rem;
    text-align: center;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA8CAYAAAAzF3kIAAAAAXNSR0IArs4c6QAAAsdJREFUaAXtms9rE0EUx79vSGJT1OIPsIrEm7YqRRskqJeeVCJeREG9WWs8eOtJPeWqqHiSWjB/gOJNavUiaAVTifUHkVq9qCAKCoK/WtPd8W2i6bJtMkTa8FZmIezbN9+d+b73mc1pCHzprr61mHTPgdADrVd7ubBchdcvTsfdxMVNuP5rLs9ULm7KfcqFLZ9LID03+qrI1ikfQ2R/Nx68D/pVZXIhLW6mGJ0qoVQYxfYdM7lKpMrbMpgN4bMG2jWcuw+Ryvjtq7B9c37zwZiLjPE/ypU8UgNFHOQYiARFYXsm0DsuKmBbp7/ibVsRPcdJrz8aHA2IhT8uicaoMFiq5VLVGvhf8rbAsJO0BC1B4R2wW1Q4IKM9S9DYIuECS1A4IKM9S9DYIuECS1A4IKM9S9DYIuECS1A4IKM9S9DYIuECS1A4IKM9S9DYIuECS1A4IKM9S9DYIuECS1A4IKM9S9DYIuECS1A4IKM9S9DYIuECS1A4IKM9S9DYIuECS1A4IKM9S9DYonoCAp+jpql6koUem2+CDohGoNQZRGkLDq+L40iiFSraBVKnuNh7PD690EX554/wgj/41G+rP9lYTB/5QOowzzOE+NI79OTSl+r7xWr0nCPvd1YnM2345uziNdMgvYfPsrZXVY0GXrP2rXFQqP0i6Q29I7zYztqS4Ai5nHnERQ2Vixq/WiCifzpUq/m4PDae2ArXSfN8aS42xfcGdhWN0USuO+jQ/0y689heOO5Nf3JWTPjMudv8uwUdHaaJwU+zNPOQ0B0nVwCTu8t0Ae++su60ig7QeO5GPQ15g7qjN8Pdu8ATLv4j1nwaf4zjCqVDiTxlsx65pl06m1W49mYbXMVkPbo6yYuX/fL9J++efnqZGzAZ+vsCKt+Gm4RCC1TsMRUvfzC93MxxvblvFabRyYW2YNGy+/Ts/Pdmri92rd/DSLLMQNi9tQAAAABJRU5ErkJggg==");
    background-size: 100%;
    .text{
        position: relative;
        font-size:.16rem;
        width:100%;
        height:100%;
        .num{
            font-size:0.22rem;
            font-weight:700;
            position: absolute;
            left:0.01rem;
            top:0;
        }
        .fraction{
            font-size:.12rem;
            position: absolute;
            top:0.04rem;
            right:0.04rem;
        }
        .unit{
            font-size:0.08rem;
            transform:scale(.8);
            transform-origin:left;
            position: absolute;
            bottom:0.04rem;
            right:0.04rem;
        }
    }
`