import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import Chat from '@material-ui/icons/Chat';
import MoreVert from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SidebarChats from './SidebarChats';
function Sidebar() {
  return <div className="sidebar">
    <div className="sidebar__header">
      <Avatar src="https://alrigh.com/wp-content/uploads/2020/06/10-Midoriya-Izuku-profile-picture-1024x1018.jpg" />
      <div className="sidebar__headerRight">
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <Chat />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
    </div>

    <div className="sidebar__search">
      <div className="sidebar__searchContainer">
        <SearchOutlined />
        <input placeholder="Search or start new chat" type="text" />
      </div>
    </div>

    <div className="sidebar__chats">
      <SidebarChats />
      <SidebarChats />
      <SidebarChats />
    </div>
  </div>;
}

export default Sidebar;
