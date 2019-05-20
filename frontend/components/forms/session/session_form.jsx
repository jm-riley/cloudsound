import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleSumbit(e) {
    e.preventDefault();
    this.props.action(this.state).then(user => this.props.history.push('/'));
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    const { formType, errors } = this.props;
    const submitText = formType === 'login' ? 'login' : 'signup';
    return (
      <div>
        {errors && (
          <ul>
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        )}
        <form>
          <input type="text" value={this.state.username} onChange={this.update('username')} />
          <input type="password" value={this.state.password} onChange={this.update('password')} />
          <button onClick={this.handleSumbit}>{submitText}</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
