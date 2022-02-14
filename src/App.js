import { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import "styles/main.scss"
//COMPS
import Layout from "components/layout"
import PrivateRoute from "components/utility/PrivateRoute"
import PublicRoute from "components/utility/PublicRoute"
//ICONS
import { BiError } from "react-icons/bi"
//PAGES
import About from "pages/about"
import AddPost from "pages/addPost"
import Auth from "pages/auth"
import Bookmarks from "pages/bookmarks"
import ForgotPass from "pages/forgotPass"
import GetStarted from "pages/getstarted"
import Home from "pages/home"
import NotFound from "pages/notFound"
import Notifications from "pages/notifications"
import Privacy from "pages/privacy"
import Terms from "pages/privacy/Terms"
import Profile from "pages/profile"
import Report from "pages/report"
import ResetPass from "pages/resetPass"
import Search from "pages/search"
import Settings from "pages/settings"

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
					<BiError className='icon' />
					<h1>{error || "Some error occured. Please try again!"}</h1>
				</div>
			)}
			<Switch>
				<PublicRoute exact path='/' component={GetStarted} />
				<PublicRoute path='/auth' component={Auth} />
				<PublicRoute path='/forgotpassword' component={ForgotPass} />
				<PublicRoute path='/reset/:resetToken' component={ResetPass} />
				<PrivateRoute path='/home' component={Home} />
				<PrivateRoute path='/search' component={Search} />
				<PrivateRoute path='/addpost' component={AddPost} />
				<PrivateRoute path='/profile/:id' component={Profile} />
				<PrivateRoute path='/notifications' component={Notifications} />
				<PrivateRoute path='/settings' component={Settings} />
				<PrivateRoute path='/bookmarks' component={Bookmarks} />
				<PrivateRoute path='/about' component={About} />
				<PrivateRoute path='/report' component={Report} />
				<Route path='/privacy' component={Privacy} />
				<Route path='/terms' component={Terms} />
				<Route component={NotFound} />
			</Switch>
		</Layout>
	)
}

export default App
