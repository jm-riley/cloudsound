import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownOpen: false };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  toggleDropdown() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  handleLogout() {
    this.props.logout().then(() => this.props.history.push('/'));
  }

  render() {
    const { currentUser, openModal } = this.props;
    const dropdownList = (
      <ul className="dropdown-list">
        <li>About us</li>
        <li>Legal</li>
        <li>Copyright</li>
        {!!currentUser && <li onClick={this.handleLogout}>Logout</li>}
      </ul>
    );
    let dropdownBG;
    if (this.state.dropdownOpen) {
      dropdownBG = 'dropdown-open';
    }
    return (
      <div className="header-container">
        <div className="header">
          <div className="header-left">
            <div className="logo">
              <i className="fab fa-mixcloud" />
              <p>CLOUDSOUND</p>
            </div>
            <div className="header-link">
              <Link to="/discover">Home</Link>
            </div>
          </div>
          <div className="header-right">
            {!currentUser && (
              <div className="hero-buttons-header">
                <button className="loginButton" onClick={() => openModal('login')}>
                  Sign in
                </button>
                <button className="signupButton" onClick={() => openModal('signup')}>
                  Create account
                </button>
                {/* <Link to="/signup" className="signupButton">
            Create Account
          </Link> */}
              </div>
            )}
            <div className="upload-link">
              <Link to="/upload">Upload</Link>
            </div>
            {!!currentUser && (
              <div className="user-artwork">
                <img src={window.userArtworkURL} alt="" />
              </div>
            )}
            <div className="header-content username">{currentUser && currentUser.username}</div>

            <div
              className={`header-content header-dropdown ${dropdownBG}`}
              onClick={this.toggleDropdown}
            >
              {this.state.dropdownOpen && <div>{dropdownList}</div>}
              <div className="dropdown-toggle">
                <i className="fas fa-ellipsis-h" />
              </div>
            </div>
            {/* <Link to="/">
          <button onClick={logout}>Logout</button>
        </Link> */}
          </div>
        </div>
        {this.state.dropdownOpen && (
          <div className="dropdown-modal" onClick={this.toggleDropdown} />
        )}
      </div>
    );
  }
}

export default withRouter(Header);

// export default ({ currentUser, logout }) => (

// );
