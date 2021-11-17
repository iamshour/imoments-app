import axios from "axios"

const url = "http://localhost:5000"

// const API = axios.create("http://localhost:5000")

//AUTH
// export const signIn = () => axios.post(`${url}/posts`)

export const fetchPosts = () => axios.get(`${url}/posts`)
