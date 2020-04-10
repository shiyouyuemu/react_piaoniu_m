import styled from "styled-components"

export const HeaderWrap=styled.div`
    overflow:hidden;
    padding:0 0.14rem 0.16rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .title{
        font-weight:700;
        color:#565656;
        font-size:.18rem;
    }
    .more{
        font-size:.14rem;
        color:#999;
        height:.17rem;
        line-height:.17rem;
        padding-right:.1rem;
        background-image:url("https://static.piaoniu.com/nuxt-static/img/arr-right.1655c6a.png");
        background-position:100%;
        background-repeat: no-repeat;
        background-size:0.05rem 0.09rem;
    }
`