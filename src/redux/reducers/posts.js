export const posts = (
	state = { success: null, timeline: null, userPosts: null, loading: false },
	{ type, payload }
) => {
	switch (type) {
		case "LOADING_START":
			return {
				...state,
				loading: true,
			}
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

		case "CREATE_POST":
			return {
				...state,
				success: payload,
				loading: false,
			}

		case "DELETE_POST":
			return {
				...state,
				success: payload,
				loading: false,
			}

		case "CLEAR_POSTS":
			return {
				posts: null,
				success: null,
				loading: false,
			}

		default:
			return state
	}
}
