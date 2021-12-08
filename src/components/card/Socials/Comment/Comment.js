import { Link } from "react-router-dom"
import Moment from "react-moment"
import { useEffect } from "react"
import { getUser } from "api"
import { useDispatch } from "react-redux"
import { useState } from "react"

const Comment = ({ content, time, commentorId }) => {
	const dispatch = useDispatch()
	const [user, setUser] = useState(null)

	useEffect(() => {
		const getCommentor = async () => {
			try {
				const { data } = await getUser(commentorId)
				setUser(data)
			} catch (error) {
				dispatch({
					type: "ERROR",
					payload: error.response.data.message,
				})
			}
		}
		getCommentor()
	}, [commentorId, content])

	return (
		<div className='comment'>
			<div className='left'>
				<Link to={`/profile/${commentorId}`}>
					<img src={user?.avatar} alt={user?.name} />
				</Link>
			</div>
			<div className='right'>
				<div className='top'>
					<Link to={`/profile/${commentorId}`}>
						<h1>{user?.name}</h1>
					</Link>
					<h2>
						<Moment fromNow>{time}</Moment>
					</h2>
				</div>
				<div className='details'>
					<p>{content}</p>
				</div>
			</div>
		</div>
	)
}

export default Comment
