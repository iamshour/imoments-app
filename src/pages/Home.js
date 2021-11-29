import { useLocation } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getTimeline } from "redux/actions/posts"
import Card from "components/card/Card"

const Home = () => {
	const location = useLocation()
	const dispatch = useDispatch()
	const { timeline } = useSelector((state) => state.posts)

	//Current active user Id
	const userId = JSON.parse(localStorage.getItem("User"))?.user?._id

	const { success } = useSelector((state) => state?.posts)

	useEffect(() => {
		dispatch(getTimeline(userId))
	}, [dispatch, location, userId, success])

	return (
		<div className='home-page'>
			{timeline?.length > 0 ? (
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
				<div>
					<h1>
						Welcome To imoments, where you can share your favorite moments with
						your friends &amp; family!
					</h1>
					<p>
						No Posts yet. Add your own posts by clicking on the (+) button
						below, or follow some new friends!
					</p>
				</div>
			)}
		</div>
	)
}

export default Home
