import { Switch, Route } from "react-router-dom"
import { useSelector } from "react-redux"
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
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { BiError } from "react-icons/bi"

function App() {
	const dispatch = useDispatch()
	const { error } = useSelector((state) => state?.utility)
	console.log(error)

	useEffect(() => {
		if (error !== null || undefined)
			return setTimeout(() => {
				dispatch({
					type: "CLEAR_ERROR",
				})
			}, 1500)
	}, [error, dispatch])

	return (
		<Layout>
			{(error !== null || undefined) && (
				<div className='error-container'>
					<div className='wrapper'>
						<h1>
							<BiError className='icon' />
							{error}
						</h1>
						{/* <h1>
							<BiError className='icon' />
							Hey this is a testing error log. just be patient and thanks!
						</h1> */}
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
				<Route component={NotFound} />
			</Switch>
		</Layout>
	)
}

export default App
