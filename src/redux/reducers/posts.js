export const posts = (
	state = { success: null, posts: null, timeline: null },
	action
) => {
	switch (action.type) {
		case "GET_TIMELINE_POSTS":
			return {
				...state,
				timeline: action.payload,
			}

		case "GET_USER_POSTS":
			return {
				...state,
				posts: action.payload,
			}

		case "CREATE_POST":
			return {
				...state,
				success: action.payload,
			}

		default:
			return state
	}
}
