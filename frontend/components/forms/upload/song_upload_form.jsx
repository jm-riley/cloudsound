import React from 'react';

class SongUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: '', songFile: null, songPhoto: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFile(e) {
    this.setState({ songFile: e.currentTarget.files[0] });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('song[title]', this.state.title);
    debugger;
    formData.append('song[description]', this.state.description);
    formData.append('song[song_file]', this.state.songFile);
    debugger;
    this.props.uploadSong(formData);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div className="song-upload-container">
        <form className="song-upload-form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title} onChange={this.update('title')} />
          <input type="text" value={this.state.description} onChange={this.update('description')} />
          <input type="file" onChange={this.handleFile.bind(this)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SongUploadForm;
