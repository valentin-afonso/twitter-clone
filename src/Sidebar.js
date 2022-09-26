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

function Sidebar() {
    return (
        <div className='sidebar'>
            {/* twitter icon */}
            <TwitterIcon />
            {/* Sidebar menu */}
            <SidebarOption text="Home" Icon={HomeIcon} />
            <SidebarOption text="Explore" Icon={SearchIcon} />
            <SidebarOption text="Notification" Icon={NotificationsIcon} />
            <SidebarOption text="Messages" Icon={EmailIcon} />
            <SidebarOption text="Signets" Icon={BookmarkIcon} />
            <SidebarOption text="List" Icon={FeaturedPlayListIcon} />
            <SidebarOption text="Profil" Icon={AccountCircleIcon} />
            <SidebarOption text="More" Icon={MoreVertIcon} />
            {/* Tweet button */}
        </div>
    )
}

export default Sidebar
