import { useLocation } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getTimeline } from "redux/actions/posts"
import Card from "components/card/Card"
import Loading from "components/utility/Loading"
import SuccessMessage from "components/utility/SuccessMessage"
import { useState } from "react"

const Home = () => {
	const location = useLocation()
	const dispatch = useDispatch()
	const { timeline } = useSelector((state) => state.posts)
	const [customFetch, setCustomFetch] = useState(true)

	//Current active user Id
	const userId = JSON.parse(localStorage.getItem("User"))?.user?._id

	const { loading, message } = useSelector((state) => state?.utility)

	useEffect(() => {
		dispatch(getTimeline(userId))

		if (customFetch) {
			setTimeout(() => {
				setCustomFetch(false)
			}, 3000)
		}

		return () => {
			dispatch({
				type: "CLEAR_UTILITY",
			})
			dispatch({
				type: "CLEAR_POSTS",
			})
		}
	}, [dispatch, location, userId, message])

	return (
		<div className='home-page'>
			{loading ? (
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
