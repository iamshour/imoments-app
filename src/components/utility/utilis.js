export const titleFunc = (location, currentUser, user) => {
	const title =
		location.pathname === "/search"
			? "Search for users"
			: location.pathname === "/notifications"
			? "Notifications"
			: location.pathname === "/addpost"
			? "Add a post"
			: location.pathname === `/profile/${currentUser?._id}`
			? "My profile"
			: location.pathname === `/profile/${user?._id}`
			? `${
					user?.name?.split(" ")[0]?.charAt(0)?.toUpperCase() +
					user?.name?.split(" ")[0]?.slice(1)
			  }'s profile`
			: location.pathname === "/settings"
			? "Account Settings"
			: location.pathname === "/bookmarks"
			? "Bookmarked Posts"
			: location.pathname === "/report"
			? "Report a problem"
			: location.pathname === "/about"
			? "About imoments app"
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
		location.pathname === `/profile/${currentUser?._id}` ||
		location.pathname === `/profile/${user?._id}` ||
		location.pathname === "/settings" ||
		location.pathname === "/bookmarks" ||
		location.pathname === "/report" ||
		location.pathname === "/about" ? (
			<button onClick={() => history.goBack()} className='go-back'>
				<IoArrowBackOutline className='icon' />
			</button>
		) : null

	return icon
}

export const presets = {
	avatar: "https://www.w3schools.com/howto/img_avatar.png",
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
