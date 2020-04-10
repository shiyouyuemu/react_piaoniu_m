// import { combineReducers } from "redux"
import { combineReducers } from "redux-immutable"
import { homeReducers as home} from "pages/home/store/index"
import { listReducers as list } from "pages/list/store/index"

export default combineReducers({
    home:home,
    list:list
})