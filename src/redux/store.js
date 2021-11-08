import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { userReducer } from "./reducers/userReducer"

const reducer = combineReducers({
	user: userReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [thunk]

const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(...middleware))
)

export default store
