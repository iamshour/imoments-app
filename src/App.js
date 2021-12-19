import { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import "main.scss"
//COMPS
import Layout from "components/layout/Layout"
import PrivateRoute from "components/utility/PrivateRoute"
import PublicRoute from "components/utility/PublicRoute"
//ICONS
import { BiError } from "react-icons/bi"
//PAGES
import Home from "pages/Home/Home"
import Search from "pages/Search/Search"
import AddPost from "pages/AddPost/AddPost"
import About from "pages/About/About"
import Profile from "pages/Profile/Profile"
import Auth from "pages/Auth/Auth"
import Notifications from "pages/Notifications/Notifications"
import NotFound from "pages/NotFound/NotFound"
import Settings from "pages/Settings/Settings"
import Bookmarks from "pages/Bookmark/Bookmarks"
import ForgotPass from "pages/ForgotPass/ForgotPass"
import ResetPass from "pages/ResetPass/ResetPass"
import Report from "pages/Report/Report"

function App() {
	const dispatch = useDispatch()
	const { error } = useSelector((state) => state?.utility)

	useEffect(() => {
		if (error !== null || undefined)
			return setTimeout(() => {
				dispatch({
					type: "CLEAR_ERROR",
				})
			}, 2000)
	}, [error, dispatch])

	return (
		<Layout>
			{(error !== null || undefined) && (
				<div className='error-container'>
					<div className='wrapper'>
						<h1>
							<BiError className='icon' />
							{error || "Some error occured. Please try again!"}
						</h1>
					</div>
				</div>
			)}
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
				<PrivateRoute path='/about' component={About} />
				<PrivateRoute path='/report' component={Report} />
				<Route component={NotFound} />
			</Switch>
		</Layout>
	)
}

export default App
