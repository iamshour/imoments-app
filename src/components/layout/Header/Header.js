import { useEffect, useState } from "react"
import { useLocation } from "react-router"
//icons
import { FiSun } from "react-icons/fi"
import { BsFillMoonFill } from "react-icons/bs"
import { IoArrowBackOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import LeftBar from "./LeftBar"

const Header = ({ match }) => {
	const [theme, setTheme] = useState("light")
	const location = useLocation()

	useEffect(() => {
		document.documentElement.setAttribute(
			"data-theme",
			localStorage.getItem("theme")
		)

		setTheme(localStorage.getItem("theme"))
	}, [])

	const saveTheme = (theme) => {
		setTheme(theme)
		localStorage.setItem("theme", theme)
		document.documentElement.setAttribute("data-theme", theme)
	}

	const switcher = () => {
		if (theme === "light") {
			saveTheme("dark")
			document.querySelector("body").style.transition =
				"background 250ms ease-in-out, color 250ms ease-in-out"
		} else {
			saveTheme("light")
			document.querySelector("body").style.transition =
				"background 250ms ease-in-out, color 250ms ease-in-out"
		}
	}

	const icon =
		location.pathname === "/profile" ||
		location.pathname === "/user/998" ||
		location.pathname === "/changepass" ||
		location.pathname === "/bookmarks" ||
		location.pathname === "/report" ||
		location.pathname === "/about" ? (
			<Link to='/' className='go-back'>
				<IoArrowBackOutline className='icon' />
			</Link>
		) : null

	const title =
		location.pathname === "/search"
			? "Search for users"
			: location.pathname === "/notifications"
			? "Notifications"
			: location.pathname === "/addpost"
			? "Add a post"
			: location.pathname === "/profile"
			? "Profile"
			: location.pathname === "/user/998"
			? "Profile"
			: location.pathname === "/changepass"
			? "Change your password"
			: location.pathname === "/bookmarks"
			? "Bookmarked Posts"
			: location.pathname === "/report"
			? "Report a problem"
			: location.pathname === "/report"
			? "Report a problem"
			: location.pathname === "/about"
			? "About imoments app"
			: null

	return (
		<header>
			<div className='header-wrapper'>
				{location.pathname === "/" ? (
					<LeftBar />
				) : (
					<div className='header-info-wrapper'>
						{icon && icon}
						<h3>{title}</h3>
					</div>
				)}
				<div className='theme-wrapper'>
					<button onClick={switcher}>
						{theme === "light" ? (
							<BsFillMoonFill className='icon' />
						) : (
							<FiSun className='icon' />
						)}
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
