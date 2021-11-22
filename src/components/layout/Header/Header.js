import { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"
//comps
import LeftBar from "./LeftBar"
import { titleFunc, backIcon } from "components/utility/utilis"
//icons
import { FiSun } from "react-icons/fi"
import { BsFillMoonFill } from "react-icons/bs"
import { IoArrowBackOutline } from "react-icons/io5"
import { useSelector } from "react-redux"

const Header = () => {
	const [theme, setTheme] = useState("light")
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("User")))
	const otherUser = useSelector((state) => state?.user?.user)
	const location = useLocation()
	const history = useHistory()

	useEffect(() => {
		// const token = user?.token

		setUser(JSON.parse(localStorage.getItem("User")))
		//Later JWT here
	}, [location])

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

	const title = titleFunc(location, user, otherUser && otherUser)
	const icon = backIcon(
		location,
		user,
		otherUser && otherUser,
		history,
		IoArrowBackOutline
	)

	return (
		<header>
			<div className='header-wrapper'>
				{location.pathname === "/" ? (
					<LeftBar user={user} setUser={setUser} />
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
