import React from 'react'
import { CalenderTopWrap , CalenderMonth } from "./styledChooseTicket"
function CalenderTop(props) {

    let changeDate=(value)=>()=>{
        props.setNowDate({
            year:~~value.split("+")[0],
            month:~~value.split("+")[1]
        })
    }

    return (
        <CalenderTopWrap>
            <CalenderMonth
                width="0 0 1px 0"
                color="#e6e6e6"
            >
                {
                   Object.keys(props.monthList).length>0&&Object.keys(props.monthList).map(value=>{
                        return (
                            <div
                                className="month_item_wrap"
                                key={props.monthList[value][0].id}
                            >
                                <div 
                                    className={`month_item ${props.nowDate.month===~~value.split("+")[1]&&"active"}`}
                                    onClick={changeDate(value)}
                                >
                                    {value.split("+")[1]}月
                                </div>
                            </div>
                        )
                    })
                }
            </CalenderMonth>
            <div className="calender_week">
                <div className="day">
                    日
                </div>
                <div className="day">
                    一
                </div>
                <div className="day">
                    二
                </div>
                <div className="day">
                    三
                </div>
                <div className="day">
                    四
                </div>
                <div className="day">
                    五
                </div>
                <div className="day">
                    六
                </div>
            </div>
        </CalenderTopWrap>
    )
}

export default CalenderTop
