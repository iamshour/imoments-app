export const posts = (
	state = { success: null, timeline: null, loading: false },
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

		case "CREATE_POST":
			return {
				...state,
				success: payload,
				loading: false,
			}

		case "CLEAR_ADD_POST":
			return {
				success: null,
				loading: false,
			}

		default:
			return state
	}
}
