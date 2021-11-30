export const titleFunc = (
	location,
	currentUser,
	otherUserId,
	otherUserName
) => {
	const title =
		location.pathname === "/search"
			? "Search for users"
			: location.pathname === "/notifications"
			? "Notifications"
			: location.pathname === "/addpost"
			? "Add a post"
			: location.pathname === "/profile"
			? "Profile"
			: location.pathname === `/profile/${currentUser?._id}`
			? "My profile"
			: location.pathname === `/profile/${otherUserId}`
			? `${
					otherUserName?.split(" ")[0]?.charAt(0)?.toUpperCase() +
					otherUserName?.split(" ")[0]?.slice(1)
			  }'s profile`
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
export const backIcon = (
	location,
	currentUser,
	otherUserId,
	history,
	IoArrowBackOutline
) => {
	const icon =
		location.pathname === "/profile" ||
		location.pathname === `/profile/${currentUser?._id}` ||
		location.pathname === `/profile/${otherUserId}` ||
		location.pathname === "/changepass" ||
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
