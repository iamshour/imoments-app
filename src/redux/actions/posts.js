import * as api from "api/index"

export const ImgUpload = (imgData) => async (dispatch) => {
	try {
		dispatch({
			type: "LOADING_START",
		})
		const { data } = await api.uploadImg(imgData)
		dispatch({
			type: "NEW_MESSAGE",
			payload: data,
		})
		dispatch({
			type: "LOADING_END",
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
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
			type: "NEW_MESSAGE",
			payload: data,
		})
		dispatch({
			type: "LOADING_END",
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
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
			type: "ERROR",
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
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}

export const deletePost = (postId) => async (dispatch) => {
	try {
		dispatch({
			type: "LOADING_START",
		})
		const { data } = await api.deletePost(postId)
		dispatch({
			type: "NEW_MESSAGE",
			payload: data,
		})
		dispatch({
			type: "LOADING_END",
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}
