import * as api from "api/index"
import axios from "axios"

export const signUp = (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.signUp(formData)

		dispatch({
			type: "AUTH_SUCCESS",
			payload: data,
		})

		history.push("/")
	} catch (err) {
		dispatch({
			type: "AUTH_FAIL",
			payload: err,
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
	} catch (err) {
		dispatch({
			type: "AUTH_FAIL",
			payload: err,
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
	} catch (err) {
		dispatch({
			type: "AUTH_FAILED",
			payload: err,
		})
	}
}
