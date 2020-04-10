import { SET_IFSHOWSEARCH } from "./action-types"
import { Map } from "immutable"
const defaultstate=Map({
    ifShowSearch:false
})

export default (state=defaultstate,action)=>{
    switch(action.type){
        case SET_IFSHOWSEARCH:
            return state.set('ifShowSearch',action.data)
        default:
            return state
    }
}
