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
} from "../actions/actiontypes";

const initialState = {
    allUsers: [],
    searchedUsers: [],
    checkProfileUser: {},
    previouslyClickedUserId: "",
    getAllUsersLoading: false,
    getAllUsersSuccess: false,
    getAllUsersError: false,
    searchedUsersLoading: false,
    searchedUsersSuccess: false,
    searchedUsersError: false,
    deactivateUserLoading: false,
    deactivateUserSuccess: false,
    deactivateUserError: false,
    updateUserDetailsLoading: false,
    updateUserDetailsSuccess: false,
    updateUserDetailsError: false,
    deleteUserLoading: false,
    deleteUserSuccess: false,
    deleteUserError: false,
    checkProfileLoading: false,
    checkProfileSuccess: false,
    checkProfileError: false,
    update_previously_clicked_user_id_loading: false,
    update_previously_clicked_user_id_success: false,
    update_previously_clicked_user_id_error: false,
    get_previously_clicked_user_id_loading: false,
    get_previously_clicked_user_id_success: false,
    get_previously_clicked_user_id_error: false,
    follow_user_loading: false,
    follow_user_success: false,
    follow_user_error: false,
    unfollow_user_loading: false,
    unfollow_user_success: false,
    unfollow_user_error: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETALLUSERS_REQUEST:
            return {
             ...state,
                getAllUsersLoading: true,
                getAllUsersSuccess: false,
                getAllUsersError: false,
            }
        case GETALLUSERS_SUCCESS:
            return {
             ...state,
                getAllUsersLoading: false,
                getAllUsersSuccess: true,
                getAllUsersError: false,
                allUsers: action.payload.users,
            }
        case GETALLUSERS_FAILURE:
            return {
             ...state,
                getAllUsersLoading: false,
                getAllUsersSuccess: false,
                getAllUsersError: true,
            }
        case GETSEARCHEDUSERS_REQUEST:
            return {
             ...state,
                searchedUsersLoading: true,
                searchedUsersSuccess: false,
                searchedUsersError: false,
            }
        case GETSEARCHEDUSERS_SUCCESS:
            return {
             ...state,
                searchedUsersLoading: false,
                searchedUsersSuccess: true,
                searchedUsersError: false,
                searchedUsers: action.payload.users,
            }
        case GETSEARCHEDUSERS_FAILURE:
            return {
             ...state,
                searchedUsersLoading: false,
                searchedUsersSuccess: false,
                searchedUsersError: true,
            }
        case DEACTIVATEUSER_REQUEST:
            return {
             ...state,
                deactivateUserLoading: true,
                deactivateUserSuccess: false,
                deactivateUserError: false,
            }
        case DEACTIVATEUSER_SUCCESS:
            return {
             ...state,
                deactivateUserLoading: false,
                deactivateUserSuccess: true,
                deactivateUserError: false,
            }
        case DEACTIVATEUSER_FAILURE:
            return {
             ...state,
                deactivateUserLoading: false,
                deactivateUserSuccess: false,
                deactivateUserError: true,
            }
        case UPDATEUSERDETAILS_REQUEST:
            return {
             ...state,
                updateUserDetailsLoading: true,
                updateUserDetailsSuccess: false,
                updateUserDetailsError: false,
            }
        case UPDATEUSERDETAILS_SUCCESS:
            return {
             ...state,
                updateUserDetailsLoading: false,
                updateUserDetailsSuccess: true,
                updateUserDetailsError: false,
            }
        case UPDATEUSERDETAILS_FAILURE:
            return {
             ...state,
                updateUserDetailsLoading: false,
                updateUserDetailsSuccess: false,
                updateUserDetailsError: true,
            }
        case DELETEUSER_REQUEST:
            return {
             ...state,
                deleteUserLoading: true,
                deleteUserSuccess: false,
                deleteUserError: false,
            }
        case DELETEUSER_SUCCESS:
            return {
             ...state,
                deleteUserLoading: false,
                deleteUserSuccess: true,
                deleteUserError: false,
            }
        case DELETEUSER_FAILURE:
            return {
             ...state,
                deleteUserLoading: false,
                deleteUserSuccess: false,
                deleteUserError: true,
            }
            
        case CHECKPROFILE_REQUEST:
            return {
             ...state,
                checkProfileLoading: true,
                checkProfileSuccess: false,
                checkProfileError: false,
            }
        case CHECKPROFILE_SUCCESS:
            return {
             ...state,
                checkProfileLoading: false,
                checkProfileSuccess: true,
                checkProfileError: false,
                checkProfileUser: action.payload.user,
            }
            
        case CHECKPROFILE_FAILURE:
            return {
             ...state,
                checkProfileLoading: false,
                checkProfileSuccess: false,
                checkProfileError: true,
            }
            
        case UPDATE_PREVIOUSLY_CLICKED_USER_ID_REQUEST:
            return {
             ...state,
                update_previously_clicked_user_id_loading: true,
                update_previously_clicked_user_id_success: false,
                update_previously_clicked_user_id_error: false,
            }
        case UPDATE_PREVIOUSLY_CLICKED_USER_ID_SUCCESS:
            return {
             ...state,
                update_previously_clicked_user_id_loading: false,
                update_previously_clicked_user_id_success: true,
                update_previously_clicked_user_id_error: false,
                previouslyClickedUserId: action.payload.userId,
            }
            
        case UPDATE_PREVIOUSLY_CLICKED_USER_ID_FAILURE:
            return {
             ...state,
                update_previously_clicked_user_id_loading: false,
                update_previously_clicked_user_id_success: false,
                update_previously_clicked_user_id_error: true,
            }
            
        case GET_PREVIOUSLY_CLICKED_USER_ID_REQUEST:
            return {
             ...state,
                get_previously_clicked_user_id_loading: true,
                get_previously_clicked_user_id_success: false,
                get_previously_clicked_user_id_error: false,
            }
        case GET_PREVIOUSLY_CLICKED_USER_ID_SUCCESS:
            return {
             ...state,
                get_previously_clicked_user_id_loading: false,
                get_previously_clicked_user_id_success: true,
                get_previously_clicked_user_id_error: false,
                previouslyClickedUserId: action.payload.userId,
            }
            
        case GET_PREVIOUSLY_CLICKED_USER_ID_FAILURE:
            return {
             ...state,
                get_previously_clicked_user_id_loading: false,
                get_previously_clicked_user_id_success: false,
                get_previously_clicked_user_id_error: true,
            }
            
        case FOLLOW_USER_REQUEST:
            return {
             ...state,
                follow_user_loading: true,
                follow_user_success: false,
                follow_user_error: false,
            }
        case FOLLOW_USER_SUCCESS:
            return {
             ...state,
                follow_user_loading: false,
                follow_user_success: true,
                follow_user_error: false,
            }
            
        case FOLLOW_USER_FAILURE:
            return {
             ...state,
                follow_user_loading: false,
                follow_user_success: false,
                follow_user_error: true,
            }
            
        case UNFOLLOW_USER_REQUEST:
            return {
             ...state,
                unfollow_user_loading: true,
                unfollow_user_success: false,
                unfollow_user_error: false,
            }
        case UNFOLLOW_USER_SUCCESS:
            return {
             ...state,
                unfollow_user_loading: false,
                unfollow_user_success: true,
                unfollow_user_error: false,
            }
            
        case UNFOLLOW_USER_FAILURE:
            return {
             ...state,
                unfollow_user_loading: false,
                unfollow_user_success: false,
                unfollow_user_error: true,
            }
            
        default:
            return state
    }
}

export default userReducer;