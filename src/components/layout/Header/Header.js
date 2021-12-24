import { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"
import decode from "jwt-decode"
import { getUser } from "api"
import { useDispatch, useSelector } from "react-redux"
import { titleFunc, backIcon } from "components/utility/utilis"
//comps
import LeftBar from "./LeftBar"
//icons
import { FiSun } from "react-icons/fi"
import { BsFillMoonFill } from "react-icons/bs"
import { IoArrowBackOutline } from "react-icons/io5"
import { signOut } from "redux/actions/auth"

const Header = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const location = useLocation()
	const [theme, setTheme] = useState("light")
	const currentUserId = JSON.parse(localStorage.getItem("userId"))?.id

	const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("User")))

	const { user, userMessage } = useSelector((state) => state?.user)

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem("userId"))?.token

		if (token) {
			const decodedToken = decode(token)

			if (decodedToken.exp * 1000 < new Date().getTime()) {
				dispatch(signOut(history))
			}
		}

		if (currentUserId) {
			const getCurrentUser = async () => {
				const { data } = await getUser(currentUserId)
				localStorage.setItem("User", JSON.stringify(data))
				setCurrentUser(JSON.parse(localStorage.getItem("User")))
			}
			getCurrentUser()
		}

		//Later JWT here
	}, [location, currentUserId, userMessage, dispatch, history])

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"))

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

	const title = titleFunc(location, currentUser, user && user)
	const icon = backIcon(location, currentUser, user && user, history, IoArrowBackOutline)

	return (
		<header
			className={
				location.pathname === "/"
					? "header-home"
					: location.pathname.startsWith("/auth")
					? "header-auth"
					: ""
			}>
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
