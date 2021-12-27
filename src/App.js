import { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import "./main.scss"
//COMPS
import Layout from "components/layout/Layout"
import PrivateRoute from "components/utility/PrivateRoute"
import PublicRoute from "components/utility/PublicRoute"
//ICONS
import { BiError } from "react-icons/bi"
//PAGES
import Home from "./pages/home/Home.js"
import Search from "./pages/search/Search.js"
import AddPost from "./pages/add/AddPost.js"
import About from "./pages/about/About.js"
import Profile from "./pages/profile/Profile.js"
import Auth from "./pages/auth/Auth.js"
import Notifications from "./pages/notifications/Notifications.js"
import NotFound from "./pages/notFound/NotFound.js"
import Settings from "./pages/settings/Settings.js"
import Bookmarks from "./pages/bookmarks/Bookmarks.js"
import ForgotPass from "./pages/forgotPass/ForgotPass.js"
import ResetPass from "./pages/resetPass/ResetPass.js"
import Report from "./pages/report/Report.js"

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
