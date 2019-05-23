import React from 'react';

class SongUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      songFile: null,
      songPhoto: null,
      photoURL: null,
      songPicked: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFile(e) {
    this.setState({ songFile: e.currentTarget.files[0] });
    this.setState({ songPicked: true });
  }

  handlePhoto(e) {
    e.persist();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    // debugger;
    fileReader.onloadend = () => {
      // debugger;
      this.setState({ songPhoto: file, photoURL: fileReader.result });
    };
    if (file) {
      // debugger;
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('song[title]', this.state.title);
    debugger;
    formData.append('song[description]', this.state.description);
    formData.append('song[song_file]', this.state.songFile);
    formData.append('song[song_photo]', this.state.songPhoto);
    // debugger;
    this.props.uploadSong(formData);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    const imagePreview = this.state.photoURL ? (
      <img src={this.state.photoURL} />
    ) : (
      <div className="empty-photo" />
    );
    let additionalForm;
    if (this.state.songPicked) {
      additionalForm = (
        <div className="additional-form-container">
          <div className="additional-form">
            <div className="song-photo-container">
              <div className="photo-container">
                {imagePreview}
                <input
                  id="photo"
                  type="file"
                  onChange={this.handlePhoto.bind(this)}
                  className="inputfile"
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
          <input type="submit" className="signupButton" value="Save" />
        </div>
      );
    }
    return (
      <div className="song-upload-container">
        <form className="song-upload-form" onSubmit={this.handleSubmit}>
          <div className="song-file-upload">
            <h2>Upload your song</h2>
            <input
              id="file"
              type="file"
              onChange={this.handleFile.bind(this)}
              className="inputfile"
            />
            <label htmlFor="file">choose a file</label>
            <p>Provide FLAC, WAV, ALAC or AIFF for best audio quality.</p>
          </div>
          {additionalForm}
        </form>
      </div>
    );
  }
}

export default SongUploadForm;
