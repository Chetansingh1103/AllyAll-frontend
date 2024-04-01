import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/authActions';

import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.auth)
    const token = loginState.token

    if(token){
        navigate('/homepage');
    }

    const [credentials, setCredentials] = useState({ email: '', password: '' });


    const [hoverColor, setHoverColor] = useState("rgb(36, 168, 255)");

    function handleMouseOver(){
        setHoverColor("#0072f5");
    }

    function handleMouseOut(){
        setHoverColor("rgb(36, 168, 255)");
    }


    const handleChange = (e) => {

        const { name, value } = e.target;

        setCredentials({ ...credentials, [name]: value });

    }
    
      const implementLogin = async (e) => {

        e.preventDefault();
    
        // Check if input is email or username
        const isEmail = credentials.email.includes('@');
        const loginData = isEmail ? { email: credentials.email } : { username: credentials.email };
        loginData.password = credentials.password;
    
        dispatch(login(loginData))
       
    }

      

    return (
        <div className='login-page'>
             <form onSubmit={implementLogin}>
                <img className='logo' src={require("../images/logo.png")} alt='logo'/>
                <div className='input-group'>
                    <input type='text' placeholder='Email, or username' name='email'
                        onChange={handleChange}
                        value={credentials.email}
                    />
                </div>
                <div className='input-group'>
                    <input type='password' placeholder='Password' name='password'
                        onChange={handleChange}
                        value={credentials.password}
                    />
                </div>

                { loginState.loginError && <div style={{ color: 'red', fontSize: "12px" }}>{loginState.loginErrorMessage}</div>}
                    
                <button type='submit' style={{backgroundColor: hoverColor}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Log in</button>

                

                <Link style={{marginBottom: "40px", textDecoration: "none", color: "grey", cursor: "pointer"}}>forgot password?</Link>
                
            </form>

            <div style={{marginTop: "20px"}}>
                Don't have an account? <Link to={"/"} style={{textDecoration: "none", color: "#2da9fc", cursor: "pointer"}}>Sign up</Link>
            </div>
        </div>
    );
}

export default LoginPage;