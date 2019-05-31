import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: '', songId: this.props.songId };
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ body: '' });
    this.props.createComment(this.state);
  }

  render() {
    return (
      <div className="comment-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            className="comment-input"
            placeholder="Write a comment"
            value={this.state.body}
            onChange={this.handleChange.bind(this)}
          />
          {/* <input type="submit" /> */}
        </form>
      </div>
    );
  }
}

export default CommentForm;
