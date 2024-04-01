import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkDob, checkEmail, checkOtp, checkPassword, checkUsername, generateOtp, verifyOtp } from '../redux/actions/checkActions';
import { signup } from '../redux/actions/authActions';
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {  

    const dispatch = useDispatch();
    const checkState = useSelector(state => state.check)
    const checkAuth = useSelector(state => state.auth)
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [newdob, setNewdob] = useState("");
    const [fullname, setFullname] = useState('');
    const [hoverColor, setHoverColor] = useState("rgb(36, 168, 255)");
    const [fullnameSuccess, setFullnameSuccess] = useState(false);
    
    const [emailConfirmationForm, setEmailConfirmationForm] = useState(false);
    const [otp, setOtp] = useState("");

    if(checkAuth.signupSuccess){
        navigate('/homepage');
    }

    function handleMouseOver(){
        setHoverColor("#0072f5");
    }

    function handleMouseOut(){
        setHoverColor("rgb(36, 168, 255)");
    }

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDob(selectedDate);
        const formattedDate = formatDate(selectedDate);
        setNewdob(formattedDate)
    };

    // function to generate otp
    function implementResendcode(){

        dispatch(generateOtp(email))

    }

    // Function to format date from 'yyyy-mm-dd' to 'dd-mm-yyyy'
    const formatDate = (date) => {
        const [year, month, day] = date.split('-');
        return `${day}-${month}-${year}`;
    };

    function implementEmailConfirmationForm(e){
        e.preventDefault();
        dispatch(generateOtp(email))
        setEmailConfirmationForm(true);
    }

    function implementGoBack(e){
        e.preventDefault();
        setEmailConfirmationForm(false);
    }
    
 
   async function implementSignup(e){

        e.preventDefault();

        await dispatch(verifyOtp(otp, email));

        const newUser = {
            name: fullname,
            username: username,
            email: email,
            dob: newdob,
            password: password,
        }

        

        dispatch(signup(newUser));



    }


    useEffect(() => {

        // if user updates fullname then useEffect will run
        if(fullname){
            setFullnameSuccess(true);
        }else{
            setFullnameSuccess(false);
        }

        // if user updates password then useEffect will run
        if(password){
            dispatch(checkPassword(password));
        }

        // if user updates email then useEffect will run
        if(email){
            dispatch(checkEmail(email));
        }

        // if user updates username then useEffect will run
        if(username){
            dispatch(checkUsername(username));
        }

        if(newdob){
            dispatch(checkDob(newdob));
        }

        if(otp){
            dispatch(checkOtp(otp,email));
        }
        

    }, [fullname, password, email, username, newdob, otp, dispatch])

    return (
        <div className='signup-page'>
        
        { emailConfirmationForm ? 
            (
            <form onSubmit={implementSignup}>
                <img className='logo' src={require("../images/logo.png")} alt='logo'/>
                <h3 style={{fontSize: "16px", margin:"5px", width:"100%"}}>Enter the Confirmation Code we sent to {email}. </h3>
                <Link className='resendOtp' onClick={implementResendcode} style={{textDecoration:"none", color: "#2da9fc", cursor: "pointer", fontWeight: "600", fontSize:"16px"}}>Resend Code</Link>
                
                
                <div className='input-group' style={{gap: "0",marginBottom: "40px", marginTop:"30px"}}>
                    <input type='text' placeholder='Enter Confirmation Code'
                        onChange={(e) => setOtp(e.target.value)}
                        value={otp}
                    />
                    <div className='icon'>
                        {
                             checkState.checkOtpSuccess && (<box-icon color="grey" name='check-circle'></box-icon>)
                        }
                        {
                            checkState.checkOtpError && (<box-icon color="red" name='x-circle'></box-icon>)
                        }
                    </div>
                </div>
                
                { 
                    checkState.checkOtpSuccess ? 
                    (<button type='submit' className='Otpnext'>Next</button>)
                    : 
                    (<button type='submit' style={{marginBottom: "15px"}} disabled>Next</button>)
                }
                
                <button onClick={implementGoBack} style={{backgroundColor: hoverColor, marginBottom: "40px"}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Go back</button>
                
                
            </form>
            )
            :
            (
            <form onSubmit={implementEmailConfirmationForm}>
                <img className='logo' src={require("../images/logo.png")} alt='logo'/>
                <h3>Sign up to see photos from your friends</h3>
                <div className='input-group'>
                    <input type='email' placeholder='Email' 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                   <div className='icon'>
                        {
                            checkState.emailSuccess && (<box-icon color="grey" name='check-circle'></box-icon>)
                        }
                        {
                            checkState.emailError && (<box-icon color="red" name='x-circle'></box-icon>)
                        }
                    </div>
                </div>
                <div className='input-group'>
                    <input type='text' placeholder='Username'
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    <div className='icon'>
                        {
                            checkState.usernameSuccess && (<box-icon color="grey" name='check-circle'></box-icon>)
                        }
                        {
                            checkState.usernameError && (<box-icon color="red" name='x-circle'></box-icon>)
                        }
                    </div>
                </div>
                <div className='input-group'>
                    <input type='text' placeholder='Full Name'
                        onChange={(e) => setFullname(e.target.value)}
                        value={fullname}
                    />
                    <div className='icon'>
                        {
                            fullnameSuccess && (<box-icon color="grey" name='check-circle'></box-icon>)
                        }
                    </div>
                </div>
                <div className='input-group' style={{display: "flex", flexDirection: "column", color: "grey"}}>
                <label htmlFor='dob' style={{fontSize:"12px", alignSelf: "start", position: "relative", top:"5px"}}>Date of Birth</label>
                    <input type='date' style={{color: "grey"}}
                        onChange={handleDateChange}
                        value={dob}
                    />
                    <div style={{height:"5px", marginBottom:"8px"}}>
                    {
                        checkState.dobSuccess && (<p style={{color: "grey", fontSize: "12px"}}>You are {checkState.age} years old</p>)
                    }
                    {
                        checkState.dobError && (<p style={{color: "red", fontSize: "12px"}}>You must be at least 16 years old to register</p>)
                    }
                    </div>                    
                </div>
                <div className='input-group'>
                    <input type='password' placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <div className='icon'>
                        {
                            checkState.passwordSuccess && (<box-icon color="grey" name='check-circle'></box-icon>)
                        }
                        {
                            checkState.passwordError && (<box-icon color="red" name='x-circle'></box-icon>)
                        }
                    </div>
                </div>
                <div className='terms-policies'>
                    <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                </div>
                { 
                    (checkState.usernameSuccess && checkState.emailSuccess && checkState.passwordSuccess && fullnameSuccess && checkState.dobSuccess) ? 
                    (<button type='submit' style={{backgroundColor: hoverColor}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Sign Up</button>)
                    : 
                    (<button type='submit' disabled>Sign Up</button>)}
                
            </form>
            )
            }
            
            <div style={{marginTop: "20px"}}>
                Have an account? <Link to={"/login"} style={{textDecoration: "none", color: "#2da9fc", cursor: "pointer"}}>Log in</Link>
            </div>
        </div>
    )
}

export default SignupPage;