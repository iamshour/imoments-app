import axios from "axios"
import { GET_USER } from "../types/userTypes"

const getUser = async (dispatch) => {
	dispatch({
		type: GET_USER,
		payload: data,
	})
}
