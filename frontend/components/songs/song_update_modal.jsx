import React from 'react';
import SongUpdateForm from './song_update_form_container';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

const SongUpdateModal = ({ song, closeModal, modal }) => {
  if (!modal) return null;

  const handleClick = () => {
    $('.update-form-content').addClass('form-slidedown');
    $('.modal-container').addClass('fadeout');
    setTimeout(() => {
      closeModal();
    }, 400);
  };
  return (
    <div className="modal-container" onClick={handleClick}>
      <button className="modal-close">
        <i className="far fa-times-circle" />
      </button>
      <div className="update-form-content form-slideup" onClick={e => e.stopPropagation()}>
        <SongUpdateForm song={song} />
      </div>
    </div>
  );
};

const mstp = state => ({
  modal: state.ui.modal
});

const mdtp = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mstp,
  mdtp
)(SongUpdateModal);
