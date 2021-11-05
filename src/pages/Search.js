import SearchBar from "components/search/SearchBar"
import ResultCard from "components/search/ResultCard"
import { useState } from "react"

const Search = () => {
	const [input, setInput] = useState("")

	return (
		<div className='search-page'>
			<SearchBar input={input} setInput={setInput} />
			<div className='results'>
				<ResultCard
					avatar='https://www.w3schools.com/howto/img_avatar.png'
					name='Samuel Brad'
					nb='18'
					id='998'
				/>
			</div>
		</div>
	)
}

export default Search
