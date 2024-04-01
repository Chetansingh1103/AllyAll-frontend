import {
    CREATEPOST_REQUEST,
    CREATEPOST_SUCCESS,
    CREATEPOST_FAILURE,
    GETALLMYPOSTS_REQUEST,
    GETALLMYPOSTS_SUCCESS,
    GETALLMYPOSTS_FAILURE,
    GETFEEDPOSTS_REQUEST,
    GETFEEDPOSTS_SUCCESS,
    GETFEEDPOSTS_FAILURE,
    GETSINGLEPOST_REQUEST,
    GETSINGLEPOST_SUCCESS,
    GETSINGLEPOST_FAILURE,
    DELETEPOST_REQUEST,
    DELETEPOST_SUCCESS,
    DELETEPOST_FAILURE,
    CLEAR_FEED_POSTS,
    LIKE_POST_REQUEST,
    LIKE_POST_SUCCESS,
    LIKE_POST_FAILURE,
    UNLIKE_POST_REQUEST,
    UNLIKE_POST_SUCCESS,
    UNLIKE_POST_FAILURE,
    CHECK_LIKE_REQUEST,
    CHECK_LIKE_SUCCESS,
    CHECK_LIKE_FAILURE
} from "./actiontypes";

import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL

export const createPostRequest = () => {
    return {
        type: CREATEPOST_REQUEST
    }
}

export const createPostSuccess = (success) => {
    return {
        type: CREATEPOST_SUCCESS,
        payload: {success}
    }
}

export const createPostFailure = (error) => {
    return {
        type: CREATEPOST_FAILURE,
        payload: {error}
    }
}

export const getAllMyPostsRequest = () => {
    return {
        type: GETALLMYPOSTS_REQUEST
    }
}

export const getAllMyPostsSuccess = (success,posts) => {
    return {
        type: GETALLMYPOSTS_SUCCESS,
        payload: {success,posts}
    }
}

export const getAllMyPostsFailure = (error) => {
    return {
        type: GETALLMYPOSTS_FAILURE,
        payload: {error}
    }
}

export const getFeedPostsRequest = () => {
    return {
        type: GETFEEDPOSTS_REQUEST
    }
}

export const getFeedPostsSuccess = (success,posts) => {
    return {
        type: GETFEEDPOSTS_SUCCESS,
        payload: {success,posts}
    }
}

export const getFeedPostsFailure = (error,message) => {
    return {
        type: GETFEEDPOSTS_FAILURE,
        payload: {error,message}
    }
}

export const getSinglePostRequest = () => {
    return {
        type: GETSINGLEPOST_REQUEST
    }
}

export const getSinglePostSuccess = (success,post) => {
    return {
        type: GETSINGLEPOST_SUCCESS,
        payload: {success,post}
    }
}

export const getSinglePostFailure = (error) => {
    return {
        type: GETSINGLEPOST_FAILURE,
        payload: {error}
    }
}

export const deletePostRequest = () => {
    return {
        type: DELETEPOST_REQUEST
    }
}

export const deletePostSuccess = (success) => {
    return {
        type: DELETEPOST_SUCCESS,
        payload: {success}
    }
}

export const deletePostFailure = (error) => {
    return {
        type: DELETEPOST_FAILURE,
        payload: {error}
    }
}


export const clearFeedPosts = () => ({
    type: CLEAR_FEED_POSTS
});


export const likePostRequest = () => {
    return {
        type: LIKE_POST_REQUEST
    }
}

export const likePostSuccess = (success) => {
    return {
        type: LIKE_POST_SUCCESS,
        payload: {success}
    }
}

export const likePostFailure = (error) => {
    return {
        type: LIKE_POST_FAILURE,
        payload: {error}
    }
}

export const unlikePostRequest = () => {
    return {
        type: UNLIKE_POST_REQUEST
    }
}

export const unlikePostSuccess = (success) => {
    return {
        type: UNLIKE_POST_SUCCESS,
        payload: {success}
    }
}

export const unlikePostFailure = (error) => {
    return {
        type: UNLIKE_POST_FAILURE,
        payload: {error}
    }
}

export const checkLikeRequest = () => {
    return {
        type: CHECK_LIKE_REQUEST
    }
}

export const checkLikeSuccess = (success,like) => {
    return {
        type: CHECK_LIKE_SUCCESS,
        payload: {success,like}
    }
}

export const checkLikeFailure = (error) => {
    return {
        type: CHECK_LIKE_FAILURE,
        payload: {error}
    }
}


//--------------------------------------------------------------------------------------------

// create post
export const createPost = (postData,token) => {
    return async (dispatch) => {
        dispatch(createPostRequest())

        try{
            const response = await axios.post(`${API_URL}/post/create-post`, postData, {
                headers: {
                    "xs-my-app": token
                }
            })

            if(response.data.status === 200){
                dispatch(createPostSuccess(true))
            }
        }
        catch(err){
            dispatch(createPostFailure(true))
        }
    }
}

// get all my posts
export const getAllMyPosts = (token) => {
    return async (dispatch) => {
        dispatch(getAllMyPostsRequest())
        try{
            const response = await axios.get(`${API_URL}/post/get-all-my-posts`, {
                headers: {
                    "xs-my-app": token
                }
            })
            if(response.data.status === 200){
                console.log(response.data.data)
                dispatch(getAllMyPostsSuccess(true,response.data.data))
            }
        }
        catch(err){
            dispatch(getAllMyPostsFailure(true))
        }
    }
}

// get feed posts
export const getFeedPosts = (token,page) => {
    return async (dispatch) => {
        dispatch(getFeedPostsRequest())
        try{
            const response = await axios.get(`${API_URL}/post/get-feed-posts?page=${page}`, {
                headers: {
                    "xs-my-app": token
                }
            })
            if(response.data.status === 200){
                dispatch(getFeedPostsSuccess(true,response.data.data))
            }
        }
        catch(err){
            dispatch(getFeedPostsFailure(true,err.response.data.message))
        }
    }
}

// get single post
export const getSinglePost = (id,token) => {
    return async (dispatch) => {
        dispatch(getSinglePostRequest())
        try{
            const response = await axios.get(`${API_URL}/post/getsinglepost/${id}`, {
                headers: {
                    "xs-my-app": token
                }
            })
            if(response.data.status === 200){
                dispatch(getSinglePostSuccess(true,response.data.data))
            }
        }
        catch(err){
            dispatch(getSinglePostFailure(true))
        }
    }
}

// delete post
export const deletePost = (id,token) => {
    return async (dispatch) => {
        dispatch(deletePostRequest())
        try{
            const response = await axios.delete(`${API_URL}/post/deletepost/${id}`, {
                headers: {
                    "xs-my-app": token
                }
            })
            if(response.data.status === 200){
                dispatch(deletePostSuccess(true))
            }
        }
        catch(err){
            dispatch(deletePostFailure(true))
        }
    }
}

// like post
export const likePost = (postId,token) => {
    return async (dispatch) => {
        dispatch(likePostRequest())
        try{
            const response = await axios.post(`${API_URL}/like/like-post`, {postId: postId}, {
                headers: {
                    "xs-my-app": token
                }
            })
            if(response.data.status === 200){
                dispatch(likePostSuccess(true))
            }
        }
        catch(err){
            dispatch(likePostFailure(true))
        }
    }
}

// unlike post
export const unlikePost = (postId,token) => {
    return async (dispatch) => {
        dispatch(unlikePostRequest())
        try{
            const response = await axios.post(`${API_URL}/like/unlike-post`, {postId}, {
                headers: {
                    "xs-my-app": token
                }
            })
            if(response.data.status === 200){
                dispatch(unlikePostSuccess(true))
            }
        }
        catch(err){
            dispatch(unlikePostFailure(true))
        }
    }
}

// check like
export const checkLike = (postId,token) => {
    return async (dispatch) => {
        dispatch(checkLikeRequest())
        try{
            const response = await axios.post(`${API_URL}/like/check-like`, {postId}, {
                headers: {
                    "xs-my-app": token
                }
            })
            if(response.data.status === 200){
                dispatch(checkLikeSuccess(true,response.data.data.like))
            }
        }
        catch(err){
            dispatch(checkLikeFailure(true))
        }
    }
}