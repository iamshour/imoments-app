import Header from "./Header"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Navbar />
		</>
	)
}

export default Layout
