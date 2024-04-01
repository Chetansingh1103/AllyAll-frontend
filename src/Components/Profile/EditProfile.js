import React from 'react';
import "./EditProfile.css"

const EditProfile = () => {


    function handleChangePhoto(){

    }

    return (
        <div className='edit-profile'>
            <div className='edit-profile-heading'>
                <h2>Edit Profile</h2>
            </div>
            <div className='edit-profile-update-photo-div'>
                <div>
                    <span><img src={""} className='edit-profile-profile-pic'/></span>
                    <span><p className='edit-profile-username'>chetuboy_</p></span>
                </div>
                
                <span className='btn'><button className='change-photo-btn' onClick={handleChangePhoto}>Change Photo</button></span>
            </div>
        </div>
    );
}

export default EditProfile;