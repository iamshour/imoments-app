import { useEffect } from "react"
import { useLocation } from "react-router"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getNotifications } from "redux/actions/user"
//icons
import { AiFillHome } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import { BsPlusLg } from "react-icons/bs"
import { VscBell } from "react-icons/vsc"

const Navbar = () => {
	const history = useHistory()
	const location = useLocation()
	const dispatch = useDispatch()
	const { userMessage, notifications } = useSelector((state) => state.user)
	const { commentMsg } = useSelector((state) => state.posts)

	const userId = JSON.parse(localStorage.getItem("userId"))?.id

	useEffect(() => {
		if (userId) {
			dispatch(getNotifications(userId))
		}

		return () => {
			dispatch({
				type: "CLEAR_USER_TAB",
			})
		}
	}, [dispatch, userId, location, commentMsg, history, userMessage])

	const isActive = (dest) => {
		return location.pathname === dest ? "active" : ""
	}

	const pages = [
		{
			link: "/home",
			icon: <AiFillHome className='icon' />,
		},
		{
			link: "/search",
			icon: <BsSearch className='icon' />,
		},
		{
			link: "/addpost",
			icon: <BsPlusLg className='icon' />,
		},
		{
			link: "/notifications",
			icon: <VscBell className='icon' />,
			badge: notifications?.length > 0 &&
				!location.pathname.startsWith("/notifications") && (
					<div className='notifs'>
						<p>{notifications?.length}</p>
					</div>
				),
		},
	]

	return (
		<nav>
			<div className='wrapper' onChange={window.scroll(0, 0)}>
				{pages.map((page, index) => (
					<Link key={index} to={page.link} className={`nav-item ${isActive(page.link)}`}>
						{page.icon}
						{page?.badge}
					</Link>
				))}
			</div>
		</nav>
	)
}

export default Navbar
