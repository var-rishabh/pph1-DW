import axios from 'axios';
import { toast } from 'react-toastify';

export const Login = (email, password) => async (dispatch) => {
    try {

        dispatch({ type: "LoginRequest" })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/login`, { email, password }, config);

        dispatch({
            type: "LoginSuccess",
            payload: data.user
        })
        localStorage.setItem('accessToken', JSON.stringify(data.accessToken))
        toast.success("Logged in successfully")
    } catch (error) {
        dispatch({
            type: "LoginFailure",
            payload: error.response.data.message
        })
        toast.error(error.response.data.message)
    }
}

export const LoadUser = () => async (dispatch) => {
    try {
        dispatch({ type: "LoadUserRequest" })
        
        const accessToken = JSON.parse(localStorage.getItem('accessToken'))
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        }
        const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/load`, config);
        dispatch({
            type: "LoadUserSuccess",
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: "LoadUserFailure",
            payload: error.response.data.message
        })
    }
}

export const Logout = () => async (dispatch) => {
    try {

        localStorage.removeItem('accessToken')
        dispatch({
            type: "Logout",
        })
        toast.success("Logged out successfully")
    } catch (error) {
        toast.error(error.response.data.message)
    }
}