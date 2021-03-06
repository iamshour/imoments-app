import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { searchUser } from "redux/actions/user"
//comps
import Loading from "components/fragments/Loading"
import SearchResult from "components/searchResult"
//icons
import { BsEmojiFrown, BsSearch } from "react-icons/bs"
import { RiSendPlane2Fill } from "react-icons/ri"

const Search = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const [input, setInput] = useState("")
	const [showBtn, setShowBtn] = useState(false)
	const { results, error } = useSelector((state) => state.user)
	const { loading } = useSelector((state) => state.user)

	const submitSearch = (e) => {
		e.preventDefault()
		dispatch(searchUser(input))
		setInput("")
	}

	useEffect(() => {
		return () => {
			setInput("")
			dispatch({
				type: "CLEAR_USER_TAB",
			})
		}
	}, [location, dispatch])

	return (
		<div className='search-page'>
			<form className='input-bar-icon search-bar' onSubmit={submitSearch}>
				<BsSearch className='icon' />
				<input
					type='text'
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder='search for users'
					onFocus={() => setShowBtn(true)}
					onBlur={() =>
						setTimeout(() => {
							setShowBtn(!showBtn)
						}, 1000)
					}
				/>
				{showBtn && (
					<button>
						<RiSendPlane2Fill type='submit' className='icon' />
					</button>
				)}
			</form>

			{loading ? (
				<div>
					<Loading />
				</div>
			) : !error && results?.length > 0 && results !== null ? (
				<div className='results'>
					{results?.map((user) => (
						<SearchResult
							key={user?._id}
							userId={user?._id}
							name={user?.name}
							avatar={user?.avatar}
						/>
					))}
				</div>
			) : error ? (
				<div className='empty-wrapper'>
					<BsEmojiFrown className='icon' />
					<h1>{error}</h1>
				</div>
			) : null}
		</div>
	)
}

export default Search
