import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchUser } from "redux/actions/user"
//comps
import { presets } from "components/utility/utilis"
import ResultCard from "components/search/ResultCard"
//icons
import { BsSearch } from "react-icons/bs"
import { RiSendPlane2Fill } from "react-icons/ri"
import { useEffect } from "react"
import { useLocation } from "react-router"
import Loading from "components/utility/Loading"

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
					{results.map((user) => (
						<ResultCard
							key={user?._id}
							id={user?._id}
							name={user?.name}
							avatar={user?.avatar ? user?.avatar : presets.avatar}
						/>
					))}
				</div>
			) : error ? (
				<div className='no-results'>
					<p>{error}</p>
				</div>
			) : null}
		</div>
	)
}

export default Search
