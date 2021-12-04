import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTimeline } from "redux/actions/posts"
//COMPS
import Card from "components/card/Card"
import Loading from "components/utility/Loading"

const Home = () => {
	const dispatch = useDispatch()
	const [customFetch, setCustomFetch] = useState(true)
	//Current active user Id
	const userId = JSON.parse(localStorage.getItem("userId"))?.id

	const { timeline, postMessage, postLoading } = useSelector(
		(state) => state.posts
	)

	useEffect(() => {
		dispatch(getTimeline(userId))

		if (customFetch) {
			setTimeout(() => {
				setCustomFetch(false)
			}, 4000)
		}

		return () => {
			dispatch({
				type: "CLEAR_POSTS",
			})
		}
		//eslint-disable-next-line
	}, [dispatch, userId, postMessage])

	return (
		<div className='home-page'>
			{postLoading ? (
				<Loading />
			) : timeline?.length > 0 ? (
				timeline?.map((post) => (
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
				<>
					{customFetch ? (
						<div>
							<Loading />
						</div>
					) : (
						<>
							<h1>
								Welcome To imoments, where you can share your favorite moments
								with your friends &amp; family!
							</h1>
							<p>
								No Posts yet. Add your own posts by clicking on the (+) button
								below, or follow some new friends!
							</p>
						</>
					)}
				</>
			)}
		</div>
	)
}

export default Home
