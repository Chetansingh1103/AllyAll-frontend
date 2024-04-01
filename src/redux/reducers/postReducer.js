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

} from "../actions/actiontypes";

const initialState = {
    myPosts: [],
    feedPosts: [],
    singlePost: {},
    checklike: false,
    createPostLoading: false,
    createPostSuccess: false,
    createPostError: false,
    getAllMyPostsLoading: false,
    getAllMyPostsSuccess: false,
    getAllMyPostsError: false,
    getFeedPostsLoading: false,
    getFeedPostsSuccess: false,
    getFeedPostsError: false,
    getFeedPostsErrorMessage: "",
    getSinglePostLoading: false,
    getSinglePostSuccess: false,
    getSinglePostError: false,
    deletePostLoading: false,
    deletePostSuccess: false,
    deletePostError: false,
    likePostLoading: false,
    likePostSuccess: false,
    likePostError: false,
    unlikePostLoading: false,
    unlikePostSuccess: false,
    unlikePostError: false,
    checkLikeLoading: false,
    checkLikeSuccess: false,
    checkLikeError: false,
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATEPOST_REQUEST:
            return {
             ...state,
                createPostLoading: true,
                createPostSuccess: false,
                createPostError: false,
            }
        case CREATEPOST_SUCCESS:
            return {
             ...state,
                createPostLoading: false,
                createPostSuccess: true,
                createPostError: false,
            }
        case CREATEPOST_FAILURE:
            return {
             ...state,
                createPostLoading: false,
                createPostSuccess: false,
                createPostError: true,
            }
            
        case GETALLMYPOSTS_REQUEST:
            return {
             ...state,
                getAllMyPostsLoading: true,
                getAllMyPostsSuccess: false,
                getAllMyPostsError: false,
            }
        case GETALLMYPOSTS_SUCCESS:
            return {
             ...state,
                getAllMyPostsLoading: false,
                getAllMyPostsSuccess: true,
                getAllMyPostsError: false,
                myPosts: action.payload.posts,
            }
        case GETALLMYPOSTS_FAILURE:
            return {
             ...state,
                getAllMyPostsLoading: false,
                getAllMyPostsSuccess: false,
                getAllMyPostsError: true,
            }
            
        case GETFEEDPOSTS_REQUEST:
            return {
             ...state,
                getFeedPostsLoading: true,
                getFeedPostsSuccess: false,
                getFeedPostsError: false,
            }
        case GETFEEDPOSTS_SUCCESS:
            return {
             ...state,
                getFeedPostsLoading: false,
                getFeedPostsSuccess: true,
                getFeedPostsError: false,
                feedPosts: [...state.feedPosts, ...action.payload.posts],
            }
        case GETFEEDPOSTS_FAILURE:
            return {
             ...state,
                getFeedPostsLoading: false,
                getFeedPostsSuccess: false,
                getFeedPostsError: true,
                getFeedPostsErrorMessage: action.payload.message,
            }
            
        case GETSINGLEPOST_REQUEST:
            return {
             ...state,
                getSinglePostLoading: true,
                getSinglePostSuccess: false,
                getSinglePostError: false,
            }
        case GETSINGLEPOST_SUCCESS:
            return {
             ...state,
                getSinglePostLoading: false,
                getSinglePostSuccess: true,
                getSinglePostError: false,
                singlePost: action.payload.post,
            }
        case GETSINGLEPOST_FAILURE:
            return {
             ...state,
                getSinglePostLoading: false,
                getSinglePostSuccess: false,
                getSinglePostError: true,
            }
            
        case DELETEPOST_REQUEST:
            return {
             ...state,
                deletePostLoading: true,
                deletePostSuccess: false,
                deletePostError: false,
            }
        case DELETEPOST_SUCCESS:
            return {
             ...state,
                deletePostLoading: false,
                deletePostSuccess: true,
                deletePostError: false,
            }
        case DELETEPOST_FAILURE:
            return {
             ...state,
                deletePostLoading: false,
                deletePostSuccess: false,
                deletePostError: true,
            }
        case CLEAR_FEED_POSTS:
            return {
             ...state,
                feedPosts: [],
            }
            
        case LIKE_POST_REQUEST:
            return {
             ...state,
                likePostLoading: true,
                likePostSuccess: false,
                likePostError: false,
            }
        case LIKE_POST_SUCCESS:
            return {
             ...state,
                likePostLoading: false,
                likePostSuccess: true,
                likePostError: false,
            }
        case LIKE_POST_FAILURE:
            return {
             ...state,
                likePostLoading: false,
                likePostSuccess: false,
                likePostError: true,
            }
            
        case UNLIKE_POST_REQUEST:
            return {
             ...state,
                unlikePostLoading: true,
                unlikePostSuccess: false,
                unlikePostError: false,
            }
        case UNLIKE_POST_SUCCESS:
            return {
             ...state,
                unlikePostLoading: false,
                unlikePostSuccess: true,
                unlikePostError: false,
            }
        case UNLIKE_POST_FAILURE:
            return {
             ...state,
                unlikePostLoading: false,
                unlikePostSuccess: false,
                unlikePostError: true,
            }
            
        case CHECK_LIKE_REQUEST:
            return {
             ...state,
                checkLikeLoading: true,
                checkLikeSuccess: false,
                checkLikeError: false,
            }
        case CHECK_LIKE_SUCCESS:
            return {
             ...state,
                checkLikeLoading: false,
                checkLikeSuccess: true,
                checkLikeError: false,
                checklike: action.payload.like,
            }
            
        case CHECK_LIKE_FAILURE:
            return {
             ...state,
                checkLikeLoading: false,
                checkLikeSuccess: false,
                checkLikeError: true,
            }

        default:
            return state
    }
}

export default postReducer;