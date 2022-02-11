import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChats.css';

function SidebarChats() {
  return <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>this will be last message</p>
      </div>
  </div>;
}

export default SidebarChats;
