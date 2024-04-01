import {
    CHECKEMAIL_REQUEST,
    CHECKEMAIL_SUCCESS,
    CHECKEMAIL_FAILURE,
    CHECKUSERNAME_REQUEST,
    CHECKUSERNAME_SUCCESS,
    CHECKUSERNAME_FAILURE,
    CHECKPASSWORD_REQUEST,
    CHECKPASSWORD_SUCCESS,
    CHECKPASSWORD_FAILURE,
    CHECKDOB_REQUEST,
    CHECKDOB_SUCCESS,
    CHECKDOB_FAILURE,
    GENERATEOTP_REQUEST,
    GENERATEOTP_SUCCESS,
    GENERATEOTP_FAILURE,
    CHECKOTP_REQUEST,
    CHECKOTP_SUCCESS,
    CHECKOTP_FAILURE,
    VERIFYOTP_REQUEST,
    VERIFYOTP_SUCCESS,
    VERIFYOTP_FAILURE
} from "./actiontypes"

import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL

export const checkEmailRequest = () => {
    return {
        type: CHECKEMAIL_REQUEST
    }
}

export const checkEmailSuccess = (success) => {
    return {
        type: CHECKEMAIL_SUCCESS,
        payload: {success}
    }
}

export const checkEmailFailure = (error) => {
    return {
        type: CHECKEMAIL_FAILURE,
        payload: {error}
    }
}

export const checkUsernameRequest = () => {
    return {
        type: CHECKUSERNAME_REQUEST
    }
}

export const checkUsernameSuccess = (success) => {
    return {
        type: CHECKUSERNAME_SUCCESS,
        payload: {success}
    }
}

export const checkUsernameFailure = (error) => {
    return {
        type: CHECKUSERNAME_FAILURE,
        payload: {error}
    }
}

export const checkPasswordRequest = () => {
    return {
        type: CHECKPASSWORD_REQUEST
    }
}

export const checkPasswordSuccess = (success) => {
    return {
        type: CHECKPASSWORD_SUCCESS,
        payload: {success}
    }
}

export const checkPasswordFailure = (error) => {
    return {
        type: CHECKPASSWORD_FAILURE,
        payload: {error}
    }
}

export const checkDobRequest = () => {
    return {
        type: CHECKDOB_REQUEST
    }
}

export const checkDobSuccess = (success,age) => {
    return {
        type: CHECKDOB_SUCCESS,
        payload: {success,age}
    }
}

export const checkDobFailure = (error) => {
    return {
        type: CHECKDOB_FAILURE,
        payload: {error}
    }
}

export const generateOTPRequest = () => {
    return {
        type: GENERATEOTP_REQUEST
    }
}

export const generateOTPSuccess = (success) => {
    return {
        type: GENERATEOTP_SUCCESS,
        payload: {success}
    }
}

export const generateOTPFailure = (error) => {
    return {
        type: GENERATEOTP_FAILURE,
        payload: {error}
    }
}

export const checkOTPRequest = () => {
    return {
        type: CHECKOTP_REQUEST
    }
}

export const checkOTPSuccess = (success) => {
    return {
        type: CHECKOTP_SUCCESS,
        payload: {success}
    }
}

export const checkOTPFailure = (error) => {
    return {
        type: CHECKOTP_FAILURE,
        payload: {error}
    }
}

export const verifyOTPRequest = () => {
    return {
        type: VERIFYOTP_REQUEST
    }
}

export const verifyOTPSuccess = (success) => {
    return {
        type: VERIFYOTP_SUCCESS,
        payload: {success}
    }
}

export const verifyOTPFailure = (error) => {
    return {
        type: VERIFYOTP_FAILURE,
        payload: {error}
    }
}


//------------------------------------------------------------------------------------------------

export const checkEmail = (myEmail) => {
    return async (dispatch) => {
        dispatch(checkEmailRequest())

        try{
            const response = await axios.post(`${API_URL}/user/checkemail`, {email: myEmail})

            if(response.status === 200){
                dispatch(checkEmailSuccess(true))
            }
            else{
                dispatch(checkEmailSuccess(false))
            }
        }
        catch(err){
            dispatch(checkEmailFailure(true))
        }
    }
}


export const checkUsername = (myUsername) => {
    return async (dispatch) => {
        dispatch(checkUsernameRequest())
        
        try{
            const response = await axios.post(`${API_URL}/user/check-username`, {username: myUsername})       

            if(response.status === 200){
                dispatch(checkUsernameSuccess(true))
            }
            else{
                dispatch(checkUsernameSuccess(false))
            }
        }
        catch(err){
            dispatch(checkUsernameFailure(true))
        }    
    }
}

export const checkPassword = (myPassword) => {
    return async (dispatch) => {
        dispatch(checkPasswordRequest())
        
        try{
            const response = await axios.post(`${API_URL}/user/checkpassword`, {password: myPassword})

            if(response.status === 200){
                dispatch(checkPasswordSuccess(true))
            }
            else{
                dispatch(checkPasswordSuccess(false))
            }
        }
        catch(err){
            dispatch(checkPasswordFailure(true))
        }    
    }
}

export const checkDob = (myDob) => {
    return async (dispatch) => {
        dispatch(checkDobRequest())
        
        try{
            const response = await axios.post(`${API_URL}/user/checkdob`, {dob: myDob})

            if(response.status === 200){
                dispatch(checkDobSuccess(true, response.data.data.age))
            }
        }
        catch(err){
            dispatch(checkDobFailure(true))
        }    
    }
}

export const generateOtp = (myEmail) => {
    return async (dispatch) => {
        dispatch(generateOTPRequest())
        
        try{
            const response = await axios.post(`${API_URL}/user/generateotp`, {email: myEmail})
            
            if(response.status === 200){
                dispatch(generateOTPSuccess(true))
            }
        }
        catch(err){
            dispatch(generateOTPFailure(true))
        }
    }
}

export const checkOtp = (myOtp, myEmail) => {
    return async (dispatch) => {
        dispatch(checkOTPRequest())
        
        try{
            const response = await axios.post(`${API_URL}/user/checkotp`, {otp: myOtp, email: myEmail})
            
            if(response.status === 200){
                dispatch(checkOTPSuccess(true))
            }
        }
        catch(err){
            dispatch(checkOTPFailure(true))
        }
    }
}


export const verifyOtp = (myOtp, myEmail) => {
    return async (dispatch) => {
        dispatch(verifyOTPRequest())
        
        try{
            const response = await axios.post(`${API_URL}/user/verifyotp`, {otp: myOtp, email: myEmail})
            
            if(response.status === 200){
                dispatch(verifyOTPSuccess(true))
            }
        }
        catch(err){
            dispatch(verifyOTPFailure(true))
        }
    }
}

