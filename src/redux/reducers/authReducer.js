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
} from "../actions/actiontypes";

const initialState = {
    token: localStorage.getItem('token') || null,
    loggedInUser: {},
    signupLoading: false,
    signupSuccess: false,
    signupError: false,
    loginLoading: false,
    loginSuccess: false,
    loginError: false,
    signupErrorMessage: "",
    loginErrorMessage: "",
    getLoggedInUserLoading: false,
    getLoggedInUserSuccess: false,
    getLoggedInUserError: false,
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
             ...state,
                signupLoading: true,
                signupSuccess: false,
                signupError: false,
            }
        case SIGNUP_SUCCESS:
            return {
             ...state,
                signupLoading: false,
                signupSuccess: true,
                signupError: false,
            }
        case SIGNUP_FAILURE:
            return {
             ...state,
                signupLoading: false,
                signupSuccess: false,
                signupError: true,
            }
        case LOGIN_REQUEST:
            return {
             ...state,
                loginLoading: true,
                loginSuccess: false,
                loginError: false,
            }
        case LOGIN_SUCCESS:
            return {
             ...state,
                loginLoading: false,
                loginSuccess: true,
                loginError: false,
                token: action.payload.token,
            }
        case LOGIN_FAILURE:
            return {
           ...state,
                loginLoading: false,
                loginSuccess: false,
                loginError: true,
                loginErrorMessage: action.payload.error,
            }

        case GETLOGGEDINUSER_REQUEST:
            return {
             ...state,
                getLoggedInUserLoading: true,
                getLoggedInUserSuccess: false,
                getLoggedInUserError: false,
            }
        case GETLOGGEDINUSER_SUCCESS:
            return {
             ...state,
                getLoggedInUserLoading: false,
                getLoggedInUserSuccess: true,
                getLoggedInUserError: false,
                loggedInUser: action.payload.user,
            }
            
        case GETLOGGEDINUSER_FAILURE:
            return {
            ...state,
                getLoggedInUserLoading: false,
                getLoggedInUserSuccess: false,
                getLoggedInUserError: true,
            }
        default:
            return state
    }
}

export default authReducer;