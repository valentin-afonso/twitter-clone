import React from 'react'
import './Post.css'
import Avatar from '@mui/material/Avatar';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import IosShareIcon from '@mui/icons-material/IosShare';

function Post({
    displayName,
    username,
    verified,
    text,
    avatar,
    image
}) {
    return (
        <div className='post'>
            <div className='post__avatar'>
                <Avatar alt="Remy Sharp" src={avatar} />
            </div>
            <div className='post__body'>
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}
                            <span className='post__headerSpecial'>
                                {verified && <VerifiedIcon className='post__badge' />}
                                {username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post__footer">
                    < ChatBubbleOutlineIcon fontSize='small' />
                    < FavoriteBorderIcon fontSize='small' />
                    < RepeatIcon fontSize='small' />
                    < IosShareIcon fontSize='small' />
                </div>
            </div>
        </div>
    )
}

export default Post