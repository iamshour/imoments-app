import { Link } from "react-router-dom"
import Moment from "react-moment"
//COMPS
import Dropdown from "./Dropdown"
//icons
import { AiOutlineEllipsis } from "react-icons/ai"
import { IoMdClose } from "react-icons/io"
import { useState } from "react"
import { useEffect } from "react"
import { useLocation } from "react-router"
import { makeUppercase } from "components/utility/utilis"

const CardUpper = ({
	avatar,
	creatorId,
	postId,
	name,
	time,
	optionsClicked,
	setOptionsClicked,
	setEditClicked,
}) => {
	const location = useLocation()
	const currentUser = JSON.parse(localStorage.getItem("User"))
	const [bookmarkIncluded, setBookmarkIncluded] = useState(
		currentUser?.bookmarks?.includes(postId) ? true : false
	)
	const [bookmarkClicked, setbookmarkClicked] = useState(bookmarkIncluded)

	useEffect(() => {
		setBookmarkIncluded(currentUser?.bookmarks?.includes(postId) ? true : false)
	}, [currentUser.bookmarks, location, postId])

	return (
		<div className='card-upper'>
			<Link to={`/profile/${creatorId}`} className='left'>
				<img src={avatar} alt={name} />
				<div className='info'>
					<h1 className='user-name'>
						{makeUppercase(name, 0) + " " + makeUppercase(name, 1)}
					</h1>
					<h2 className='user-time'>
						<Moment fromNow>{time}</Moment>
					</h2>
				</div>
			</Link>
			<button
				className='right'
				onClick={() => {
					setOptionsClicked(!optionsClicked)
					if (bookmarkClicked) {
						setbookmarkClicked(true)
						setBookmarkIncluded(true)
					} else {
						setbookmarkClicked(false)
						setBookmarkIncluded(false)
					}
				}}
			>
				{optionsClicked ? (
					<IoMdClose className='icon' />
				) : (
					<AiOutlineEllipsis className='icon' />
				)}
			</button>
			{optionsClicked && (
				<Dropdown
					postId={postId}
					creatorId={creatorId}
					setOptionsClicked={setOptionsClicked}
					setEditClicked={setEditClicked}
					bookmarkClicked={bookmarkClicked}
					bookmarkIncluded={bookmarkIncluded}
					setbookmarkClicked={setbookmarkClicked}
					setBookmarkIncluded={setBookmarkIncluded}
				/>
			)}
		</div>
	)
}

export default CardUpper
