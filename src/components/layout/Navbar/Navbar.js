import { useEffect } from "react"
import { useLocation } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { getNotifications } from "redux/actions/user"
import { Link } from "react-router-dom"
//icons
import { AiFillHome } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import { BsPlusLg } from "react-icons/bs"
import { VscBell } from "react-icons/vsc"
import { useHistory } from "react-router-dom"

const Navbar = () => {
	const history = useHistory()
	const location = useLocation()
	const dispatch = useDispatch()
	const { notifications, userMessage } = useSelector((state) => state.user)
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
	}, [dispatch, userId, location, commentMsg, userMessage, history])

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
						location.pathname === "/notifications" && "pressed"
					}`}
				>
					{notifications?.length > 0 && location.pathname !== "/notifications" && (
						<div className='notifs'>
							<p>{notifications?.length}</p>
						</div>
					)}
					<VscBell className='icon' />
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
