export const utility = (
	state = { notification: null, loading: false, modalStatus: false },
	action
) => {
	switch (action.type) {
		case "SET_MODAL":
			return {
				...state,
				modalStatus: action.payload,
			}
		case "NOTIFICATION":
			return {
				...state,
				notification: action.payload,
			}
		case "LOADING_START":
			return {
				...state,
				loading: true,
			}
		case "LOADING_FINISH":
			return {
				...state,
				loading: false,
			}

		default:
			return state
	}
}
