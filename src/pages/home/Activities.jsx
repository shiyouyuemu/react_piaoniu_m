import React, { useState, useEffect ,useCallback} from 'react'
import { ActivitiesWrap } from "./styledHome"
import Header from "components/header/Header"
import ActivitiesBody from "components/activities/Activities"
import Activity from "./Activity"
import MoreActivity from "components/activities/MoreActivity"

import { get } from "utils/http"

// export default class Activities extends Component {

//     state={
//         data:[]
//     }

//     componentDidMount(){
//         this.getData()
//     }
//     async getData(){
//         let result=await get({
//             url:this.props.url,
//             params:{
//                 pageIndex:1,
//                 pageSize:8
//             }
//         })
//         this.setState({
//             data:result.data
//         })
//     }

//     render() {
//         return (
            // <ActivitiesWrap>
            //     <div className="cont">
            //         <Header href={this.props.href}>{this.props.title}</Header>
            //         <ActivitiesBody id={this.props.id}>
            //             {
            //                 this.state.data.map((value)=>{
            //                     return(
            //                         <Activity
            //                             key={value.id}
            //                             item={value}
            //                             type={this.props.type}
            //                         ></Activity>
            //                     )
            //                 })
            //             }
            //             <MoreActivity></MoreActivity>
            //         </ActivitiesBody>
            //     </div>
            // </ActivitiesWrap>
//         )
//     }
// }
const Activities=(props)=>{

    let [data,setData]=useState([])
    let getData=useCallback(async ()=>{
        let result=await get({
            url:props.url,
            params:{
                pageIndex:1,
                pageSize:8
            }
        })
        setData(result.data)
    },[props.url])

    useEffect(()=>{
        getData()
    },[getData])


    return(
        <ActivitiesWrap>
            <div className="cont">
                <Header href={props.href}>{props.title}</Header>
                <ActivitiesBody id={props.id}>
                    {
                        data.map((value)=>{
                            return(
                                <Activity
                                    key={value.id}
                                    item={value}
                                    type={props.type}
                                ></Activity>
                            )
                        })
                    }
                    <MoreActivity></MoreActivity>
                </ActivitiesBody>
            </div>
        </ActivitiesWrap>
    )
}
export default Activities
