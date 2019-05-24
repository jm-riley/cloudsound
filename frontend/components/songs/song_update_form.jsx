import React from 'react';
import { withRouter } from 'react-router-dom';

class SongUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    const { song } = this.props;
    this.state = { title: song.title, description: song.description };
    this.handleClose = this.handleClose.bind(this);
  }

  handlePhoto(e) {
    e.persist();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ songPhoto: file, photoURL: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    this.props.clearErrors();
    const { currentUser, song } = this.props;
    const { title, description, songPhoto } = this.state;
    e.preventDefault();
    const formData = new FormData();
    formData.append('song[title]', title);
    formData.append('song[description]', description);
    if (songPhoto) {
      formData.append('song[song_photo]', songPhoto);
    }
    this.props.update({ song: formData, id: song.id }).then(this.handleClose);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleClose() {
    if (!this.props.errors.length) {
      this.props.clearErrors();
      $('.song-upload-form-modal').addClass('form-slidedown');
      setTimeout(() => {
        this.props.closeModal();
      }, 500);
    }
  }

  render() {
    const { errors } = this.props;
    const imagePreview = this.state.photoURL ? (
      <img src={this.state.photoURL} alt="song" />
    ) : (
      <div className="empty-photo" />
    );
    return (
      <form className="song-upload-form-modal" onSubmit={this.handleSubmit.bind(this)}>
        <div className="update-form-container">
          {errors && (
            <ul className="update-form-errors">
              {errors.map((error, i) => (
                <li key={i}>{error}</li>
              ))}
            </ul>
          )}
          <div className="additional-form">
            <div className="song-photo-container">
              <div className="photo-container">
                {imagePreview}
                <input
                  id="photo"
                  type="file"
                  onChange={this.handlePhoto.bind(this)}
                  className="inputfile"
                  value=""
                />
                <label htmlFor="photo" className="photo-button">
                  <i className="fas fa-camera" />
                  Upload an image
                </label>
              </div>
            </div>
            <div className="song-info-container">
              <div className="song-info">
                <label>Title</label>
                <br />
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  placeholder={this.props.song.name}
                />
              </div>
              <div className="song-info">
                <label>Description</label>
                <br />
                <textarea
                  placeholder="Describe your track"
                  value={this.state.description}
                  onChange={this.update('description')}
                />
              </div>
            </div>
          </div>
          {/* <button onClick={this.handleCancel.bind(this)} className="loginButton">
            Cancel
          </button> */}
          <input type="submit" className="updateModalButton" value="Save" />
        </div>
      </form>
    );
  }
}

export default withRouter(SongUpdateForm);
