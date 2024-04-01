import React from 'react';
import "./ProfilePost.css"

const ProfilePost = ({postData}) => {

    function handleProfilePost(){

    }

    return (
        <div className='profile-post' onClick={handleProfilePost}>
            <img src={postData.image}/>
        </div>
    );
}

export default ProfilePost;