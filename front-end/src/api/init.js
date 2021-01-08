import axios from 'axios';
import { rememberToken, getValidToken } from './token';

const baseURL = process.env.REACT_APP_API_URL

// Create an axios instance
const api = axios.create({
    baseURL
})

export function setToken(token) {
    //saves token to local storage
    rememberToken(token)
    if (token) {
        // Setting the Authorisation header for all future GET requests
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    else {
        delete api.defaults.headers.common['Authorization']
    }
}

setToken(getValidToken())

export default api;