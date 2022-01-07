import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTimeline } from "redux/actions/posts"
//COMPS
import Card from "components/card/Card"
import Loading from "components/utility/Loading"

const Home = () => {
	const dispatch = useDispatch()
	//Current active user Id
	const userId = JSON.parse(localStorage.getItem("userId"))?.id

	const { timeline, postMessage, postLoading } = useSelector((state) => state.posts)

	useEffect(() => {
		dispatch(getTimeline(userId))

		return () => {
			dispatch({
				type: "CLEAR_POSTS",
			})
			dispatch({
				type: "CLEAR_USER_TAB",
			})
		}
		//eslint-disable-next-line
	}, [dispatch, userId, postMessage])

	return (
		<div className={timeline?.length > 0 ? "home-page" : "home-page-empty"}>
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
						time={post?.createdAt}
						likes={post?.likes}
					/>
				))
			) : (
				<>
					<img
						src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1639520856/imoments-app/Sally-4_wf355q.png'
						alt='welcome to imoments app!'
					/>
					<div className='text'>
						<h1>Welcome To imoments!</h1>
						<p>
							Add your own posts,
							<br />
							Share your favorite moments,
							<br />
							Follow some new friends!
						</p>
					</div>
				</>
			)}
		</div>
	)
}

export default Home
