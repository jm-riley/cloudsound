import React from 'react';
import { withRouter } from 'react-router-dom';
import LoadingModal from './loading_modal';

class SongUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      songFile: '',
      songPhoto: null,
      photoURL: null,
      songPicked: false,
      loading: false
    };
  }

  handleFile(e) {
    if (e.currentTarget.files.length) {
      this.setState({ songFile: e.currentTarget.files[0], songPicked: true });
    }
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
    this.setState({ loading: true });
    const { currentUser } = this.props;
    const { title, description, songFile, songPhoto } = this.state;
    e.preventDefault();
    const formData = new FormData();
    formData.append('song[title]', title);
    formData.append('song[description]', description);
    if (songPhoto) {
      formData.append('song[song_photo]', songPhoto);
    }
    formData.append('song[song_file]', songFile);
    this.props.upload(formData).then(song => {
      this.props.history.push(`/${currentUser}/${song.song.id}`);
    });
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.clearErrors();
    $('.additional-form-container').addClass('form-slidedown');
    setTimeout(() => {
      this.setState({
        songPicked: false,
        title: '',
        description: '',
        songFile: '',
        songPhoto: '',
        photoURL: null
      });
    }, 200);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    const { errors } = this.props;
    const imagePreview = this.state.photoURL ? (
      <img src={this.state.photoURL} alt="song" />
    ) : (
      <div className="empty-photo" />
    );
    let additionalForm;
    if (this.state.songPicked) {
      additionalForm = (
        <div className="additional-form-container form-slideup">
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
                  accept="image/jpg, image/jpeg, image/png, image/tiff"
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
                  placeholder={this.state.songFile.name}
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

          <button onClick={this.handleCancel.bind(this)} className="loginButton">
            Cancel
          </button>
          <input type="submit" className="signupButton" value="Save" />
        </div>
      );
    }
    return (
      <div className="song-upload-container">
        {errors && (
          <ul className="form-errors">
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        )}
        <form className="song-upload-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="song-file-upload">
            <h2>Upload your song</h2>
            <input
              id="file"
              type="file"
              onChange={this.handleFile.bind(this)}
              className="inputfile"
              accept="audio/wav, audio/aiff, audio/flac, audio/mp3, audio/alac"
              value=""
            />
            <label htmlFor="file">choose a file</label>
            <p>Provide FLAC, WAV, ALAC or AIFF for best audio quality.</p>
          </div>
          {additionalForm}
        </form>
        {this.state.loading && <LoadingModal />}
      </div>
    );
  }
}

export default withRouter(SongUploadForm);
