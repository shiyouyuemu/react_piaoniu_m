import React from 'react'
import { ShopCategoryPickerWrap , ItemWrap } from "./styledChooseTicket"

function ShopCategoryPicker(props) {
    return (
        <ShopCategoryPickerWrap>
            <div className="head"></div>
            <div className="body">
                {
                    props.numList.map((value)=>{
                        return (
                            <ItemWrap
                                key={value.id}
                                className={`${value.hasTicket?"":"disabled"} ${value.lowPrice&&props.chooseType.lowPrice===value.lowPrice&&"active"}`}
                                onClick={()=>{value.lowPrice&&props.setChooseType(value)}}
                            >
                                <div className="category">
                                    <span className="spec">{value.originPrice}</span>
                                    <span className="tt">票档</span>
                                </div>
                                {
                                    value.lowPrice<value.originPrice&&<div className="tag discount">折</div>
                                }
                            </ItemWrap>
                        )
                    })
                }
            </div>
        </ShopCategoryPickerWrap>
    )
}

export default ShopCategoryPicker
