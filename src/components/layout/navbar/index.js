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

	return (
		<nav>
			<div className='wrapper' onChange={window.scroll(0, 0)}>
				<Link
					to='/'
					className={`nav-item ${location.pathname.startsWith("/home") && "pressed"}`}>
					<AiFillHome className='icon' />
				</Link>
				<Link
					to='/search'
					className={`nav-item ${location.pathname.startsWith("/search") && "pressed"}`}>
					<BsSearch className='icon' />
				</Link>
				<Link
					to='/addpost'
					className={`nav-item ${location.pathname.startsWith("/addpost") && "pressed"}`}>
					<BsPlusLg className='icon' />
				</Link>
				<Link
					to='/notifications'
					className={`nav-item ${
						location.pathname.startsWith("/notifications") && "pressed"
					}`}>
					{notifications?.length > 0 && !location.pathname.startsWith("/notifications") && (
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
