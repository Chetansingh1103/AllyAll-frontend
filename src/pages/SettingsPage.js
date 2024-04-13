import React, { useRef, useEffect, useState } from 'react';
import "./SettingsPage.css"
import { NavLink } from 'react-router-dom';
import EditProfile from '../Components/Profile/EditProfile';

const SettingsPage = () => {

    const editProfileRef = useRef(null);

    const settingsPageRef = useRef(null);

    const editprofilePageRef = useRef(null);


    const handleEditProfile = () => {

        editProfileRef.current.focus();

        if(window.innerWidth < 785){

            settingsPageRef.current.style.display = " none";

            editprofilePageRef.current.style.display = "block";

        }
        

    };

    useEffect(() => {
        // When the component mounts or updates, focus on the editProfileRef
        if (editProfileRef.current && window.innerWidth > 785) {
            editProfileRef.current.focus();
        }

        if(window.innerWidth < 785){

            editprofilePageRef.current.style.display = 'none';

            settingsPageRef.current.style.display = "block";
        }

        if(window.innerWidth > 785){
            
            editprofilePageRef.current.style.display = 'block';

            settingsPageRef.current.style.display = "block";
        }
        
    }, []); 


    return (
        <div className='settings-page' >
            <div ref={settingsPageRef}>
            <h3>Settings</h3>
                <div className='settings-container' >
                    <NavLink className="settings-option" onClick={handleEditProfile} ref={editProfileRef}>
                        <span className='settings-icon'><box-icon name='user-circle'></box-icon></span>
                        <span className='settings-text'>Edit Profile</span>
                    </NavLink>
                </div>
            </div>
            <div ref={editprofilePageRef}><EditProfile /></div>
        </div>
        
    );
}

export default SettingsPage;