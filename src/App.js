import React from 'react';
import "./App.css";
import { Routes, Route, Navigate } from 'react-router-dom'
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ReactDOM from 'react-dom/client';
import ProfilePage from './pages/ProfilePage';
import Homepage from './pages/Homepage';
import ExplorePage from './pages/ExplorePage';
import MessagePage from './pages/MessagePage';
import SettingsPage from './pages/SettingsPage';
import { useSelector } from 'react-redux';
import Navbar from './Components/common/Navbar';
import SearchContainer from './Components/Search/SearchContainer';

const App = () => {

    // const title = ReactDOM.createRoot(document.getElementById('title'));


    // title.render(
    //     `Sign up - AllyAll`
    // 

    const authState = useSelector(state => state.auth);
    const token = authState.token

    return (
        <div className='app'>

        { token && ( <Navbar/>)}

        <Routes>
            <Route path='/' element={token? <Navigate to={"/homepage"}/>:<SignupPage/>} />
            <Route path='/login' element={token? <Navigate to={"/homepage"}/>:<LoginPage/>} />
            <Route path='/profile' element={token? <ProfilePage/>:<Navigate to={"/login"}/>} />
            <Route path='/homepage' element={token?<Homepage/>:<Navigate to={"/login"}/>}/>  
            <Route path='/explore' element={token?<ExplorePage/>:<Navigate to={"/login"}/>} />
            <Route path='/messages' element={token?<MessagePage/>:<Navigate to={"/login"}/>} />
            <Route path='/settings' element={token?<SettingsPage/>:<Navigate to={"/login"}/>} />
        </Routes>

        </div>
    );
}

export default App;