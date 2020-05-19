import {combineReducers} from "redux"
import mainReducer from "./mainReducer"

const allReducers = combineReducers({
    main:mainReducer
})

export default allReducers