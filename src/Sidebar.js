import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';

function Sidebar() {
    return (
        <div className='sidebar'>
            {/* twitter icon */}
            <TwitterIcon className='sidebar__twitterIcon' />
            {/* Sidebar menu */}
            <SidebarOption active text="Home" Icon={HomeIcon} />
            <SidebarOption text="Explore" Icon={SearchIcon} />
            <SidebarOption text="Notification" Icon={NotificationsIcon} />
            <SidebarOption text="Messages" Icon={EmailIcon} />
            <SidebarOption text="Signets" Icon={BookmarkIcon} />
            <SidebarOption text="List" Icon={FeaturedPlayListIcon} />
            <SidebarOption text="Profil" Icon={AccountCircleIcon} />
            <SidebarOption text="More" Icon={MoreVertIcon} />
            {/* Tweet button */}
            <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button >
        </div >
    )
}

export default Sidebar
