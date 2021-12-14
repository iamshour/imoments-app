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
		? "About imoments app"
		: location.pathname.startsWith("/forgotpassword")
		? "Forgot password"
		: location.pathname.startsWith("/reset")
		? "Reset password"
		: null

	return title
}
export const backIcon = (
	location,
	currentUser,
	user,
	history,
	IoArrowBackOutline
) => {
	const icon =
		location.pathname.startsWith(`/profile/${currentUser?._id}`) ||
		location.pathname.startsWith(`/profile/${user?._id}`) ||
		location.pathname.startsWith("/settings") ||
		location.pathname.startsWith("/bookmarks") ||
		location.pathname.startsWith("/report") ||
		location.pathname.startsWith("/forgotpassword") ||
		location.pathname.startsWith("/about") ? (
			<button onClick={() => history.goBack()} className='go-back'>
				<IoArrowBackOutline className='icon' />
			</button>
		) : null

	return icon
}

export const openModal = (location) => {
	document.querySelector("html").style.overflowY = "hidden"
	document.querySelector("header").style.display = "none"
	location.pathname === ("/" || "/search" || "/addPost" || "/notifications") &&
		(document.querySelector("nav").style.display = "none")
}

export const closeModalBtn = (location) => {
	document.querySelector("html").style.overflowY = "unset"
	document.querySelector("header").style.display = "unset"

	location.pathname === ("/" || "/search" || "/addPost" || "/notifications") &&
		(document.querySelector("nav").style.display = "unset")
}

export const makeUppercase = (word, index) => {
	return (
		word?.split(" ")[index]?.charAt(0)?.toUpperCase() +
		word?.split(" ")[index]?.slice(1)
	)
}
