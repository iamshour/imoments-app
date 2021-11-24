import { useLocation } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getTimeline } from "redux/actions/posts"
import Card from "components/card/Card"

const Home = () => {
	const location = useLocation()
	const dispatch = useDispatch()
	const { timeline } = useSelector((state) => state.posts)

	//Current active user
	const user = JSON.parse(localStorage.getItem("User"))?.user
	const userId = user?._id

	useEffect(() => {
		dispatch(getTimeline(userId))
	}, [dispatch, location, userId])

	return (
		<div className='home-page'>
			{timeline?.map((post) => (
				<Card
					key={post._id}
					creatorId={post?.creatorId}
					img={post?.postImg}
					caption={post?.caption}
					time={new Date(post?.createdAt).toDateString()}
				/>
			))}
		</div>
	)
}

export default Home
