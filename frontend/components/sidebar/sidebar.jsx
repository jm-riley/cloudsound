import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ListeningHistory from './listening_history';

const Sidebar = ({ currentUser }) => {
  const noUserSidebar = (
    <div className="no-user-sidebar">
      <div className="no-user-flex">
        <div className="hey-hey">
          HEY
          <br />
          HEY
        </div>
        <div className="no-user-sidebar-text">
          <h3>Are you an audio creator?</h3>
          <p>Share your audio with the world for free on CloudSound</p>
        </div>
      </div>
      <Link to="/upload">
        <div className="upload-audio-link">Upload your audio</div>
      </Link>
    </div>
  );
  let sidebarContent = currentUser ? <ListeningHistory /> : noUserSidebar;

  return <div className="sidebar-container">{sidebarContent}</div>;
};

const mstp = state => ({
  currentUser: state.session.id
});

export default connect(mstp)(Sidebar);
