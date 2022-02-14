export const titleFunc = (location, currentUser, user) => {
	const title = location.pathname.startsWith("/search")
		? "Search for users"
		: location.pathname.startsWith("/notifications")
		? "Notifications"
		: location.pathname.startsWith("/addpost")
		? "Add a post"
		: location.pathname.startsWith(`/profile/${currentUser?._id}`)
		? "My profile"
		: location.pathname.startsWith(`/profile/${user?._id}`)
		? `${
				user?.name?.split(" ")[0]?.charAt(0)?.toUpperCase() +
				user?.name?.split(" ")[0]?.slice(1)
		  }'s profile`
		: location.pathname.startsWith("/settings")
		? "Account Settings"
		: location.pathname.startsWith("/bookmarks")
		? "Bookmarked Posts"
		: location.pathname.startsWith("/report")
		? "Report a problem"
		: location.pathname.startsWith("/about")
		? "About app"
		: location.pathname.startsWith("/forgotpassword")
		? "Forgot password"
		: location.pathname.startsWith("/reset")
		? "Reset password"
		: location.pathname.startsWith("/privacy")
		? "Privacy policy"
		: location.pathname.startsWith("/terms")
		? "Terms & conditions"
		: null

	return title
}
export const backIcon = (location, currentUser, user, history, IoArrowBackOutline) => {
	const icon =
		location.pathname.startsWith(`/profile/${currentUser?._id}`) ||
		location.pathname.startsWith(`/profile/${user?._id}`) ||
		location.pathname.startsWith("/settings") ||
		location.pathname.startsWith("/bookmarks") ||
		location.pathname.startsWith("/report") ||
		location.pathname.startsWith("/forgotpassword") ||
		location.pathname.startsWith("/privacy") ||
		location.pathname.startsWith("/terms") ||
		location.pathname.startsWith("/about") ? (
			<button onClick={() => history.goBack()} className='go-back'>
				<IoArrowBackOutline className='icon' />
			</button>
		) : null

	return icon
}

export const closeModalBtn = () => {
	document.querySelector("html").style.overflowY = "unset"
}

export const makeUppercase = (word, index) => {
	return (
		word?.split(" ")[index]?.charAt(0)?.toUpperCase() + word?.split(" ")[index]?.slice(1)
	)
}