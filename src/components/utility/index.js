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

export const myData = [
	{
		title: "What is this app about?",
		details:
			"imoments is all about sharing your favorite moments, stories, quotes, jokes, or anything on your mind to your followers to see and interact with.",
	},
	{
		title: "Features",
		details: `First of all, Users are able to register using their Google account or through
		their email. If a user forgets his/her account's password, it could be easily
		but securely recovered through an email sent to his/her account.
		${(<br />)}
		Aside from ability to share images or text posts, users can also like or
		comment on other users' posts, save posts into Bookmarks, delete an old post,
		and even update their own profile such as changing the avatar, bio, name, or
		the password. In addition to following other users and checking out their
		posts on the timeline!`,
	},
	{
		title: "About me",
		details:
			"My name is Ali Shour, a web developer with UI desgin experience as well, currently working as a freelnacer. My focus is to help small businesses and start ups in enhancing their online presence with modern animated websites, landing pages, or bigger projects such e-commerce wqebapps. Read more about me and check out my latest projects by visiting my website below, or reach me out on my social media!",
	},
]

export const nameInputs = [
	{
		name: "firstName",
		placeholder: "First name",
	},
	{
		name: "lastName",
		placeholder: "Last name",
	},
]
