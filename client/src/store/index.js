import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import allReducers from "../reducers"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ;

function mainStore(preloadedState) {
    return createStore(
        allReducers,
        preloadedState,
        composeEnhancers(applyMiddleware(thunkMiddleware))
    )
}

export default mainStore