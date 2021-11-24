import Header from "./Header/Header"
import Navbar from "./Navbar/Navbar"
import { useLocation } from "react-router"
import { useSelector } from "react-redux"

const Layout = ({ children }) => {
	const location = useLocation()
	const { modalStatus } = useSelector((state) => state?.utility)

	return (
		<>
			{!modalStatus && <Header />}
			{children}
			{location.pathname === "/" ||
			location.pathname === "/search" ||
			location.pathname === "/addpost" ||
			location.pathname === "/notifications"
				? !modalStatus && <Navbar />
				: null}
		</>
	)
}

export default Layout
