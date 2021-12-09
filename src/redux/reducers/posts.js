export const posts = (
	state = {
		timeline: null,
		userPosts: null,
		bookmarkedPosts: null,
		postMessage: null,
		postLoading: false,
		commentMsg: false,
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
		case "GET_BOOKMARKED_POSTS":
			return {
				...state,
				bookmarkedPosts: payload,
			}
		case "NEW_POST_MESSAGE":
			return {
				...state,
				postMessage: payload,
			}
		case "COMMENT_MSG":
			return {
				...state,
				commentMsg: true,
			}
		case "CLEAR_COMMENT_MSG":
			return {
				...state,
				commentMsg: false,
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
				timeline: null,
				userPosts: null,
				bookmarkedPosts: null,
				postMessage: null,
				postLoading: false,
			}

		default:
			return state
	}
}
