import * as api from "api/index"

export const ImgUpload = (imgData) => async (dispatch) => {
	try {
		dispatch({
			type: "LOADING_START",
		})
		const { data } = await api.uploadImg(imgData)
		dispatch({
			type: "CREATE_POST",
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: "NOTIFICATION",
			payload: error.response.data.message,
		})
	}
}
export const CapUpload = (capData) => async (dispatch) => {
	try {
		dispatch({
			type: "LOADING_START",
		})
		const { data } = await api.uploadCaption(capData)
		dispatch({
			type: "CREATE_POST",
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: "NOTIFICATION",
			payload: error.response.data.message,
		})
	}
}

export const getTimeline = (userId) => async (dispatch) => {
	try {
		const { data } = await api.getPosts(userId)
		dispatch({
			type: "GET_TIMELINE_POSTS",
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: "NOTIFICATION",
			payload: error.response.data.message,
		})
	}
}

export const getUserPosts = (userId) => async (dispatch) => {
	try {
		const { data } = await api.getUserPosts(userId)
		dispatch({
			type: "GET_USER_POSTS",
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: "NOTIFICATION",
			payload: error.response.data.message,
		})
	}
}
