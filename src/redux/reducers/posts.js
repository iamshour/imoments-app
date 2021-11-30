export const posts = (
	state = { timeline: null, userPosts: null },
	{ type, payload }
) => {
	switch (type) {
		case "GET_TIMELINE_POSTS":
			return {
				...state,
				timeline: payload,
			}

		case "GET_USER_POSTS":
			return {
				...state,
				userPosts: payload,
			}

		case "CLEAR_POSTS":
			return {
				userPosts: null,
				timeline: null,
			}

		default:
			return state
	}
}
