import React from 'react';
import SongUpdateForm from './song_update_form_container';
import { closeModal } from '../../actions/modal_actions';
import { clearSongErrors } from '../../actions/song_actions';
import { connect } from 'react-redux';

const SongUpdateModal = ({ song, closeModal, modal, clearErrors }) => {
  if (modal !== 'update') return null;

  const handleClick = () => {
    clearErrors();
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
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearSongErrors())
});

export default connect(
  mstp,
  mdtp
)(SongUpdateModal);
