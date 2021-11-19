export const titleFunc = (location, user) => {
	const title =
		location.pathname === "/search"
			? "Search for users"
			: location.pathname === "/notifications"
			? "Notifications"
			: location.pathname === "/addpost"
			? "Add a post"
			: location.pathname === "/profile"
			? "Profile"
			: location.pathname === `/profile/${user?.user?._id}`
			? "Profile"
			: location.pathname === "/changepass"
			? "Change your password"
			: location.pathname === "/bookmarks"
			? "Bookmarked Posts"
			: location.pathname === "/report"
			? "Report a problem"
			: location.pathname === "/report"
			? "Report a problem"
			: location.pathname === "/about"
			? "About imoments app"
			: null

	return title
}

export const backIcon = (location, user, Link, IoArrowBackOutline) => {
	const icon =
		location.pathname === "/profile" ||
		location.pathname === `/profile/${user?.user?._id}` ||
		location.pathname === "/changepass" ||
		location.pathname === "/bookmarks" ||
		location.pathname === "/report" ||
		location.pathname === "/about" ? (
			<Link to='/' className='go-back'>
				<IoArrowBackOutline className='icon' />
			</Link>
		) : null

	return icon
}

export const presets = {
	avatar: "https://www.w3schools.com/howto/img_avatar.png",
}
