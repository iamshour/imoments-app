import { BsSearch } from "react-icons/bs"

const SearchBar = ({ input, setInput }) => {
	return (
		<div className='input-bar-icon'>
			<BsSearch className='icon' />
			<input
				type='text'
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder='search for users'
			/>
		</div>
	)
}

export default SearchBar
