import React from 'react';
import { connect } from 'react-redux';
import NewUserUploadPage from './new_user_upload_page';

class UploadPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;
    if (!currentUser) {
      return <NewUserUploadPage />;
    }
    return <div>upload</div>;
  }
}

const mstp = state => ({
  currenUser: state.users[state.session.id]
});

export default connect(mstp)(UploadPage);
