import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./SearchContainer.css"
import { getSearchedUsers, updatePreviouslyClickedUserId } from '../../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';

const SearchContainer = ({visibility,setVisibility}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // selector state here

    const [search,setSearch] = useState("");
    const [active, setActive] = useState(false);
    const userState = useSelector(state => state.user);
    const token = useSelector(state => state.auth.token);
    const previouslyClickedUserId = useSelector(state => state.user.previouslyClickedUserId);
    const searchList = userState.searchedUsers;
       

    const handleSearch = (e) => {

        setSearch(e.target.value);
        
    }

    const handleClickedUser = (userId) => {

        dispatch(updatePreviouslyClickedUserId(userId, token))

        navigate("/profile")

        setVisibility()

    }

    useEffect(() => {
        if (search.length > 0) {
            setActive(true);
        } else {
            setActive(false);
        }

        if (search) {

            dispatch(getSearchedUsers(search,token));

        }else{
            dispatch(getSearchedUsers('',token));
        }

    }, [search])


    return (
        <div className={`search-container ${visibility ? 'visible' : 'hidden'}`}>
            <div className='search'>
                <h2>Search</h2>
                <input type='search' onInput={handleSearch} placeholder='Search'/>
            </div>
            { active ? 
            (
                <div className='search-list-container'>
                { searchList && searchList.map((user) => (
                    <div className='searched-profile' key={user._id} onClick={() => (handleClickedUser(user._id))}>
                        <img className='profile-pic' src={user.profilePicture}></img>
                        <div className='details'>
                            <h5>{user.username}</h5>
                            <p>{user.name}</p>
                        </div>
                    </div>
                ))}

                </div>
            )
            :
            (
                <div className='recent'>
                    <h4>Recent</h4>
                    <div className='recent-search-container'>

                    </div>
                </div>
            )
            }
            
        </div>
    );
}

export default SearchContainer;