import SearchBar from "components/search/SearchBar"
import { useState } from "react"

const Search = () => {
	const [input, setInput] = useState("")

	return (
		<div className='search-page'>
			<SearchBar input={input} setInput={setInput} />
		</div>
	)
}

export default Search
