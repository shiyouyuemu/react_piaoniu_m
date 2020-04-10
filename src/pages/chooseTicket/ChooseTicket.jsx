import React,{ useState, useCallback ,useEffect} from "react"
import { withRouter } from "react-router-dom"
import { ChooseTicketWrap } from "./styledChooseTicket"
import Header from "./Header"
import CalenderTop from "./CalenderTop"
import CalenderRow from "./CalenderRow"
import ShopCategoryPicker from "./ShopCategoryPicker"
import NumSelector from "./NumSelector"
import BottomBar from "./BottomBar"
import _ from "lodash"

import { get } from "utils/http"
const bigMonth=[1,3,5,7,8,10,12];
const smallMonth=[4,6,9,11];
function ChooseTicket(props){

    const [nowMonthList,setNowMonthList]=useState([])//当前月份数组
    const [monthList,setMonthList]=useState([])//总日期数组
    const [nowDate,setNowDate]=useState({
        year:new Date().getFullYear(),
        month:new Date().getMonth()+1
    })//当前日期
    const [chooseDate,setChooseDate]=useState({
        year:new Date().getFullYear(),
        month:new Date().getMonth()+1,
        day:new Date().getDate()
    })
    const [ifFull,setIfFull]=useState(false)
    const [data,setData]=useState({})//总数据
    const [eventId,setEventId]=useState("")//当前日期ID
    const [numList,setNumList]=useState([])//当前日期票种类
    const [specifiTime,setSpecifiTime]=useState("")//当前日期具体时间
    const [chooseType,setChooseType]=useState({})//当前选择票的价格类型
    const [ticketNum,setTicketNum]=useState(1)//当前选择票的数量
    const [ticketNums,setTicketNums]=useState(1)//当前选择票的数量

    let getData=useCallback(async ()=>{//获取总数据
        let result=await get({
            url:`/ajax/api/v3/activities/${props.match.params.tid}`,
            params:{
                b2c: true,
                areaTicketType: 2,
                supportSpeedPackBuy: true
            }
        })
        setData(result)
    },[props.match.params.tid])

    let getNumList=async(eventId)=>{//获取票类型数据
        let result=await get({
            url:"/ajax/api/v3/ticketCategories",
            params:{
                eventId,
                supportSpeedPackBuy:true,
                b2c:true
            }
        })
        setNumList(result)
        setChooseType(result[0])
    }
    let getNowMonthList=useCallback(()=>{//获取月份数组
        let list=[]
        let date=new Date(nowDate.year,nowDate.month-1,1)
        let start=date.getDay()
        let end=0;
        let length=35;
        if(bigMonth.indexOf(nowDate.month)!==-1){
            end=31
        }else if(smallMonth.indexOf(nowDate.month)!==-1){
            end=30
        }else if(nowDate.month===2&&ifFull){
            end=29
        }else{
            end=28
        }
        if(start+end>35){
            length=42
        }else{
            length=35
        }
        for(var i=0;i<length;i++){
            if(i<start||i>=end+start){
                list.push({
                    dayNum:""
                })
            }else{
                list.push({
                    dayNum:i-start+1,
                    time:new Date(nowDate.year,nowDate.month-1,i-start+1).getTime()
                })
            }
        }
        setNowMonthList(_.chunk(list,7))
    },[nowDate])

    useEffect(()=>{
        if(chooseType.ticketsNum){
            setTicketNums(chooseType.ticketsNum)//改变类型时改变座位可选数量
            setTicketNum(1)//改变类型时重置选择数量
        }
    },[chooseType])

    useEffect(()=>{//mounted
        getData()
    },[getData])
    useEffect(()=>{
        if(data.events){
            setEventId(data.events[0].id)
            setSpecifiTime(data.events[0].specification)
            getNumList(data.events[0].id)
            let list=_.groupBy(data.events,(item)=>{
                return new Date(item.start).getFullYear()+"+"+(new Date(item.start).getMonth()+1)
            })
            setMonthList(list)
        }
    },[data])

    useEffect(()=>{
        getNowMonthList()
    },[getNowMonthList])


    return (
        <ChooseTicketWrap>
            <Header></Header>
            <div id="scroll">
                <div className="calendar">
                    <CalenderTop
                        monthList={monthList}
                        nowDate={nowDate}
                        setNowDate={setNowDate}
                    ></CalenderTop>
                    {
                        nowMonthList.map((value)=>{
                            return (
                                <CalenderRow
                                    key={value[0].time+"row"}
                                    list={value}
                                    chooseDate={chooseDate}
                                ></CalenderRow>
                            )
                        })
                    }
                </div>
                <div className="select_pannel">
                    <div className="shop_info" style={{display:"none"}}>
                        该票由xxxx提供，xxxx
                    </div>
                    <div className="shop_event_picker">
                        <div className="event_picker_head"></div>
                        <div className="event_picker_body">
                           <div className="event-picker-wrap">
                                <div className="event_item active">
                                    <div className="event-spec">
                                        {specifiTime}
                                    </div>
                                </div>
                           </div>
                           <div className="event-picker-line"></div>
                        </div>
                    </div>
                    <ShopCategoryPicker
                        numList={numList}
                        chooseType={chooseType}
                        setChooseType={setChooseType}
                    ></ShopCategoryPicker>
                </div>
                <NumSelector
                    ticketNums={ticketNums}
                    ticketNum={ticketNum}
                    setTicketNum={setTicketNum}
                    chooseType={chooseType}
                ></NumSelector>
                <BottomBar
                    ticketNum={ticketNum}
                    chooseType={chooseType}
                ></BottomBar>
            </div>
        </ChooseTicketWrap>
    )
}
export default withRouter(ChooseTicket)