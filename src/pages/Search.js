import ResultCard from "components/search/ResultCard"
import { useState } from "react"
import { BsSearch } from "react-icons/bs"

const Search = () => {
	const [input, setInput] = useState("")

	const exampleUsers = [
		{
			avatar: "https://www.w3schools.com/howto/img_avatar.png",
			name: "Samuel Brad",
			username: "aliopwer",
			id: "998",
		},
		{
			avatar: "https://www.w3schools.com/howto/img_avatar.png",
			name: "Jack Bross",
			username: "jackbross12",
			id: "95",
		},
	]

	return (
		<div className='search-page'>
			<div className='input-bar-icon search-bar'>
				<BsSearch className='icon' />
				<input
					type='text'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder='search for users'
				/>
			</div>
			{exampleUsers.length > 0 && (
				<div className='results'>
					{exampleUsers.map((user) => (
						<ResultCard
							key={user.id}
							id={user.id}
							name={user.name}
							username={user.username}
							avatar={user.avatar}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default Search
