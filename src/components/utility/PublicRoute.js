import { Redirect, Route } from "react-router-dom"

const PublicRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				localStorage.getItem("userId") ? (
					<Redirect to='/' />
				) : (
					<Component {...props} />
				)
			}
		/>
	)
}

export default PublicRoute
