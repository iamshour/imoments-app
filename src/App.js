import { Switch, Route, Redirect } from "react-router-dom"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { Provider } from "react-redux"
import store from "redux/store"
import "main.scss"
//components
import Layout from "components/layout/Layout"
//pages
import Home from "pages/Home"
import Search from "pages/Search"
import AddPost from "pages/AddPost"
import Profile from "pages/Profile"
import Auth from "pages/Auth"
import Notifications from "pages/Notifications"
import NotFound from "pages/NotFound"
import Settings from "pages/Settings"
import Bookmarks from "pages/Bookmarks"
import ForgotPass from "pages/ForgotPass"
import ResetPass from "pages/ResetPass"

function App() {
	const location = useLocation()

	const [user, setUser] = useState(JSON.parse(localStorage.getItem("userId")))

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("userId")))
	}, [location])
	return (
		<Provider store={store}>
			<Layout>
				<Switch>
					<Route path='/auth'>{user ? <Redirect to='/' /> : <Auth />}</Route>
					<Route exact path='/'>
						{user ? <Home /> : <Redirect to='/auth' />}
					</Route>
					<Route path='/search'>
						{user ? <Search /> : <Redirect to='/auth' />}
					</Route>
					<Route path='/addpost'>
						{user ? <AddPost /> : <Redirect to='/auth' />}
					</Route>
					<Route path='/profile/:id'>
						{user ? <Profile /> : <Redirect to='/auth' />}
					</Route>
					<Route path='/notifications'>
						{user ? <Notifications /> : <Redirect to='/auth' />}
					</Route>
					<Route path='/settings'>
						{user ? <Settings /> : <Redirect to='/auth' />}
					</Route>
					<Route path='/bookmarks'>
						{user ? <Bookmarks /> : <Redirect to='/auth' />}
					</Route>
					<Route path='/reset-password'>
						{user ? <Redirect to='/' /> : <ForgotPass />}
					</Route>
					<Route path='/reset/:resetToken'>
						{user ? <Redirect to='/' /> : <ResetPass />}
					</Route>
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</Provider>
	)
}

export default App
