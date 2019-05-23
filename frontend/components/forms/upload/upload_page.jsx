import React from 'react';
import { connect } from 'react-redux';
import NewUserUploadPage from './new_user_upload_page';
import SongUploadForm from './song_upload_form_container';
import { openModal } from '../../../actions/modal_actions';

const UploadPage = ({ currentUser, openModal }) => {
  if (!currentUser) {
    return <NewUserUploadPage openModal={openModal} />;
  }
  return (
    <div className="upload-main-container">
      <SongUploadForm />
    </div>
  );
};

const mstp = state => {
  // debugger;
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mdtp = dispatch => ({
  openModal: type => dispatch(openModal(type))
});

export default connect(
  mstp,
  mdtp
)(UploadPage);
