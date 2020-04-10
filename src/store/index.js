import { createStore,applyMiddleware } from "redux"
import reducers from "./reducers"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./saga"
import { Map } from "immutable"
const saga = createSagaMiddleware()
const rootState=Map()
const store=createStore(reducers,rootState,applyMiddleware(saga))

saga.run(rootSaga)

export default store