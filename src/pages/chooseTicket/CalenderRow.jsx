import React from 'react'
import { CalenderRowWrap } from "./styledChooseTicket"
function CalenderRow(props) {
    return (
        <CalenderRowWrap>
            {
                props.list.map((value,index)=>{
                    let time=new Date(value.time)
                    let year=time.getFullYear()
                    let month=time.getMonth()+1
                    let day=time.getDate()
                    return (
                        <div
                            className={`calender_day ${props.chooseDate.year===year&&props.chooseDate.month===month&&props.chooseDate.day===day&&"active"}`}
                            key={value.time+"day"+index}
                        >
                            {value.dayNum}
                        </div>
                    )
                })
            }
        </CalenderRowWrap>
    )
}

export default CalenderRow
