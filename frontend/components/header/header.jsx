import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownOpen: false };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  render() {
    const { currentUser, logout } = this.props;
    const dropdownList = (
      <ul className="dropdown-list">
        <li>About us</li>
        <li>Legal</li>
        <li>Copyright</li>
        <li>
          <Link to="/" onClick={logout}>
            Logout
          </Link>
        </li>
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
            </div>
            <div className="header-link">
              <Link to="/discover">Home</Link>
            </div>
          </div>
          <div className="header-right">
            <div className="header-content">Upload</div>
            <div className="user-artwork">
              <img src={window.userArtworkURL} alt="" />
            </div>
            <div className="header-content username">{currentUser && currentUser.username}</div>

            <div className={`header-content header-dropdown ${dropdownBG}`} onClick={this.toggleDropdown}>
              <div className="dropdown-toggle">
                <i className="fas fa-ellipsis-h" />
              </div>
              {this.state.dropdownOpen && dropdownList}
            </div>
            {/* <Link to="/">
          <button onClick={logout}>Logout</button>
        </Link> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

// export default ({ currentUser, logout }) => (

// );
