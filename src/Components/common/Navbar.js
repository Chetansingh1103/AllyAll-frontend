import React, { useState, useEffect } from 'react';
import "./Navbar.css"
import { NavLink, useNavigate} from 'react-router-dom';
import SearchContainer from '../Search/SearchContainer';
import CreatePost from '../Post/CreatePost';
import { useSelector, useDispatch } from 'react-redux';
import { getLoggedInUser } from '../../redux/actions/authActions';
import { updatePreviouslyClickedUserId } from '../../redux/actions/userActions';

const Navbar = () => {

    const [searchContainerVisibility, setSearchContainerVisibility] = useState(false);
    const [change, setChange] = useState(false);
    const [showCreateVisibility,setShowCreateVisibility] = useState(false);
    const [moreOptions,setMoreOptions] = useState(false);
    const dispatch = useDispatch();
    const createPostSuccess = useSelector(state => state.post.createPostSuccess)
    const token = useSelector(state => state.auth.token)
    const loggedInUser = useSelector(state => state.auth.loggedInUser)
    const navigate = useNavigate();

    useEffect(() => {

         // Fetch logged-in user data when token changes
         if (token) {
            dispatch(getLoggedInUser(token));
        }
        
    },[dispatch, token])


    useEffect(() => {
        if(createPostSuccess){
            setShowCreateVisibility(false);
        }
    },[createPostSuccess])

    function handleSearchContainer(){
        if(searchContainerVisibility){
            setSearchContainerVisibility(false);
            setChange(false);
        }else{
            setSearchContainerVisibility(true);
            setChange(true);
        }
        
    }

    function handleHome(){
        setSearchContainerVisibility(false);
        setChange(false);
    }

    function handleExplore(){
        setSearchContainerVisibility(false);
        setChange(false);
    }

    function handleMessages(){
        setSearchContainerVisibility(false);
        setChange(false);
    }

    function handleCreate(){
        setSearchContainerVisibility(false);
        setChange(false);

        if(showCreateVisibility){
            setShowCreateVisibility(false);
        }else{
            setShowCreateVisibility(true)
        }
        

    }

    // when we click on profile in navbar then the global state of clicked profile which stores clicked profile user id should be dispatched and set to the logged in user id but only on when user clicks on profile , if we dispatch on navbar loading only then whne ever the page gets reloaded then the clicked profile user id will be set to logged in user id , so to avoid this we have to set it whne we click on it
    function handleProfile(){
        setSearchContainerVisibility(false);
        setChange(false);

        if (loggedInUser) {
            dispatch(updatePreviouslyClickedUserId(loggedInUser._id,token));
        }
    }


    function handleMoreOptions(){
        if(moreOptions){
            setMoreOptions(false);
        }else{
            setMoreOptions(true);
        }
    }

    function handleSettings(){
        setMoreOptions(false);
        navigate("/settings");
    }

    function handleLogout(){
        localStorage.removeItem("token")
        window.location.reload();
    }

    function handleNotifications(){

    }


    return (
        <div className={`navbar ${change ? 'change':''}` } >
            <div className='navbar-containers'>
                <img className={`logo ${change ? 'change':''}`} src={change?require("../../images/favicon.png"):require("../../images/logo.png")} alt='logo'/>
                <div className='navlinks'>
                    <NavLink onClick={handleHome} to='/homepage'>{change ?<box-icon type='solid' name='home'></box-icon> : <span style={{display: "flex"}}><box-icon  type='solid' name='home'></box-icon> <span style={{marginTop: "5px", marginLeft: "15px"}}>Home</span></span>}</NavLink>
                    <NavLink onClick={handleSearchContainer}>{change ?<span style={{display: "flex"}}><box-icon size="md" border="square" color="grey" name='search' ></box-icon></span> : <span style={{display: "flex"}}><box-icon name='search' ></box-icon> <span style={{marginTop: "5px", marginLeft: "15px"}}>Search</span></span>}</NavLink>
                    <NavLink onClick={handleExplore} to='/explore' >{change ?<box-icon name='compass' ></box-icon> : <span style={{display: "flex"}}><box-icon  name='compass' ></box-icon> <span style={{marginTop: "5px", marginLeft: "15px"}}>Explore</span></span>}</NavLink>
                    {/* <NavLink onClick={handleMessages} to='/messages'>{change ?<box-icon name='message-rounded-detail' ></box-icon> : <span style={{display: "flex"}}><box-icon name='message-rounded-detail' ></box-icon> <span style={{marginTop: "5px", marginLeft: "15px"}}>Messages</span></span>}</NavLink> will be updated soon */}
                    <NavLink onClick={handleNotifications} to='/notifications'>{change ?<box-icon name='bell' ></box-icon> : <span style={{display: "flex"}}><box-icon name='bell' ></box-icon> <span style={{marginTop: "5px", marginLeft: "15px"}}>Notifications</span></span>}</NavLink>
                    <NavLink onClick={handleCreate}>{change ?<box-icon name='plus-circle' ></box-icon> : <span style={{display: "flex"}}><box-icon name='plus-circle' ></box-icon> <span style={{marginTop: "5px", marginLeft: "15px"}}>Create</span></span>}</NavLink>
                    <NavLink onClick={handleProfile} to='/profile'>{change ?<img className='profile-pic' src={require("../../images/defaultProfilePicture.png")}/>: <span style={{display: "flex"}}><img className='profile-pic' src={require("../../images/defaultProfilePicture.png")}/> <span style={{marginTop: "5px", marginLeft: "15px"}}>Profile</span></span>}</NavLink>
                </div>
                { moreOptions && 
                (
                    <div className='options-container'>
                        <div className='option-item' onClick={handleSettings}>
                            <span className='settings-icon'><box-icon name='cog'></box-icon></span>
                            <span className='settings-text'>Settings</span>
                        </div>
                        <div className='option-item' onClick={handleLogout}>
                            <span className='logout-text'>Log out</span>
                        </div>
                    </div>
                ) 
                }
                <div className='more-options' onClick={handleMoreOptions}>
                {change ? 
                    (<div className='breadcrumb'>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>) : (<> <div className='breadcrumb'>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>
                    <div className='more' style={{marginLeft: "15px", marginBottom: "7px"}}>More</div>
                    </>)
                    }
                    
                    
                </div>
            </div>
            <SearchContainer visibility={searchContainerVisibility} setVisibility={handleSearchContainer}/>
            {showCreateVisibility && <CreatePost show={showCreateVisibility} setShow={setShowCreateVisibility}/>}
            
        </div>
    );
}

export default Navbar;