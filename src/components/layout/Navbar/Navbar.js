import { Link } from "react-router-dom"
import { useLocation } from "react-router"
//icons
import { AiFillHome } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import { BsPlusLg } from "react-icons/bs"
import { VscBell } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getNotifications } from "redux/actions/user"
// VscBellDot

const Navbar = () => {
	const location = useLocation()
	const dispatch = useDispatch()
	const { notifications, userMessage } = useSelector((state) => state.user)
	const { commentMsg } = useSelector((state) => state.posts)

	const userId = JSON.parse(localStorage.getItem("userId"))?.id

	useEffect(() => {
		dispatch(getNotifications(userId))

		return () => {
			dispatch({
				type: "CLEAR_USER_TAB",
			})
		}
	}, [dispatch, userId, location, commentMsg, userMessage])

	return (
		<nav style={location.pathname === "/auth" ? { display: "none" } : {}}>
			<div className='wrapper' onChange={window.scroll(0, 0)}>
				<Link
					to='/'
					className={`nav-item ${location.pathname === "/" && "pressed"}`}
				>
					<AiFillHome className='icon' />
				</Link>
				<Link
					to='/search'
					className={`nav-item ${location.pathname === "/search" && "pressed"}`}
				>
					<BsSearch className='icon' />
				</Link>
				<Link
					to='/addpost'
					className={`nav-item ${
						location.pathname === "/addpost" && "pressed"
					}`}
				>
					<BsPlusLg className='icon' />
				</Link>
				<Link
					to='/notifications'
					className={`nav-item ${
						location.pathname === "/notifications" && "pressed notif"
					}`}
				>
					<VscBell className='icon' />
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
