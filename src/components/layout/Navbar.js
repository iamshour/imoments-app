import { Link } from "react-router-dom"
import { useLocation } from "react-router"
//icons
import { AiFillHome } from "react-icons/ai"
import { BsSearch, BsFillPersonFill } from "react-icons/bs"
import { BsPlusLg } from "react-icons/bs"

const Navbar = () => {
	const location = useLocation()
	return (
		<nav>
			<div className='wrapper'>
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
					to='profile'
					className={`nav-item ${
						location.pathname === "/profile" && "pressed"
					}`}
				>
					<BsFillPersonFill className='icon' />
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
