import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "redux/store"
import "styles/main.scss"
//components
import Layout from "components/layout/Layout"
//pages
import Home from "pages/Home"
import Search from "pages/Search"
import AddPost from "pages/AddPost"
import Profile from "pages/Profile"
import User from "pages/User"
import Auth from "pages/Auth"
import { useState } from "react"

function App() {
	const [authenticated, setAuhenticated] = useState(false)
	return (
		<Provider store={store}>
			<Router>
				<Layout>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/search' component={Search} />
						<Route path='/addpost' component={AddPost} />
						{authenticated ? (
							<Route path='/profile' component={Profile} />
						) : (
							<Route path='/auth' component={Auth} />
						)}
						<Route path='/user/:id' component={User} />
					</Switch>
				</Layout>
			</Router>
		</Provider>
	)
}

export default App