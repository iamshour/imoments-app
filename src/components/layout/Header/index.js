import { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router"
import decode from "jwt-decode"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "api"
import { signOut } from "redux/actions/auth"
import { titleFunc, backIcon } from "components/utility"
//comps
import LeftBar from "./LeftBar"
import ThemeBtn from "./ThemeBtn"
//icons
import { IoArrowBackOutline } from "react-icons/io5"

const Header = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const location = useLocation()

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

	const title = titleFunc(location, currentUser, user && user)
	const icon = backIcon(location, currentUser, user && user, history, IoArrowBackOutline)
	const headerClass = (link) => {
		return link.startsWith("/home")
			? "header-home"
			: link === "/" || link.startsWith("/auth")
			? "header-auth"
			: ""
	}

	return (
		<header className={headerClass(location.pathname)}>
			<div className='header-wrapper'>
				{location.pathname.startsWith("/home") ? (
					<LeftBar currentUser={currentUser} />
				) : (
					<div className='header-info-wrapper'>
						{icon && icon}
						<h3>{title}</h3>
					</div>
				)}
				<ThemeBtn />
			</div>
		</header>
	)
}

export default Header
