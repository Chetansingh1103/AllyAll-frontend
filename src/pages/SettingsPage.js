import React, { useRef, useEffect, useState } from 'react';
import "./SettingsPage.css"
import { NavLink } from 'react-router-dom';
import EditProfile from '../Components/Profile/EditProfile';

const SettingsPage = () => {

    const editProfileRef = useRef(null);

    const [showEditProfile, setShowEditProfile] = useState(true)

    const handleEditProfile = () => {
        

    };

    useEffect(() => {
        // When the component mounts or updates, focus on the editProfileRef
        if (editProfileRef.current) {
            editProfileRef.current.focus();
        }
    }, []); 

    return (
        <div className='settings-page'>
            <h3>Settings</h3>
            <div className='settings-container'>
                <NavLink className="settings-option" onClick={handleEditProfile} ref={editProfileRef}>
                    <span className='settings-icon'><box-icon name='user-circle'></box-icon></span>
                    <span className='settings-text'>Edit Profile</span>
                </NavLink>
                <NavLink className="settings-option">
                    <span className='settings-icon'></span>
                    <span className='settings-text'>Blocked</span>
                </NavLink>
            </div>
            {showEditProfile && (<EditProfile />)}
        </div>
        
    );
}

export default SettingsPage;