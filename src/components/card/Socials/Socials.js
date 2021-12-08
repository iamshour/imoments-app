import { useState } from "react"
import { useDispatch } from "react-redux"
import { likePost } from "redux/actions/posts"
//comps
import Comment from "./Comment/Comment"
import AddComment from "./Comment/AddComment"
//icons
import { AiOutlineLike, AiFillLike } from "react-icons/ai"
import { FaRegComment } from "react-icons/fa"
import { IoIosArrowUp } from "react-icons/io"
import { getComments } from "api"
import Loading from "components/utility/Loading"
import { useEffect } from "react"

const Socials = ({ likes, postId }) => {
	const dispatch = useDispatch()
	const userId = JSON.parse(localStorage.getItem("userId"))?.id

	const [loading, setLoading] = useState(false)
	const [commentsClicked, setCommentsClicked] = useState(false)
	const [commentSubmitted, setcommentSubmitted] = useState(false)
	const [allComments, setAllComments] = useState([])
	console.log(allComments)

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
				setLoading(true)
				const { data } = await getComments(postId)
				setAllComments(data)
				setLoading(false)
			} catch (error) {
				dispatch({
					type: "ERROR",
					payload: error.response.data.message,
				})
			}
		}

		commentsHandler()
	}, [commentSubmitted, postId])

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
							{/* <h2>{comments} comments</h2> */}
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
					<AddComment
						postId={postId}
						setcommentSubmitted={setcommentSubmitted}
					/>
					{loading ? (
						<Loading />
					) : allComments?.length === 0 ? (
						<h1>No Comments yet</h1>
					) : (
						allComments.map((comment, index) => (
							<Comment
								key={index}
								commentorId={comment?.commentorId}
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
