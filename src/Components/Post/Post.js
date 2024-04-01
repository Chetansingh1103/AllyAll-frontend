import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePreviouslyClickedUserId } from '../../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { checkLike, likePost, unlikePost } from '../../redux/actions/postActions';

const Post = ({postData}) => {

    
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token)
    const navigate = useNavigate();

    const [liked,setLiked] = useState(postData.liked)
    const [likeCount,setLikeCount] = useState(postData.likeCount)
    const [commentCount,setCommentCount] = useState(postData.commentCount)

    const [time,setTime] = useState(() => {

        const currentDate = new Date().toISOString();
        //const diff = (currentDate - postData.creationDateTime) / (1000 * 60 * 60 * 24);

        const currentDateObj = new Date(currentDate);
        const creationDateTimeObj = new Date(postData.creationDateTime);

        // Calculate the difference in milliseconds
        const timeDifference = currentDateObj - creationDateTimeObj;
        const timeInHours = timeDifference/(1000 * 60 * 60);

        let formattedDate = "";


        if(timeInHours < 1){
            formattedDate = (timeInHours*60) + "m";
        }else if(timeInHours < 24){
            formattedDate = timeInHours + "h";
            
        }else if(timeInHours >= 24){
            formattedDate = (timeInHours/24) + "d";
        }


        const formattedDateArray = formattedDate.split(".");
         

        return formattedDateArray[0] + formattedDateArray[1].charAt(formattedDateArray[1].length - 1);
    })


    function handleMoreText(e){

        e.target.style.display = 'none';
        e.target.nextElementSibling.style.display = 'inline'


    }

    function handleLikes(e){

        if(liked){
            setLiked(false);
            setLikeCount(() => likeCount - 1)
            dispatch(unlikePost(postData._id, token))
            
        }else{
            setLiked(true);
            setLikeCount(() => likeCount + 1)
            dispatch(likePost(postData._id, token))
        }
        
       

    }

    function handleComments(e){

    }

    function handleClickedUsername(){

        dispatch(updatePreviouslyClickedUserId(postData.userId, token))

        navigate("/profile")

    }


    return (
        <div className='post-card'>
                    <div className='post-card-header'>
                        <img className='post-profile-pic' src={postData.profilePicture}/>
                        <div className='post-card-header-username' onClick={handleClickedUsername}>{postData.username}</div>
                        <div className='created-time'><div className='dot'><b>.</b></div>{time}</div>
                    </div>
                    <div className='post-card-body'>
                        <img className='post-img' src={postData.image} />
                        <div className='post-icons'>
                            <div className='post-like-icon' onClick={handleLikes}>{liked ? <i className='bx bxs-heart bx-tada-hover bx-md' style={{color:"red",animationIterationCount:"1"}} ></i> : <i className='bx bx-heart bx-tada-hover bx-md' ></i>}</div>
                            <div className='post-comment-icon' onClick={handleComments}><i className='bx bx-comment bx-md'></i></div>
                        </div>
                        <div className='like-count'><b>{likeCount} likes</b></div>
                        <div className='post-text-body'>  
                            <span className='post-card-body-text'>
                                <span className='post-card-body-username'>
                                    {postData.username}{postData.textBody.length <= 30 ? 
                                    (
                                        <span style={{marginLeft: "10px", fontWeight: "300"}}>
                                            {postData.textBody}
                                        </span>
                                    ) : 
                                    (
                                        <span style={{marginLeft: "10px", fontWeight: "300"}}>
                                            {postData.textBody.substring(0,30)}
                                            <span style={{cursor:"pointer", color:"gray"}} onClick={handleMoreText}>
                                                ...more
                                            </span>
                                            <span style={{display: "none"}}>
                                                {postData.textBody.substring(30)}
                                            </span>
                                        </span>
                                    )}
                                </span>
                            </span>
                            <p className='post-card-body-comments'>View all {postData.commentCount} comments</p>
                        </div>
                    </div>
                </div>
    );
}

export default Post;