import React, { useState, useEffect } from 'react';
import './Feed.css';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './utils/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

function Feed() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = collection(db, 'posts');
        const data = await getDocs(response);
        data.docs.forEach(item => {
            setPosts([...posts, item.data()])
        });
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className='feed'>
            {/* Header */}
            <div className='feed__header'>
                <h2>Home</h2>
                <AutoAwesomeIcon />
            </div>
            {/* TweeetBox */}
            <TweetBox />
            {/* Post */}
            {
                posts.map((post, id) => {
                    return (
                        <div key={id}>
                            <Post
                                displayName={post.displayName}
                                username={post.username}
                                verified={post.verified}
                                text={post.text}
                                avatar={post.avatar}
                                image={post.image}
                            />
                        </div>

                    );

                })
            }

        </div>
    )
}

export default Feed