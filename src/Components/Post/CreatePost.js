import React, { useState, useEffect} from 'react';
import AWS from "aws-sdk";
import { useDispatch, useSelector } from 'react-redux'; 
import "./CreatePost.css"
import { createPost } from '../../redux/actions/postActions';

const CreatePost = ({show,setShow}) => {

    let [file,setFile] = useState("");
    let [imgLink,setImgLink] = useState("");
    const [postText, setPostText] = useState('');
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)


    useEffect(() => {

        if(file){
            uploadFile()
        }

    },[file])

    AWS.config.update({
        accessKeyId: process.env.AWS_ACCESSKEYID,
        secretAccessKey: process.env.AWS_SECRETKEYID,
        region: process.env.AWS_REGION
    })

    function implementCreatePost(){

        const postData = {
            image: imgLink,
            textBody: postText,
        }

        dispatch(createPost(postData,token))
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

        
        <div className={`imageupload ${show ? 'visible' : 'hidden'}`}>
            <div id="uploadModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={(e) => setShow(false)}>&times;</span>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} placeholder='Select from computer'/>
                    {
                        imgLink && <img src={imgLink} alt="image" />
                    }
                    <textarea
                        id="postText"
                        value={postText}
                        onChange={(e) => setPostText(e.target.value)}
                        placeholder="Write something about the post..."
                        rows={4}
                        cols={50}
                    />
                    <button onClick={implementCreatePost}>Post</button>
                </div>
            </div>
            

            
        </div>
    )
}

export default CreatePost;