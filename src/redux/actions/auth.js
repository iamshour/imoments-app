import * as api from "api/index"

export const signUp = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.signUp(formData)

		dispatch({
			type: "AUTH_SUCCESS",
			payload: data,
		})

		history.push("/")
	} catch (error) {
		dispatch({
			type: "NOTIFICATION",
			payload: error,
		})
	}
}

export const signIn = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.signIn(formData)

		dispatch({
			type: "AUTH_SUCCESS",
			payload: data,
		})

		history.push("/")
	} catch (error) {
		dispatch({
			type: "NOTIFICATION",
			payload: error,
		})
	}
}

export const googleAuth = (googleData, history) => async (dispatch) => {
	try {
		const { data } = await api.googleApi(googleData)

		dispatch({
			type: "AUTH_SUCCESS",
			payload: data,
		})

		history.push("/")
	} catch (error) {
		dispatch({
			type: "NOTIFICATION",
			payload: error,
		})
	}
}

export const signOut = (history) => (dispatch) => {
	try {
		dispatch({
			type: "SIGN_OUT",
		})
		dispatch({
			type: "RESET_APP",
		})

		history.push("/auth")
	} catch (error) {
		dispatch({
			type: "NOTIFICATION",
			payload: error,
		})
	}
}
