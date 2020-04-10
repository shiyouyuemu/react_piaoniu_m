import { SET_CITY,SET_IFSHOW } from "./action-types"
import store from "nodemodules/store"
import cookie from "react-cookies"
import immutable from "immutable"
const defaultState=immutable.Map({
    cityName:store.get("cityName")?store.get("cityName"):"北京",
    cityId:~~cookie.load('cityId')||2,
    ifShow:false
})
const city = (state=defaultState,action)=>{
    switch(action.type){
        case SET_CITY:
            return state.set('cityName',action.data.cityName).set("cityId",action.data.cityId)
        case SET_IFSHOW:
            return state.set('ifShow',action.data)
        default:
            return state
    }
}
export default city