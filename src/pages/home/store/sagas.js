import { put } from "redux-saga/effects"
import * as types from "./action-types"
import cookie from "react-cookies"
import store from "nodemodules/store"

function* setCity(action){
    cookie.save('cityId', ~~action.data.cityId, { path: '/' });
    store.set("cityName",action.data.cityName)
    yield put({type:types.SET_CITY,data:action.data})
}


export {
    types,
    setCity
}