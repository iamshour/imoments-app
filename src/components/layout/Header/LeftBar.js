import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import { useDispatch } from "react-redux"
import { signOut } from "redux/actions/auth"
import { makeUppercase } from "components/utility/utilis"
//icons/assets
import { BsBookmarks, BsInfoCircle } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"
import { AiOutlineCheck } from "react-icons/ai"
import { FiUser, FiSettings } from "react-icons/fi"
import { CgSupport } from "react-icons/cg"
import { IoLogOutOutline } from "react-icons/io5"
import { useWindowSize } from "components/utility/useWindowSize"

const LeftBar = ({ currentUser }) => {
	const dispatch = useDispatch()
	const [leftBarOpened, setLeftBarOpened] = useState(false)
	const [modalOpened, setModalOpened] = useState(false)

	const { width } = useWindowSize()

	const history = useHistory()

	const openLeftBar = () => {
		setLeftBarOpened(true)
		document.documentElement.style.overflowY = "hidden"
		document.querySelector("nav").style.display = "none"
	}
	const closeLeftBar = (e) => {
		if (e.target.classList.contains("backdrop")) {
			setLeftBarOpened(false)
			document.querySelector("nav").style.display = "unset"
		}
		document.querySelector("html").style.overflowY = "visible"
	}
	const signOutModel = () => {
		setModalOpened(true)
		document.querySelector("nav").style.display = "hidden"
		width < 1080
			? setLeftBarOpened(false)
			: (document.querySelector("nav").style.visibility = "hidden")
	}
	const signOutModelClose = (e) => {
		if (e.target.classList.contains("backdrop")) {
			setModalOpened(false)
			document.querySelector("nav").style.display = "unset"
			width < 1080
				? setLeftBarOpened(false)
				: (document.querySelector("nav").style.visibility = "unset")
		}
	}
	const signOutBtnClose = (e) => {
		setModalOpened(false)
		document.querySelector("nav").style.display = "unset"
		width < 1080
			? setLeftBarOpened(false)
			: (document.querySelector("nav").style.visibility = "unset")
	}

	useEffect(() => {
		if (width >= 1080) {
			const func = () => {
				setLeftBarOpened(true)
			}
			func()
		} else {
			const func = () => {
				setLeftBarOpened(false)
			}
			func()
		}
	}, [width])

	const links = [
		{
			destination: `/profile/${currentUser?._id}`,
			icon: <FiUser className='icon' />,
			title: "profile",
		},
		{
			destination: "/settings",
			icon: <FiSettings className='icon' />,
			title: "Account settings",
		},
		{
			destination: "/bookmarks",
			icon: <BsBookmarks className='icon' />,
			title: "Bookmarks",
		},
		{
			destination: "/report",
			icon: <CgSupport className='icon' />,
			title: "Report a problem",
		},
		{
			destination: "/about",
			icon: <BsInfoCircle className='icon' />,
			title: "About app",
		},
	]

	return (
		<>
			<button className='avatar-wrapper' onClick={openLeftBar}>
				<img src={currentUser?.avatar} alt={currentUser?.name} />
			</button>
			{leftBarOpened && (
				<div className='backdrop backdrop-1' onClick={width < 1080 ? closeLeftBar : null}>
					<div className='left-bar'>
						<div className='left-bar-upper'>
							<Link
								to={`/profile/${currentUser?._id}`}
								className='user-info'
								onClick={closeLeftBar}>
								<img src={currentUser?.avatar} alt={currentUser?.name || "User avatar"} />
								<h1>
									{makeUppercase(currentUser?.name, 0) +
										" " +
										makeUppercase(currentUser?.name, 1)}
								</h1>
							</Link>
						</div>
						<div className='left-bar-links'>
							{links?.map((item) => {
								return (
									<Link
										to={item.destination}
										key={item.title}
										className='link-container'
										onClick={closeLeftBar}>
										{item.icon}
										<h3>{item.title}</h3>
									</Link>
								)
							})}
							<button className='link-container' onClick={signOutModel}>
								<IoLogOutOutline className='icon' />
								<h3>Sign Out</h3>
							</button>
						</div>
						<div className='left-bar-bottom'>
							<img
								src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1640427791/imoments-app/imoments-logo_pyuwpm.png'
								alt='imoments logo'
							/>
						</div>
					</div>
				</div>
			)}
			{modalOpened && (
				<div className='backdrop' onClick={signOutModelClose}>
					<div className='signout-container'>
						<h3>Are you sure you want to sign out?</h3>
						<button className='btn-medium' onClick={() => dispatch(signOut(history))}>
							<p>Yes, Sign Out</p>
							<AiOutlineCheck className='icon' />
						</button>
						<button onClick={signOutBtnClose} className='btn-medium reverse-btn'>
							<p>Cancel</p>
							<IoMdClose className='icon' />
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default LeftBar
