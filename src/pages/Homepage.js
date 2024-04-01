import React, { useEffect, useState, useRef } from 'react';
import Suggestions from '../Components/Suggestions/Suggestions';
import "./Homepage.css";
import Post from '../Components/Post/Post';
import { useSelector, useDispatch } from 'react-redux';
import { clearFeedPosts, getFeedPosts } from '../redux/actions/postActions';

const Homepage = () => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const posts = useSelector((state) => state.post.feedPosts);
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    
    const postContainerRef = useRef(null);

    useEffect(() => {
        dispatch(getFeedPosts(token, page));
    }, [token, page, dispatch]);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleScroll = () => {
        const { current } = postContainerRef;
        if (current) {
            const { scrollTop, scrollHeight, clientHeight } = current;
            if (scrollTop + clientHeight === scrollHeight && !loading) {
                setLoading(true);
                setPage(prevPage => prevPage + 1);
            }
        }
    };

    useEffect(() => {
        if (postContainerRef.current) {
            postContainerRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (postContainerRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                postContainerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, [handleScroll]);

    useEffect(() => {
        setLoading(false);
    }, [posts]);

    // Clear feedPosts when navigating away from the homepage
    useEffect(() => {
        dispatch(clearFeedPosts());
    }, [dispatch]);


    return (
        <div className='homepage' ref={postContainerRef}>
            <div className='post-container'>
                {posts && posts.map((post, index) => {
                    if (posts.length === index + 1) {
                        return (
                            <div key={post._id}>
                                <Post postData={post} />
                            </div>
                        );
                    } else {
                        return <Post postData={post} key={post._id} />;
                    }
                })}
                {loading && <p>Loading...</p>}
            </div>
            <Suggestions />
        </div>
    );
};

export default Homepage;
