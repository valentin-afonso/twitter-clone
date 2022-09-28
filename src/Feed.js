import React, { useState, useEffect } from 'react';
import './Feed.css';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);
    {
        /*
        useEffect(() => {
            db.collection('posts').onSnapshot(snapshot => (
                setPosts(snapshot.docs.map(doc => doc.data()))
            ))
        }, []);
        */
    }

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
                /*
                {
                    posts.map(post => (
                        <Post
                            displayName={post.displayName}
                            username={post.username}
                            verified={post.verified}
                            text={post.text}
                            avatar={post.avatar}
                            image={post.image}
                        />
                    ))
                }
                */
            }

        </div>
    )
}

export default Feed