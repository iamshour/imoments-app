import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import { useSelector } from "react-redux"
import { getUser } from "api"
//comps
import PostBottom from "./postBottom"
import PostTop from "./postTop"
import PostImg from "./PostImg"
import EditPost from "./EditPost"

const Post = ({ creatorId, postId, img, caption, time, likes }) => {
	const location = useLocation()
	const [postCreator, setPostCreator] = useState(null)

	const [optionsClicked, setOptionsClicked] = useState(false)
	const [editClicked, setEditClicked] = useState(false)

	const { userMessage } = useSelector((state) => state?.user)

	useEffect(() => {
		let isMounted = true

		const getPostCreator = async () => {
			const { data } = await getUser(creatorId)
			isMounted && setPostCreator(data)
		}
		getPostCreator()

		return () => {
			isMounted = false
		}
	}, [location, creatorId, userMessage])

	return (
		<div className='card'>
			<PostTop
				avatar={postCreator?.avatar}
				creatorId={creatorId}
				postId={postId}
				name={postCreator?.name}
				time={time}
				optionsClicked={optionsClicked}
				setOptionsClicked={setOptionsClicked}
				setEditClicked={setEditClicked}
			/>
			{img && <PostImg img={img} setOptionsClicked={setOptionsClicked} />}
			{editClicked ? (
				<EditPost caption={caption} postId={postId} setEditClicked={setEditClicked} />
			) : (
				<>
					{caption && <p className='caption'>{caption}</p>}
					<PostBottom
						likes={likes}
						comments={"29"}
						creatorId={creatorId}
						postId={postId}
					/>
				</>
			)}
		</div>
	)
}

export default Post
