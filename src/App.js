import { Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "redux/store"
import "main.scss"
//components
import Layout from "components/layout/Layout"
//pages
import Home from "pages/Home/Home"
import Search from "pages/Search/Search"
import AddPost from "pages/AddPost/AddPost"
import Profile from "pages/Profile/Profile"
import Auth from "pages/Auth/Auth"
import Notifications from "pages/Notifications/Notifications"
import NotFound from "pages/NotFound/NotFound"
import Settings from "pages/Settings/Settings"
import Bookmarks from "pages/Bookmark/Bookmarks"
import ForgotPass from "pages/ForgotPass/ForgotPass"
import ResetPass from "pages/ResetPass/ResetPass"
import PrivateRoute from "components/utility/PrivateRoute"
import PublicRoute from "components/utility/PublicRoute"

function App() {
	return (
		<Provider store={store}>
			<Layout>
				<Switch>
					<PublicRoute path='/auth' component={Auth} />
					<PublicRoute path='/forgotpassword' component={ForgotPass} />
					<PublicRoute path='/reset/:resetToken' component={ResetPass} />
					<PrivateRoute exact path='/' component={Home} />
					<PrivateRoute path='/search' component={Search} />
					<PrivateRoute path='/addpost' component={AddPost} />
					<PrivateRoute path='/profile/:id' component={Profile} />
					<PrivateRoute path='/notifications' component={Notifications} />
					<PrivateRoute path='/settings' component={Settings} />
					<PrivateRoute path='/bookmarks' component={Bookmarks} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</Provider>
	)
}

export default App
