import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserDetails } from '../../redux/actions/userActions';
import "./EditProfile.css"
import AWS from "aws-sdk";
import { useNavigate } from 'react-router-dom';

const AWS_ACCESSKEYID = process.env.REACT_APP_AWS_ACCESSKEYID

const AWS_SECRETKEYID = process.env.REACT_APP_AWS_SECRETKEYID

const AWS_REGION = process.env.REACT_APP_AWS_REGION

const EditProfile = () => {

    // const checkState = useSelector(state => state.check) 
    // const [username, setUsername] = useState("");
    const loggedInUser = useSelector(state => state.auth.loggedInUser)
    const [bio, setBio] = useState(loggedInUser.bio);
    const [fullname, setFullname] = useState(loggedInUser.name);
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    let [file,setFile] = useState("");
    let [imgLink,setImgLink] = useState("");

    const navigate = useNavigate()
    

    const [showChangePhoto, setShowChangePhoto] = useState(false);


    useEffect(() => {

        if(file){
            uploadFile()
        }

    },[file])


    AWS.config.update({
        accessKeyId: AWS_ACCESSKEYID,
        secretAccessKey: AWS_SECRETKEYID,
        region: AWS_REGION
    })

    function handleChangePhoto(){

        setShowChangePhoto(!showChangePhoto);

    }

    function handleUploadPhoto(){

        const userDetails = {

            profilePicture: imgLink

        }

        console.log(imgLink)

        setShowChangePhoto(false);

        dispatch(updateUserDetails(userDetails, token))

    }

    function handleRemoveCurrentPhoto(){

        const userDetails = {

            profilePicture: "https://socila-media-app.s3.ap-south-1.amazonaws.com/defaultProfilePicture.png"

        }

        setShowChangePhoto(false);
        setImgLink("")

        dispatch(updateUserDetails(userDetails, token))
    }

    function handleCancel(){
        setShowChangePhoto(false);
        setImgLink("")

    }

    function handleSubmit(){

        if(loggedInUser.name !== fullname){

            const userDetails = {
                name: fullname
            }

            dispatch(updateUserDetails(userDetails,token))

        }

        if(loggedInUser.bio !== bio){

            const userDetails = {
                bio: bio
            }

            dispatch(updateUserDetails(userDetails,token))
        }

        navigate("/profile")

    }


    




    async function uploadFile(){
        
        const s3 = new AWS.S3()
        let filename = `${Date.now()}-${file.name}`
        try{
            const response = await s3.putObject({
                Bucket: "socila-media-app",
                Key: filename,
                Body: file,
                ContentType: file.type,
            }).promise() 
            
           setImgLink(`https://socila-media-app.s3.ap-south-1.amazonaws.com/${filename}`)

        }
        catch(error){
            console.log(error.message)
        }
    }

    return (
        <div className='edit-profile'>
            <div className='edit-profile-heading'>
                <h2>Edit Profile</h2>
            </div>
            <div className='edit-profile-update-photo-div'>
                <div>
                    <span><img src={loggedInUser.profilePicture} className='edit-profile-profile-pic'/></span>
                    <span><p className='edit-profile-username'>{loggedInUser.username}</p></span>
                </div>
                
                <span className='btn'><button className='change-photo-btn' onClick={handleChangePhoto}>Change Photo</button></span>
            </div>
            <div className='input-group' style={{display: "flex", flexDirection:"column"}}>
                <label style={{alignSelf: "start", color: "gray"}}>Name</label>
                <input type='text'
                    onChange={(e) => setFullname(e.target.value)}
                    value={fullname}
                />
            </div>
            {/* <div className='input-group'>
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
            </div> */}
            <div className='input-group' style={{display: "flex", flexDirection:"column"}}>
                <label style={{alignSelf: "start", color: "gray"}}>Bio</label>
                <textarea className='input-group-bio' type='text'
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                    
                />
            </div>

            <button onClick={handleSubmit} className='submit'>Submit</button>

            {
                showChangePhoto && (
                    <div className="modal" id="modal">
                        <div className="modal-content">
                        <h2>Change Profile Photo</h2>
                        <div className="upload-photo">
                            <label for="photoInput" className="upload-label">Select Photo</label>
                            <input type="file" id="photoInput" style={{display: "none"}} onChange={(e) => setFile(e.target.files[0])}/>
                        </div>
                        {
                            imgLink && (
                                <div>
                                    <img className='uploaded-photo' src={imgLink} alt="image" />
                                    <button onClick={handleUploadPhoto}>Upload</button>
                                </div>
                                )
                        }
                        <button id="removePhotoBtn" onClick={handleRemoveCurrentPhoto}>Remove Current Photo</button>
                        <button id="cancelBtn" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
                )
            }
        </div>
    );
}

export default EditProfile;