import { takeEvery } from "redux-saga/effects"

import { saga } from "pages/home/store/index"

function* setCity(){
    yield takeEvery(saga.types.SETCITY,saga.setCity)
}

function* rootSaga(){
    yield setCity()
}

export default rootSaga