import React, { Component } from 'react'
import { BannerWrap } from "./styledHome"
import { Carousel } from "antd-mobile"

export default class Banner extends Component {

    state={
        bannerArr:[
            {
                id:"51f5146f35547627cd583eb206856a60cf7eeed5",
                url:"https://img.piaoniu.com/misc/51f5146f35547627cd583eb206856a60cf7eeed5.png?imageView2/2/w/750/h/350/format/jpg/q/80"
            },
            {
                id:"81862c24bc06ab7929f03b9b2157765fbdd03b87",
                url:"https://img.piaoniu.com/misc/81862c24bc06ab7929f03b9b2157765fbdd03b87.png?imageView2/2/w/750/h/350/format/jpg/q/80"
            },
            {
                id:"146d599c04e7e5335a842acce74392c491c8bfd7",
                url:"https://img.piaoniu.com/misc/146d599c04e7e5335a842acce74392c491c8bfd7.png?imageView2/2/w/750/h/350/format/jpg/q/80"
            },
            {
                id:"51e39bf6ca72a2cf83128add93900ef0aeb40588",
                url:"https://img.piaoniu.com/misc/51e39bf6ca72a2cf83128add93900ef0aeb40588.jpg?imageView2/2/w/750/h/350/format/jpg/q/80"
            },
            {
                id:"ed0410f016c8093d336561b859c9e35588a28c37",
                url:"https://img.piaoniu.com/misc/ed0410f016c8093d336561b859c9e35588a28c37.png?imageView2/2/w/750/h/350/format/jpg/q/80"
            },
            {
                id:"83d91ac6270b3626ae85ab5dc638262cafa24d5e",
                url:"https://img.piaoniu.com/misc/83d91ac6270b3626ae85ab5dc638262cafa24d5e.png?imageView2/2/w/750/h/350/format/jpg/q/80"
            },
            {
                id:'524f43dc272dd201c3021a5295390c37bb4a9d9b',
                url:"https://img.piaoniu.com/misc/524f43dc272dd201c3021a5295390c37bb4a9d9b.jpg?imageView2/2/w/750/h/350/format/jpg/q/80"
            }
        ]
    }

    render() {
        return (
            <BannerWrap>
               <Carousel
                autoplay={true}
                infinite
                dotStyle={{width:".1rem",height:".02rem",opacity:".4",borderRadius: "0.015rem",backgroundColor:"#FFF",marginRight:"0.07rem"}}
                dotActiveStyle={{opacity:"1",width:".1rem",height:".02rem",borderRadius: "0.015rem",backgroundColor:"#FFF",marginRight:"0.07rem"}}
                >
                {
                    this.state.bannerArr.map((value=>{
                        return(
                            <a 
                            className="banner-cont" 
                            href="#a"
                            key={value.id}
                            >
                                <img src={value.url} alt=""/>
                            </a>
                        )
                    }))
                }                    
                </Carousel>
            </BannerWrap>
        )
    }
}
