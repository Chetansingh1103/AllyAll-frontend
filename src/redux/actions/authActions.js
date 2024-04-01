import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GETLOGGEDINUSER_REQUEST,
    GETLOGGEDINUSER_SUCCESS,
    GETLOGGEDINUSER_FAILURE,
} from "./actiontypes";

import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL

export const signupRequest = () => {
    return {
        type: SIGNUP_REQUEST
    }
}

export const signupSuccess = (success) => {
    return {
        type: SIGNUP_SUCCESS,
        payload: {success}
    }
}

export const signupFailure = (error) => {
    return {
        type: SIGNUP_FAILURE,
        payload: {error}
    }
}

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}

export const loginSuccess = (success,token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {success,token}
    }
}

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: {error}
    }
}

export const getLoggedInUserRequest = () => {
    return {
        type: GETLOGGEDINUSER_REQUEST
    }
}

export const getLoggedInUserSuccess = (success,user) => {
    return {
        type: GETLOGGEDINUSER_SUCCESS,
        payload: {success,user}
    }
}

export const getLoggedInUserFailure = (error) => {
    return {
        type: GETLOGGEDINUSER_FAILURE,
        payload: {error}
    }
}

//--------------------------------------------------------------------------------------------------------


export const signup = (userData) => {
    return async (dispatch) => {
        dispatch(signupRequest())
        
        try{
            const response = await axios.post(`${API_URL}/user/signup`, userData)
            
            if(response.status === 200){
                dispatch(signupSuccess(true))
            }
        }
        catch(err){
            dispatch(signupFailure(true))
        }
     
    }
}

export const login = (userData) => {
    return async (dispatch) => {
        dispatch(loginRequest())
        
        try{
            const response = await axios.post(`${API_URL}/user/login`, userData)
            
            if(response.data.status === 200){
                dispatch(loginSuccess(true, response.data.data.token))
                localStorage.setItem('token', response.data.data.token)
            }
        }
        catch(err){
            await dispatch(loginFailure(err.response.data.message))
            await setTimeout(() => dispatch(loginFailure("")), 3000)
        }
     
    }
}

export const getLoggedInUser = (token) => {
    return async (dispatch) => {
        dispatch(getLoggedInUserRequest())

        
        
        try{
            const response = await axios.get(`${API_URL}/user/get-logged-in-user`, {
                headers: {
                    "xs-my-app": token
                }
            })
            
            if(response.data.status === 200){
                dispatch(getLoggedInUserSuccess(true,response.data.data))
            }
        }
        catch(err){
            dispatch(getLoggedInUserFailure(true))
        }
     
    }
}