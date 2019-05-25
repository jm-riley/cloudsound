import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';

class AvatarUpload extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { user } = this.props;
    const file = e.currentTarget.files[0];
    const formData = new FormData();
    formData.append('user[avatar]', file);
    this.props.update({ user: formData, id: user.id });
  }

  render() {
    return (
      <div>
        <input
          id="photo"
          type="file"
          onChange={this.handleSubmit.bind(this)}
          className="inputfile"
          accept="image/jpg, image/jpeg, image/png, image/tiff"
          value=""
        />
        <label htmlFor="photo" className="photo-button">
          <i className="fas fa-camera" />
          Upload image
        </label>
      </div>
    );
  }
}

const mdtp = dispatch => ({
  update: user => dispatch(updateUser(user))
});

export default connect(
  null,
  mdtp
)(AvatarUpload);
