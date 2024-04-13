import {
    GETALLUSERS_REQUEST,
    GETALLUSERS_SUCCESS,
    GETALLUSERS_FAILURE,
    GETSEARCHEDUSERS_REQUEST,
    GETSEARCHEDUSERS_SUCCESS,
    GETSEARCHEDUSERS_FAILURE,
    DEACTIVATEUSER_REQUEST,
    DEACTIVATEUSER_SUCCESS,
    DEACTIVATEUSER_FAILURE,
    UPDATEUSERDETAILS_REQUEST,
    UPDATEUSERDETAILS_SUCCESS,
    UPDATEUSERDETAILS_FAILURE,
    DELETEUSER_REQUEST,
    DELETEUSER_SUCCESS,
    DELETEUSER_FAILURE,
    CHECKPROFILE_REQUEST,
    CHECKPROFILE_SUCCESS,
    CHECKPROFILE_FAILURE,
    UPDATE_PREVIOUSLY_CLICKED_USER_ID_REQUEST,
    UPDATE_PREVIOUSLY_CLICKED_USER_ID_SUCCESS,
    UPDATE_PREVIOUSLY_CLICKED_USER_ID_FAILURE,
    GET_PREVIOUSLY_CLICKED_USER_ID_REQUEST,
    GET_PREVIOUSLY_CLICKED_USER_ID_SUCCESS,
    GET_PREVIOUSLY_CLICKED_USER_ID_FAILURE,
    FOLLOW_USER_REQUEST,
    FOLLOW_USER_SUCCESS,
    FOLLOW_USER_FAILURE,
    UNFOLLOW_USER_REQUEST,
    UNFOLLOW_USER_SUCCESS,
    UNFOLLOW_USER_FAILURE
} from "./actiontypes";

import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL

export const getAllUsersRequest = () => {
    return {
        type: GETALLUSERS_REQUEST
    }
}

export const getAllUsersSuccess = (success,users) => {
    return {
        type: GETALLUSERS_SUCCESS,
        payload: {success,users}
    }
}

export const getAllUsersFailure = (error) => {
    return {
        type: GETALLUSERS_FAILURE,
        payload: {error}
    }
}

export const getSearchedUsersRequest = () => {
    return {
        type: GETSEARCHEDUSERS_REQUEST
    }
}

export const getSearchedUsersSuccess = (success,users) => {
    return {
        type: GETSEARCHEDUSERS_SUCCESS,
        payload: {success,users}
    }
}

export const getSearchedUsersFailure = (error) => {
    return {
        type: GETSEARCHEDUSERS_FAILURE,
        payload: {error}
    }
}

export const deactivateUserRequest = () => {
    return {
        type: DEACTIVATEUSER_REQUEST
    }
}

export const deactivateUserSuccess = (success) => {
    return {
        type: DEACTIVATEUSER_SUCCESS,
        payload: {success}
    }
}

export const deactivateUserFailure = (error) => {
    return {
        type: DEACTIVATEUSER_FAILURE,
        payload: {error}
    }
}

export const updateUserDetailsRequest = () => {
    return {
        type: UPDATEUSERDETAILS_REQUEST
    }
}

export const updateUserDetailsSuccess = (success) => {
    return {
        type: UPDATEUSERDETAILS_SUCCESS,
        payload: {success}
    }
}

export const updateUserDetailsFailure = (error) => {
    return {
        type: UPDATEUSERDETAILS_FAILURE,
        payload: {error}
    }
}

export const deleteUserRequest = () => {
    return {
        type: DELETEUSER_REQUEST,
    }
}

export const deleteUserSuccess = (success) => {
    return {
        type: DELETEUSER_SUCCESS,
        payload: {success}
    }
}

export const deleteUserFailure = (error) => {
    return {
        type: DELETEUSER_FAILURE,
        payload: {error}
    }
}

export const checkProfileRequest = () => {
    return {
        type: CHECKPROFILE_REQUEST,
    }
}

export const checkProfileSuccess = (success,user) => {
    return {
        type: CHECKPROFILE_SUCCESS,
        payload: {success,user}
    }
}

export const checkProfileFailure = (error) => {
    return {
        type: CHECKPROFILE_FAILURE,
        payload: {error}
    }
}


export const updatePreviouslyClickedUserIdRequest = () => {
    return {
        type: UPDATE_PREVIOUSLY_CLICKED_USER_ID_REQUEST,
    }
}

export const updatePreviouslyClickedUserIdSuccess = (success,userId) => {
    return {
        type: UPDATE_PREVIOUSLY_CLICKED_USER_ID_SUCCESS,
        payload: {success, userId}
    }
}

export const updatePreviouslyClickedUserIdFailure = (error) => {
    return {
        type: UPDATE_PREVIOUSLY_CLICKED_USER_ID_FAILURE,
        payload: {error}
    }
}

export const getPreviouslyClickedUserIdRequest = () => {
    return {
        type: GET_PREVIOUSLY_CLICKED_USER_ID_REQUEST,
    }
}

export const getPreviouslyClickedUserIdSuccess = (success,userId) => {
    return {
        type: GET_PREVIOUSLY_CLICKED_USER_ID_SUCCESS,
        payload: {success,userId}
    }
}

export const getPreviouslyClickedUserIdFailure = (error) => {
    return {
        type: GET_PREVIOUSLY_CLICKED_USER_ID_FAILURE,
        payload: {error}
    }
}

export const followUserRequest = () => {
    return {
        type: FOLLOW_USER_REQUEST,
    }
}

export const followUserSuccess = (success) => {
    return {
        type: FOLLOW_USER_SUCCESS,
        payload: {success}
    }
}

export const followUserFailure = (error) => {
    return {
        type: FOLLOW_USER_FAILURE,
        payload: {error}
    }
}

export const unfollowUserRequest = () => {
    return {
        type: UNFOLLOW_USER_REQUEST,
    }
}

export const unfollowUserSuccess = (success) => {
    return {
        type: UNFOLLOW_USER_SUCCESS,
        payload: {success}
    }
}

export const unfollowUserFailure = (error) => {
    return {
        type: UNFOLLOW_USER_FAILURE,
        payload: {error}
    }
}


//------------------------------------------------------------------------------------------------------

// get all users
export const getAllUsers = (token) => {
    return async (dispatch) => {
        dispatch(getAllUsersRequest())
        
        try{
            const response = await axios.get(`${API_URL}/user/get-all-users`, {
                headers: {
                    "xs-my-app": token
                }
            })

            if(response.data.status === 200){
                dispatch(getAllUsersSuccess(true, response.data.data))
            }

        }
        catch(err){
            dispatch(getAllUsersFailure(true))
        }
    }
}

// get searched users
export const getSearchedUsers = (searchedUsername,token) => {
    return async (dispatch) => {
        dispatch(getSearchedUsersRequest())
        
        try{
            const response = await axios.post(`${API_URL}/user/get-searched-users`,{
                username: searchedUsername
            }, 
            {
                headers: {
                    "xs-my-app": token
                }
            })

            if(response.data.status === 200){
                dispatch(getSearchedUsersSuccess(true, response.data.data))
            }

        }
        catch(err){
            dispatch(getSearchedUsersFailure(true))
        }
    }
}

// deactivate user
export const deactivateUser = (token) => {
    return async (dispatch) => {
        dispatch(deactivateUserRequest())
        
        try{
            const response = await axios.patch(`${API_URL}/user/deactivate-user`, 
            {
                headers: {
                    "xs-my-app": token
                }
            })

            if(response.data.status === 200){
                dispatch(deactivateUserSuccess(true))
            }

        }
        catch(err){
            dispatch(deactivateUserFailure(true))
        }
    }
}

// update user details
export const updateUserDetails = (userDetails,token) => {
    return async (dispatch) => {
        dispatch(updateUserDetailsRequest())
        
        try{
            const response = await axios.put(`${API_URL}/user/update-user`, userDetails, {
                headers: {
                    "xs-my-app": token
                }
            })

            if(response.data.status === 200){
                window.location.reload()
                dispatch(updateUserDetailsSuccess(true))
            }

        }
        catch(err){
            dispatch(updateUserDetailsFailure(true))
        }
    }
}

// delete user
export const deleteUser = (token) => {
    return async (dispatch) => {
        dispatch(deleteUserRequest())
        
        try{
            const response = await axios.post(`${API_URL}/user/delete-user`, {
                headers: {
                    "xs-my-app": token
                }
            })

            if(response.data.status === 200){
                dispatch(deleteUserSuccess(true))
            }

        }
        catch(err){
            dispatch(deleteUserFailure(true))
        }
    }
}

//check profile
export const checkProfile = (profileUserId,token) => {
    return async (dispatch) => {
        dispatch(checkProfileRequest())
        
        try{
            const response = await axios.post(`${API_URL}/user/check-profile`, {
                profileUserId: profileUserId
            }, {
                headers: {
                    "xs-my-app": token
                }
            })

            if(response.data.status === 200){
                dispatch(checkProfileSuccess(true, response.data.data))
            }

        }
        catch(err){
            dispatch(checkProfileFailure(true))
        }
    }
}

// update priviously clicked userId
export const updatePreviouslyClickedUserId = (userId,token) => {
    return async (dispatch) => {
        dispatch(updatePreviouslyClickedUserIdRequest())
        
        try{
            const response = await axios.patch(`${API_URL}/user/update-previously-clicked-userId`, {
                previouslyClickedUserId: userId
            }, {
                headers: {
                    "xs-my-app": token
                }


            })

            if(response.data.status === 200){
                dispatch(updatePreviouslyClickedUserIdSuccess(true, response.data.data))
            }

        }
        catch(err){
            dispatch(updatePreviouslyClickedUserIdFailure(true))
        }
    }
}

// get priviously clicked userId
export const getPreviouslyClickedUserId = (token) => {
    return async (dispatch) => {
        dispatch(getPreviouslyClickedUserIdRequest())
        
        try{
            const response = await axios.get(`${API_URL}/user/get-previously-clicked-userId`, {
                headers: {
                    "xs-my-app": token
                }
            })

            if(response.data.status === 200){
                dispatch(getPreviouslyClickedUserIdSuccess(true, response.data.data))
            }

        }
        catch(err){
            dispatch(getPreviouslyClickedUserIdFailure(true))
        }
    }
}

// follow user
export const followUser = (userId,token) => {
    return async (dispatch) => {
        dispatch(followUserRequest())
        
        try{
            const response = await axios.post(`${API_URL}/follow/follow-user`, {
                followingUserId: userId
            }, {
                headers: {
                    "xs-my-app": token
                }
            })

            if(response.data.status === 200){
                dispatch(followUserSuccess(true))
            }

        }
        catch(err){
            dispatch(followUserFailure(true))
        }
    }
}

// unfollow user
export const unfollowUser = (userId,token) => {
    return async (dispatch) => {
        dispatch(unfollowUserRequest())
        
        try{
            const response = await axios.post(`${API_URL}/follow/unfollow-user`, {
                unfollowingUserId: userId
            }, {
                headers: {
                    "xs-my-app": token
                }
            })

            if(response.data.status === 200){
                dispatch(unfollowUserSuccess(true))
            }

        }
        catch(err){
            dispatch(unfollowUserFailure(true))
        }
    }
}