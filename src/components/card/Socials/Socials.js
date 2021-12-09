import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { likePost } from "redux/actions/posts"
//comps
import Comment from "./Comment/Comment"
import AddComment from "./Comment/AddComment"
//icons
import { AiOutlineLike, AiFillLike } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import { IoIosArrowUp } from "react-icons/io"
import { getComments } from "api"
import { useEffect } from "react"

const Socials = ({ likes, postId }) => {
	const dispatch = useDispatch()
	const userId = JSON.parse(localStorage.getItem("userId"))?.id
	const { commentMsg } = useSelector((state) => state.posts)

	const [commentsClicked, setCommentsClicked] = useState(false)
	const [allComments, setAllComments] = useState([])

	const [likesLength, setLikesLength] = useState(likes?.length)
	const [likeIncluded, setLikeIncluded] = useState(
		likes?.includes(userId) ? true : false
	)
	const [likeClicked, setLikeClicked] = useState(likeIncluded)

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

	useEffect(() => {
		const commentsHandler = async () => {
			try {
				const { data } = await getComments(postId)
				setAllComments(data)
			} catch (error) {
				dispatch({
					type: "ERROR",
					payload: error.response.data.message,
				})
			}
		}
		commentsHandler()

		return () => {
			dispatch({
				type: "CLEAR_COMMENT_MSG",
			})
		}
	}, [postId, dispatch, commentMsg])

	return (
		<div className='card-bottom'>
			<div className='socials-bar'>
				<button
					onClick={likeHandler}
					className={`socials-btn ${likeClicked && "clicked"}`}
				>
					<div className='icon-wrapper'>
						{likeClicked ? (
							<AiFillLike className='icon' />
						) : (
							<AiOutlineLike className='icon' />
						)}
					</div>
					<h2>
						{likesLength === 0
							? "0 likes"
							: likesLength === 1
							? "1 like"
							: likesLength + " likes"}
					</h2>
				</button>
				<button
					onClick={() => setCommentsClicked(!commentsClicked)}
					className='socials-btn'
				>
					{!commentsClicked ? (
						<>
							<div className='icon-wrapper'>
								<FaRegComment className='icon' />
							</div>
							<h2>
								{allComments?.length === 0
									? "No comments yet"
									: allComments?.length === 1
									? "1 comment"
									: allComments?.length + " comments"}
							</h2>
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
					<AddComment postId={postId} />
					{allComments?.length === 0 ? (
						<h1>No Comments yet</h1>
					) : (
						allComments.map((comment) => (
							<Comment
								key={comment?.commentId}
								commentId={comment?.commentId}
								commentorId={comment?.commentorId}
								postId={postId}
								content={comment?.comment}
								time={comment?.createdAt}
							/>
						))
					)}
				</div>
			)}
		</div>
	)
}

export default Socials
