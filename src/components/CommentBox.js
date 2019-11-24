import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends Component {
  state = { comment: "" };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button onSubmit={this.handleSubmit}> Submit </button>
          </div>
        </form>
        <button className='fetch-comments' onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);

    this.setState({ comment: "" });
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };
}

export default connect(null, actions)(CommentBox);
