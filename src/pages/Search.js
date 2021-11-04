import SearchBar from "components/search/SearchBar"
import UserCard from "components/search/UserCard"
import { useState } from "react"

const Search = () => {
	const [input, setInput] = useState("")

	return (
		<div className='search-page'>
			<SearchBar input={input} setInput={setInput} />
			<div className='results'>
				<UserCard
					avatar='https://www.w3schools.com/howto/img_avatar.png'
					name='Samuel Brad'
					nb='18'
				/>
				<UserCard
					avatar='https://www.w3schools.com/howto/img_avatar.png'
					name='Samuel Brad'
					nb='18'
				/>
			</div>
		</div>
	)
}

export default Search
