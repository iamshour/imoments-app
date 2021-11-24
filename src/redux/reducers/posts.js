export const posts = (
	state = { success: null, posts: null, timeline: null },
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
				posts: payload,
			}

		case "CREATE_POST":
			return {
				...state,
				success: payload,
			}

		default:
			return state
	}
}
