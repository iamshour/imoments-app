import { FiUserPlus, FiUserCheck } from "react-icons/fi"
import { useState } from "react"

const FollowBtn = () => {
	const [followed, setFollowed] = useState(false)

	return (
		<button
			className={`btn-medium ${followed && "following-btn"}`}
			onClick={() => setFollowed(!followed)}
		>
			{!followed ? (
				<>
					<p>Follow</p>
					<FiUserPlus className='icon' />
				</>
			) : (
				<>
					<p>Following</p>
					<FiUserCheck className='icon' />
				</>
			)}
		</button>
	)
}

export default FollowBtn
