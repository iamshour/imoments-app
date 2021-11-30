import { useState } from "react"
//comps
import Comment from "./Comment/Comment"
import AddComment from "./Comment/AddComment"
//icons
import { AiOutlineLike } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import { IoIosArrowUp } from "react-icons/io"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { likePost } from "redux/actions/posts"

const Socials = ({ likes, comments, creatorId, postId }) => {
	const userId = JSON.parse(localStorage.getItem("User"))?.user?._id
	const dispatch = useDispatch()
	const [commentsClicked, setCommentsClicked] = useState(false)
	const [likesLength, setLikesLength] = useState(likes?.length)

	const [clicked, setClicked] = useState(likes?.includes(userId) ? true : false)
	const [likesStyle, setLikesStyle] = useState(clicked)
	const customComments = [
		{
			cmnt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate molestias nisi voluptatibus ea? Vero, aliquam",
			cmntName: "Jade Loolo",
			cmntTime: "2 days ago",
			cmntAvatar: "https://i.pravatar.cc/150?img=16",
		},
		{
			cmnt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate molestias nisi voluptatibus ea? Vero, aliquam",
			cmntName: "Kaom Paol",
			cmntTime: "27 days ago",
			cmntAvatar: "https://i.pravatar.cc/150?img=49",
		},
		{
			cmnt: "Voluptate molestias nisi voluptatibus ea? Vero, aliquam",
			cmntName: "Kaom Paol",
			cmntTime: "27 days ago",
			cmntAvatar: "https://i.pravatar.cc/150?img=2",
		},
	]

	console.log()

	useEffect(() => {
		setClicked(likes?.includes(userId) ? true : false)
	}, [likes, userId, clicked])

	const likeHandler = () => {
		if (clicked) {
			setLikesLength(likesLength - 1)
			setLikesStyle(false)
		} else {
			setLikesLength(likesLength + 1)
			setLikesStyle(true)
		}
		dispatch(likePost(postId, { userId: userId }))
	}

	return (
		<div className='card-bottom'>
			<div className='socials-bar'>
				<button onClick={likeHandler} className={likesStyle ? "clicked" : ""}>
					<div className='icon-wrapper'>
						<AiOutlineLike className='icon' />
					</div>
					<h2>{likesLength} likes</h2>
				</button>
				<button onClick={() => setCommentsClicked(!commentsClicked)}>
					{!commentsClicked ? (
						<>
							<div className='icon-wrapper'>
								<FaRegComment className='icon' />
							</div>
							<h2>{comments} comments</h2>
						</>
					) : (
						<>
							<div className='icon-wrapper'>
								<IoIosArrowUp className='icon' />
							</div>
							<h2>Hide comments</h2>
						</>
					)}
				</button>
			</div>
			{commentsClicked && (
				<div className='comments-wrapper'>
					<AddComment />
					{customComments.map((comment) => (
						<Comment
							cmnt={comment.cmnt}
							cmntName={comment.cmntName}
							cmntTime={comment.cmntTime}
							cmntAvatar={comment.cmntAvatar}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default Socials
