import Header from "./Header/Header"
import Navbar from "./Navbar/Navbar"
import { useLocation } from "react-router"

const Layout = ({ children }) => {
	const location = useLocation()

	return (
		<>
			<Header />
			{children}
			{location.pathname === "/" ||
			location.pathname === "/search" ||
			location.pathname === "/addpost" ||
			location.pathname === "/notifications" ? (
				<Navbar />
			) : null}
		</>
	)
}
export default Layout
