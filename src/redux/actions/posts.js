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

export const getProfilePosts = (userId) => async (dispatch) => {
	try {
		const { data } = await api.getProfilePosts(userId)
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

export const updatePost = (postId, postData) => async (dispatch) => {
	try {
		dispatch({
			type: "LOADING_START",
		})
		const { data } = await api.updatePost(postId, postData)
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

export const likePost = (postId, userId) => async (dispatch) => {
	try {
		await api.likePost(postId, userId)
		// const { data } = await api.likePost(postId, userId)
		// dispatch({
		// 	type: "NEW_MESSAGE",
		// 	payload: data,
		// })
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}
