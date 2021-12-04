export const posts = (
	state = {
		timeline: null,
		userPosts: null,
		postMessage: null,
		postLoading: false,
	},
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
		case "NEW_POST_MESSAGE":
			return {
				...state,
				postMessage: payload,
			}
		case "START_POST_LOADING":
			return {
				...state,
				postLoading: true,
			}
		case "END_POST_LOADING":
			return {
				...state,
				postLoading: false,
			}
		case "CLEAR_ADD_POST":
			return {
				postMessage: null,
			}
		case "CLEAR_POSTS":
			return {
				userPosts: null,
				timeline: null,
				postMessage: null,
				postLoading: false,
			}

		default:
			return state
	}
}
