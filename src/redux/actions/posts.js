import * as api from "api/index"

export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts()

		dispatch({
			type: "GET_POSTS",
			payload: data,
		})
	} catch (err) {
		console.log(err.msg)
	}
}
