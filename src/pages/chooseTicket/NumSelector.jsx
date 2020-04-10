import React from 'react'
import _ from "lodash"
import { NumSelectorWrap } from "./styledChooseTicket"

function NumSelector(props) {
    return (
        <NumSelectorWrap>
            <div className="num-picker">
                <div className="num-picker_text">数量</div>
                <div className="num-picker_nums">
                    {
                        _.range(props.ticketNums).map(value=>{
                            return (
                                <div
                                    className={`num-picker_num ${value+1===props.ticketNum&&"active"}`}
                                    key={props.chooseType.id+value}
                                    onClick={()=>{props.setTicketNum(value+1)}}
                                >{value+1}</div>
                            )
                        })
                    }
                    <div className="num-picker_space"></div>
                </div>
                <div className="num-picker_seat-wrap">
                    {
                        props.ticketNum>1&&<div className="num-picker_tag">连座</div>
                    }
                </div>
            </div>
        </NumSelectorWrap>
    )
}

export default NumSelector
