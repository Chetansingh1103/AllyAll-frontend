import React, { useEffect } from 'react';
import Profile from '../Components/Profile/Profile';
import "./ProfilePage.css"
import { useDispatch, useSelector } from 'react-redux';
import { getPreviouslyClickedUserId } from '../redux/actions/userActions';

const ProfilePage = () => {

    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const previouslyClickedUserId = useSelector(state => state.user.previouslyClickedUserId)

    

    useEffect(() => {
        dispatch(getPreviouslyClickedUserId(token))
    }, [dispatch, token])

    return (
        <div className='profile-page'>
            {previouslyClickedUserId && (<Profile/>)}
        </div>
    );
}

export default ProfilePage;