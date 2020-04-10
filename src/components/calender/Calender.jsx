import React, { Component } from 'react'
import { CalenderWrap } from "./styledCalender"

export default class Calender extends Component {

    state={
        dataList:[],
        bigMonth:[1,3,5,7,8,10,12],
        smallMonth:[4,6,9,11],
        ifFull:false,
        year:new Date().getFullYear(),
        month:new Date().getMonth()+1,
        week:new Date().getDay(),
        day:new Date().getDate(),
        defaultYear:new Date().getFullYear(),
        defaultMonth:new Date().getMonth()+1,
        defaultWeek:new Date().getDay(),
        defaultDay:new Date().getDate(),
        ifPrev:false,
        chooseDay:null,
        ifCurrentMonth:true,
        chooseMonth:new Date().getMonth()+1,
        chooseType:"全部时间"
    }

    getDataList=async ()=>{
        await this.checkLeapYear(this.state.year)
        await this.getMonth(this.state.month)
    }

    async getMonth(month){
        let list=[]
        let date=new Date(this.state.year,month-1,1)
        let start=date.getDay()
        let end=0;
        let length=35;
        if(this.state.bigMonth.indexOf(month)!==-1){
            end=31
        }else if(this.state.smallMonth.indexOf(month)!==-1){
            end=30
        }else if(month===2&&this.state.ifFull){
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
                    time:new Date(this.state.year,month-1,i-start+1).getTime()
                })
            }
        }
        await this.setState({
            dataList:list
        })
    }

    async checkLeapYear(year){
        let ifFull=this.state.ifFull;
        if((year%4===0&&year%100!==0)||year%400===0){
                ifFull=true
        }else{
                ifFull=false
        }
        await this.setState({
            ifFull
        })
    }

    changeMonth=(key)=>async ()=>{
        let newMonth=this.state.month+key
        let year=this.state.year
        
        if(newMonth>12){
            newMonth=1
            year=year+key
        }else if(newMonth<1){
                newMonth=12
                year=year+key
        }
        if(newMonth===this.state.defaultMonth&&year===this.state.defaultYear){
            this.setState({
                ifCurrentMonth:true
            })
        }else{
            this.setState({
                ifCurrentMonth:false
            })
        }
        if(year<this.state.defaultYear||(year===this.state.defaultYear&&newMonth<this.state.defaultMonth)){
            this.setState({
                ifPrev:false
            })
        }else{
            await this.setState({
                month:newMonth,
                year:year,
                ifPrev:true
            })
            await this.getDataList()
        }
    }

    chooseDay=(value)=>()=>{
        if((this.state.day<=value.dayNum&&this.state.ifCurrentMonth)||!this.state.ifCurrentMonth){
            this.setState({
                chooseDay:value.dayNum,
                chooseMonth:this.state.month
            })
            this.changeTime(value.time,60*1000*60*24-1+value.time,`${this.state.month}月${value.dayNum}日`)()
        }
    }

    changeTime=(start,end,type)=>()=>{
        this.setState({
            chooseType:type
        })
        this.props.changeTime(start,end,type)
    }

    chooseAll=()=>{
        this.setState({
            chooseType:"全部时间",
            chooseDay:null
        })
        this.props.changeTime("","","全部时间")
    }

    componentDidMount(){
        this.getDataList()
    }

    render() {
        return (
            <CalenderWrap>
                <div className="timePicker-month">
                    <div 
                        className="prev-month"
                        style={{display:(this.state.month===this.state.defaultMonth&&this.state.year===this.state.defaultYear)&&"none"}}
                        onClick={this.changeMonth(-1)}
                    ></div>
                    <div className="text-month">{this.state.month}月演出</div>
                    <div 
                        className="next-month"
                        onClick={this.changeMonth(1)}
                    ></div>
                </div>
                <div className="timePicker-time-period">
                    <div 
                        className={`time-period-item ${this.state.chooseType==="全部时间"?"active":""}`}
                        onClick={this.chooseAll}
                    >
                        全部时间
                    </div>
                    <div className={`time-period-item ${this.state.chooseType==="本周末"?"active":""}`}>
                        本周末
                    </div>
                    <div className={`time-period-item ${this.state.chooseType==="一周内"?"active":""}`}>
                        一周内
                    </div>
                    <div className={`time-period-item ${this.state.chooseType==="一月内"?"active":""}`}>
                        一月内
                    </div>
                </div>
                <div className="timePicker-week">
                    <div className="week-item">日</div>
                    <div className="week-item">一</div>
                    <div className="week-item">二</div>
                    <div className="week-item">三</div>
                    <div className="week-item">四</div>
                    <div className="week-item">五</div>
                    <div className="week-item">六</div>
                </div>
                <div className="timePicker-days">
                    {
                        this.state.dataList.length>0&&this.state.dataList.map((value,index)=>{
                            return (
                                <div className="days-item" key={"day-"+index}>
                                    <div 
                                        className={
                                            `sample-day 
                                            ${this.state.day===value.dayNum&&this.state.ifCurrentMonth&&"today"}
                                            ${this.state.day>value.dayNum&&this.state.ifCurrentMonth&&"before-today"}
                                            ${this.state.chooseDay===value.dayNum&&this.state.chooseMonth===this.state.month&&"active-oneday"}
                                            `}
                                        onClick={this.chooseDay(value)}
                                    >{value.dayNum}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </CalenderWrap>
        )
    }
}
