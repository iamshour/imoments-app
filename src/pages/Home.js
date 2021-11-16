import Card from "components/card/Card"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getPosts } from "redux/actions/posts"

const Home = () => {
	const dispatch = useDispatch()
	const posts = useSelector((state) => state.posts)

	useEffect(() => {
		dispatch(getPosts())
	}, [dispatch])

	return (
		<div className='home-page'>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	)
}

export default Home
