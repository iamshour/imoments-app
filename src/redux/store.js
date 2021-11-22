import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { posts } from "./reducers/posts"
import { auth } from "./reducers/auth"
import { user } from "./reducers/user"
import { utility } from "./reducers/utility"

const reducer = combineReducers({
	posts,
	auth,
	user,
	utility,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [thunk]

const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(...middleware))
)

export default store
