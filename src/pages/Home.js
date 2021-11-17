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

	const customUsers = [
		{
			id: 1,
			username: "iamshour",
			time: "10 mins ago",
			avatar: "https://i.pravatar.cc/150?img=26",
			img: "https://picsum.photos/536/354",
			caption:
				"Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
		},
		{
			id: 2,
			username: "iamshour",
			time: "45 mins ago",
			avatar: "https://i.pravatar.cc/150?img=55",
			caption:
				"Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
		},
		{
			id: 3,
			username: "lorajassz",
			time: "1 hour ago",
			avatar: "https://i.pravatar.cc/150?img=5",
		},
		{
			id: 4,
			username: "billford",
			time: "3 hours ago",
			avatar: "https://i.pravatar.cc/150?img=43",
			img: "https://picsum.photos/536/354",
			caption:
				"Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
		},
	]
	const filteredUsers = customUsers.filter(
		(user) => user.caption && user.img !== null
	)

	return (
		<div className='home-page'>
			{filteredUsers.map((user) => (
				<Card
					key={user.id}
					id={user.id}
					username={user.username}
					avatar={user.avatar}
					img={user.img}
					caption={user.caption}
					time={user.time}
				/>
			))}
		</div>
	)
}

export default Home
