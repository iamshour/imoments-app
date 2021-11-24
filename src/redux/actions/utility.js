export const setModalStatus = (data) => (dispatch) => {
	dispatch({
		type: "SET_MODAL",
		payload: data,
	})
}
