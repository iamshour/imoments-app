export const auth = (
	state = {
		authData: JSON.parse(localStorage.getItem("userId")) || null,
		notification: null,
	},
	{ type, payload }
) => {
	switch (type) {
		case "AUTH_SUCCESS":
			localStorage.setItem("userId", JSON.stringify({ ...payload }))
			return {
				...state,
				authData: payload,
			}

		case "SIGN_OUT":
			localStorage.removeItem("User")
			localStorage.removeItem("userId")
			// localStorage.clear()
			return {
				authData: null,
			}
		case "NOTIFICATION":
			return {
				...state,
				notification: payload,
			}

		default:
			return state
	}
}
