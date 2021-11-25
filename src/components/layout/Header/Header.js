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
	const history = useHistory()
	const location = useLocation()
	const [theme, setTheme] = useState("light")
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem("User"))?.user
	)
	const otherUserId = useSelector((state) => state?.user?.userProfile)?.id
	const otherUserName = useSelector((state) => state?.user?.userProfile)?.name

	useEffect(() => {
		// const token = user?.token

		setCurrentUser(JSON.parse(localStorage.getItem("User"))?.user)
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

	const title = titleFunc(
		location,
		currentUser,
		otherUserId && otherUserId,
		otherUserName && otherUserName
	)
	const icon = backIcon(
		location,
		currentUser,
		otherUserId && otherUserId,
		history,
		IoArrowBackOutline
	)

	return (
		<header>
			<div className='header-wrapper'>
				{location.pathname === "/" ? (
					<LeftBar currentUser={currentUser} />
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
