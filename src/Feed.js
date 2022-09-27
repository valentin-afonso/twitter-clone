import React from 'react'
import './Feed.css'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed() {
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
            <Post />
        </div>
    )
}

export default Feed