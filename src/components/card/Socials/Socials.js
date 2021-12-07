import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import { useDispatch } from "react-redux"
import { likePost } from "redux/actions/posts"
//comps
import Comment from "./Comment/Comment"
import AddComment from "./Comment/AddComment"
//icons
import { AiOutlineLike, AiFillLike } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import { IoIosArrowUp } from "react-icons/io"

const Socials = ({ likes, comments, creatorId, postId }) => {
	const dispatch = useDispatch()
	const location = useLocation()
	const userId = JSON.parse(localStorage.getItem("userId"))?.id

	const [commentsClicked, setCommentsClicked] = useState(false)
	const [likesLength, setLikesLength] = useState(likes?.length)

	const [likeIncluded, setLikeIncluded] = useState(
		likes?.includes(userId) ? true : false
	)
	const [likeClicked, setLikeClicked] = useState(likeIncluded)
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

	const likeHandler = () => {
		if (likeIncluded) {
			setLikesLength(likesLength - 1)
			setLikeClicked(false)
			setLikeIncluded(false)
		} else {
			setLikesLength(likesLength + 1)
			setLikeClicked(true)
			setLikeIncluded(true)
		}
		dispatch(likePost(postId, { userId: userId }))
	}

	return (
		<div className='card-bottom'>
			<div className='socials-bar'>
				<button onClick={likeHandler} className={likeClicked ? "clicked" : ""}>
					<div className='icon-wrapper'>
						{likeClicked ? (
							<AiFillLike className='icon' />
						) : (
							<AiOutlineLike className='icon' />
						)}
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
