import Header from "components/layout/header"
import Navbar from "components/layout/navbar"
import { useLocation } from "react-router"

const Layout = ({ children }) => {
	const location = useLocation()

	return (
		<>
			<Header />
			{children}
			{location.pathname.startsWith("/home") ||
			location.pathname.startsWith("/search") ||
			location.pathname.startsWith("/addpost") ||
			location.pathname.startsWith("/notifications") ? (
				<Navbar />
			) : null}
		</>
	)
}
export default Layout
