import { FiUserCheck, FiUsers } from "react-icons/fi"

const UserCard = ({ name, avatar }) => {
	return (
		<div className='user-card'>
			<div className='left'>
				<img src={avatar} alt={name} />
				<h1>{name}</h1>
				<h2>@iamshour</h2>
			</div>
			<div className='right'>
				<div className='top-btns'>
					<button>
						<FiUserCheck className='icon' />
						<p>192 followings</p>
					</button>
					<button>
						<FiUsers className='icon' />
						<p>234 followers</p>
					</button>
				</div>
				<div className='bio-content'>
					<p>
						Apart from counting words and characters, our online editor can help
						you to improve word choice and writing style, and, optionally, help
						you to deteca
					</p>
				</div>
				<button className='btn-medium'>
					<p>Edit Profile</p>
				</button>
			</div>
		</div>
	)
}

export default UserCard
