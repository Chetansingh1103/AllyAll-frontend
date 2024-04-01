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
} from "../actions/actiontypes";

const initialState = {
    username: '',
    email: '',
    password: '',
    dob: '',
    age: '',
    otp: '',
    usernameLoading: false,
    usernameSuccess: false,
    usernameError: false,
    emailLoading: false,
    emailSuccess: false,
    emailError: false,
    passwordLoading: false,
    passwordSuccess: false,
    passwordError: false,
    dobLoading: false,
    dobSuccess: false,
    dobError: false,
    generateOtpLoading: false,
    generateOtpSuccess: false,
    generateOtpError: false,
    checkOtpLoading: false,
    checkOtpSuccess: false,
    checkOtpError: false,
    verifyOtpLoading: false,
    verifyOtpSuccess: false,
    verifyOtpError: false
}

const checkReducer = (state=initialState, action) => {
    switch(action.type){
        case CHECKUSERNAME_REQUEST:
            return {
             ...state,
                usernameLoading: true,
                usernameSuccess: false,
                usernameError: false,
            }
        case CHECKUSERNAME_SUCCESS:
            return {
             ...state,
                usernameLoading: false,
                usernameSuccess: true,
                usernameError: false,
            }
        case CHECKUSERNAME_FAILURE:
            return {
             ...state,
                usernameLoading: false,
                usernameSuccess: false,
                usernameError: true,
            }
        case CHECKEMAIL_REQUEST:
            return {
             ...state,
                emailLoading: true,
                emailSuccess: false,
                emailError: false,
            }
        case CHECKEMAIL_SUCCESS:
            return {
             ...state,
                emailLoading: false,
                emailSuccess: true,
                emailError: false,
            }
        case CHECKEMAIL_FAILURE:
            return {
             ...state,
                emailLoading: false,
                emailSuccess: false,
                emailError: true,
            }
        case CHECKPASSWORD_REQUEST:
            return {
             ...state,
                passwordLoading: true,
                passwordSuccess: false,
                passwordError: false,
            }
        case CHECKPASSWORD_SUCCESS:
            return {
             ...state,
                passwordLoading: false,
                passwordSuccess: true,
                passwordError: false,
            }
        case CHECKPASSWORD_FAILURE:
            return {
             ...state,
                passwordLoading: false,
                passwordSuccess: false,
                passwordError: true,
            }
        case CHECKDOB_REQUEST:
            return {
             ...state,
                dobLoading: true,
                dobSuccess: false,
                dobError: false,
            }
        case CHECKDOB_SUCCESS:
            return {
             ...state,
                dobLoading: false,
                dobSuccess: true,
                dobError: false,
                age: action.payload.age
            }
        case CHECKDOB_FAILURE:
            return {
             ...state,
                dobLoading: false,
                dobSuccess: false,
                dobError: true,
            }
        case GENERATEOTP_REQUEST:
            return {
             ...state,
                generateOtpLoading: true,
                generateOtpSuccess: false,
                generateOtpError: false,
            }
        case GENERATEOTP_SUCCESS:
            return {
             ...state,
                generateOtpLoading: false,
                generateOtpSuccess: true,
                generateOtpError: false,
            }
        case GENERATEOTP_FAILURE:
            return {
             ...state,
                generateOtpLoading: false,
                generateOtpSuccess: false,
                generateOtpError: true,
            }
            
        case CHECKOTP_REQUEST:
            return {
             ...state,
                checkOtpLoading: true,
                checkOtpSuccess: false,
                checkOtpError: false,
            }
        case CHECKOTP_SUCCESS:
            return {
             ...state,
                checkOtpLoading: false,
                checkOtpSuccess: true,
                checkOtpError: false,
            }
        case CHECKOTP_FAILURE:
            return {
             ...state,
                checkOtpLoading: false,
                checkOtpSuccess: false,
                checkOtpError: true,
            }
        case VERIFYOTP_REQUEST:
            return {
             ...state,
                verifyOtpLoading: true,
                verifyOtpSuccess: false,
                verifyOtpError: false,
            }
        case VERIFYOTP_SUCCESS:
            return {
             ...state,
                verifyOtpLoading: false,
                verifyOtpSuccess: true,
                verifyOtpError: false,
            }
        case VERIFYOTP_FAILURE:
            return {
             ...state,
                verifyOtpLoading: false,
                verifyOtpSuccess: false,
                verifyOtpError: true
            }    

            default:
                return state
    }
}

export default checkReducer;