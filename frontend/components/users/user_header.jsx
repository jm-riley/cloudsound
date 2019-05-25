import React from 'react';
import AvatarUpload from './avatar_upload';

export default ({ user }) => {
  return (
    <div className="user-detail-header">
      <div className="user-avatar-container">
        <div className="user-avatar">{user.avatarUrl && <img src={user.avatarUrl} />}</div>
        {!user.avatarUrl && <AvatarUpload user={user} />}
      </div>
      <div className="user-detail-username">
        <span>{user.username}</span>
      </div>
    </div>
  );
};
