import React, { useCallback } from 'react'
import StarWrap from "./styledStar"
// export default class Stars extends Component {
//     render() {
        // return (
        //     <div className="stars">
        //         <span className="score">{this.props.star}</span>
        //         <ul className="starList">
        //             <li>
        //                 <img src="https://static.piaoniu.com/nuxt-static/img/starYellow.b0a4b5a.png" alt=""/>
        //             </li>
        //             <li>
        //                 <img src="https://static.piaoniu.com/nuxt-static/img/starYellow.b0a4b5a.png" alt=""/>
        //             </li>
        //             <li>
        //                 <img src="https://static.piaoniu.com/nuxt-static/img/starYellow.b0a4b5a.png" alt=""/>
        //             </li>
        //             <li>
        //                 <img src="https://static.piaoniu.com/nuxt-static/img/starYellow.b0a4b5a.png" alt=""/>
        //             </li>
        //             <li>
        //                 <img src="https://static.piaoniu.com/nuxt-static/img/starYellow.b0a4b5a.png" alt=""/>
        //             </li>
        //         </ul>
        //     </div>
        // )
//     }
// }
export default (props)=>{

    let calcStar=useCallback(()=>{
        let fullNum=parseInt(props.star/2)
        let halfNum=props.star%2?1:0
        let emptyNum=5-fullNum-halfNum
        return [...new Array(fullNum).fill(1),...new Array(halfNum).fill(0.5),...new Array(emptyNum).fill(0)]
    },[props.star])

    return (
        <StarWrap>
            <span className="score">{props.rank||"暂无评分"}</span>
            <ul className="starList">
                {
                    props.star&&calcStar(props.star).map((value,index)=>{
                        return (
                            <li  key={`b0a4b5a${index}`}>
                                {
                                    value===1?(
                                        <img src="https://static.piaoniu.com/nuxt-static/img/starYellow.b0a4b5a.png" alt=""/>
                                    ):
                                    value===0.5?
                                        <img src="https://static.piaoniu.com/nuxt-static/img/starYellowGrey.382d0ef.png" alt=""/>
                                    :
                                    value===0?
                                        <img src="https://static.piaoniu.com/nuxt-static/img/starGrey.eefc1c0.png" alt=""/>
                                    :""
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </StarWrap>
    )
}