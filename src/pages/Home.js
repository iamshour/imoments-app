import Card from "components/card/Card"
// import { useDispatch, useSelector } from "react-redux"
// import { useEffect } from "react"
// import { getPosts } from "redux/actions/posts"

const Home = () => {
	// const dispatch = useDispatch()
	// const posts = useSelector((state) => state.posts)

	// useEffect(() => {
	// 	dispatch(getPosts())
	// }, [dispatch])

	const customUsers = [
		{
			id: 1,
			name: "Ramz Cord",
			time: "10 mins ago",
			avatar: "https://i.pravatar.cc/150?img=26",
			img: "https://picsum.photos/536/354",
			caption:
				"Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
		},
		{
			id: 2,
			name: "Sam shour",
			time: "45 mins ago",
			avatar: "https://i.pravatar.cc/150?img=55",
			caption:
				"Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
		},
		{
			id: 3,
			name: "lora jassz",
			time: "1 hour ago",
			avatar: "https://i.pravatar.cc/150?img=5",
		},
		{
			id: 4,
			name: "bill ford",
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
					name={user.name}
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
