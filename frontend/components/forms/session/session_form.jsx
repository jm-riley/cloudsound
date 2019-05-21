import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleSumbit(e) {
    e.preventDefault();
    debugger
    if (!this.props.errors) {
      this.props.closeModal();
    }
    this.props.action(this.state).then(user => this.props.history.push('/discover'));
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    const { formType, errors } = this.props;
    const submitText = formType === 'login' ? 'Sign in' : 'Create account';
    return (
      <div className="form-container">
        {errors && (
          <ul className="form-errors">
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        )}
        <form className="session-form">
          <div className="input-container">
            <input
              className="form-input"
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Your username"
            />
          </div>
          <div className="input-container">
            <input
              className="form-input"
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Your password"
            />
          </div>
          <button onClick={this.handleSumbit} className="signupButton">
            {submitText}
          </button>
        </form>
        <div>
          <p>
            We may use your information for updates and tips on CloudSound's products and services,
            and for activities notifications. You can unsubscribe for free at any time.
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
