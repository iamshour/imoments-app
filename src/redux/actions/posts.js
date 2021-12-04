import * as api from "api/index"

export const ImgUpload = (imgData) => async (dispatch) => {
	try {
		dispatch({
			type: "START_POST_LOADING",
		})
		const { data } = await api.uploadImg(imgData)
		dispatch({
			type: "NEW_POST_MESSAGE",
			payload: data,
		})
		dispatch({
			type: "END_POST_LOADING",
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
			type: "START_POST_LOADING",
		})
		const { data } = await api.uploadCaption(capData)
		dispatch({
			type: "NEW_POST_MESSAGE",
			payload: data,
		})
		dispatch({
			type: "END_POST_LOADING",
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}

export const getTimeline = (userId, cancelToken) => async (dispatch) => {
	try {
		dispatch({
			type: "START_POST_LOADING",
		})
		const { data } = await api.getPosts(userId, cancelToken)
		dispatch({
			type: "GET_TIMELINE_POSTS",
			payload: data,
		})
		dispatch({
			type: "END_POST_LOADING",
		})
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}

export const getProfilePosts = (userId, cancelToken) => async (dispatch) => {
	try {
		dispatch({
			type: "START_POST_LOADING",
		})
		const { data } = await api.getProfilePosts(userId, cancelToken)
		dispatch({
			type: "GET_USER_POSTS",
			payload: data,
		})
		dispatch({
			type: "END_POST_LOADING",
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
			type: "START_POST_LOADING",
		})
		const { data } = await api.deletePost(postId)
		dispatch({
			type: "NEW_POST_MESSAGE",
			payload: data,
		})
		dispatch({
			type: "END_POST_LOADING",
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
			type: "START_POST_LOADING",
		})
		const { data } = await api.updatePost(postId, postData)
		dispatch({
			type: "NEW_POST_MESSAGE",
			payload: data,
		})
		dispatch({
			type: "END_POST_LOADING",
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
	} catch (error) {
		dispatch({
			type: "ERROR",
			payload: error.response.data.message,
		})
	}
}
