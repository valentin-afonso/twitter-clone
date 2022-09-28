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
    image,
    avatar
}) {
    return (
        <div className='post'>
            <div className='post__avatar'>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
            <div className='post__body'>
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Afonso Valentin {" "}
                            <span className='post__headerSpecial'>
                                <VerifiedIcon className='post__badge' />
                                @valentinafonso
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build a Twitter clone with Reactjs</p>
                    </div>
                </div>
                <img src="https://picsum.photos/500/300" alt="" />
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