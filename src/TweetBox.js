import React from 'react'
import './TweetBox.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <input placeholder="What's happening" type="text" />
                </div>
                <input placeholder="Optional: Enter image URL" type="text" className='tweetBox__imageInput' />
                <Button className='tweetBox__tweetButton'>Tweet</Button >
            </form>
        </div>
    )
}

export default TweetBox