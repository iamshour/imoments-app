import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getBookmarkedPosts } from "redux/actions/posts"
//COMPS
import Card from "components/card/Card"
import Loading from "components/utility/Loading"
import { BsEmojiFrown } from "react-icons/bs"

const Bookmarks = () => {
	const dispatch = useDispatch()
	const [customFetch, setCustomFetch] = useState(true)
	const currentUserId = JSON.parse(localStorage.getItem("userId"))?.id
	const { bookmarkedPosts, postLoading, postMessage } = useSelector(
		(state) => state.posts
	)

	useEffect(() => {
		dispatch(getBookmarkedPosts(currentUserId))

		if (customFetch) {
			setTimeout(() => {
				setCustomFetch(false)
			}, 1500)
		}

		return () => {
			dispatch({
				type: "CLEAR_POSTS",
			})
		}
		//eslint-disable-next-line
	}, [dispatch, currentUserId, postMessage])

	return (
		<div className='bookmarks-page'>
			{postLoading ? (
				<Loading />
			) : bookmarkedPosts?.length > 0 ? (
				bookmarkedPosts?.map((post) => (
					<Card
						key={post._id}
						creatorId={post?.creatorId}
						postId={post?._id}
						img={post?.postImg}
						caption={post?.caption}
						time={new Date(post?.createdAt).toDateString()}
						likes={post?.likes}
					/>
				))
			) : (
				<div className='empty-wrapper'>
					{customFetch ? (
						<Loading />
					) : (
						<>
							<BsEmojiFrown className='icon' />
							<h1>No posts bookmarked yet!</h1>
						</>
					)}
				</div>
			)}
		</div>
	)
}

export default Bookmarks
