import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class CommentBox extends Component {
  state = {
    comment: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="add comment..."
            onChange={(e) => this.setState({ comment: e.target.value })}
            value={this.state.comment}
          />
          <button>SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
