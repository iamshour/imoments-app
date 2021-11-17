import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
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
// import User from "pages/User"
import Auth from "pages/Auth"
import Notifications from "pages/Notifications"

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Layout>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/search' component={Search} />
						<Route path='/addpost' component={AddPost} />
						<Route path='/profile/:id' component={Profile} />
						<Route path='/notifications' component={Notifications} />
						<Route path='/auth' component={Auth} />
						{/* <Route path='/user/:id' component={User} /> */}
					</Switch>
				</Layout>
			</Router>
		</Provider>
	)
}

export default App
