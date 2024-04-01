import React, { useEffect, useState } from 'react';
import "./Profile.css"
import { useSelector, useDispatch } from 'react-redux';
import { checkProfile, followUser, unfollowUser } from '../../redux/actions/userActions';
import ProfilePost from '../Post/ProfilePosts';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const dispatch = useDispatch();
    const previouslyClickedUserId = useSelector(state => state.user.previouslyClickedUserId)
    const checkProfileUser = useSelector((state) => state.user.checkProfileUser);
    const token = useSelector((state) => state.auth.token);
    const flag = checkProfileUser.loggedInUser;
    const navigate = useNavigate();

    let [follow , setFollow] = useState(checkProfileUser.following)


    useEffect(() => {

        setFollow(checkProfileUser.following);

    }, [checkProfileUser])


    function handleShowFollowers(){

    }

    function handleShowFollowing(){

    }

   function handleFollow(){

        dispatch(followUser(checkProfileUser._id, token));
        setFollow(true);

    }

    function handleUnfollow(){

        dispatch(unfollowUser(checkProfileUser._id, token));
        setFollow(false);
    
    }


    useEffect(() => {
        dispatch(checkProfile(previouslyClickedUserId, token));
    }, [dispatch, previouslyClickedUserId, token])


    return (
        <div className='profile'>
            <div className='profile-top'>
                <div className='profile-top-img'>
                    <img src={checkProfileUser.profilePicture} className='profile-top-profile-photo'/>
                </div>
                <div className='profile-top-details'>
                    <div>
                        <span><p className='profile-top-details-username'>{checkProfileUser.username}</p></span>
                        <span>{ flag ? (<button className='profile-top-details-edit-profile'>Edit Profile</button>) : ( follow  ? (<button  onClick={handleUnfollow}>Following</button>) : (<button className='follow-button' onClick={handleFollow}>Follow</button>))}</span>
                        <span>{ !flag  && (<button className='profile-top-details-message'>Message</button>)}</span>
                        <span className='profile-top-details-settings'>{ flag && (<box-icon name='cog' size="md"></box-icon>)}</span>
                    </div>
                    <div>
                        <span><b>{checkProfileUser.profileUserPosts ? checkProfileUser.profileUserPosts.length : 0}</b> posts</span>
                        <span className='profile-top-details-followers' onClick={handleShowFollowers}><b>{checkProfileUser.profileUserFollowersList ? checkProfileUser.profileUserFollowersList.length : 0}</b> followers</span>
                        <span className='profile-top-details-following' onClick={handleShowFollowing}><b>{checkProfileUser.profileUserFollowingList ? checkProfileUser.profileUserFollowingList.length : 0}</b> following</span>
                    </div>
                    <div className='profile-top-details-bio'>
                        <p>{checkProfileUser.bio}</p>
                    </div>
                </div>
                
            </div>
            <div className='profile-bottom'>
                <div className='profile-posts'>
                {
                    checkProfileUser.profileUserPosts && checkProfileUser.profileUserPosts.map((post) => (
                        <ProfilePost key={post._id} postData={post}/>
                    ))
                }
                </div>
            </div>
        </div>
    );
}

export default Profile;