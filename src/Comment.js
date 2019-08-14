// add Comment component here
import React, { Comment } from 'react';
class Comment extends Component {
  render() {
    return (
      <div className="comment">{this.props.commentText}</div>
    )
  }
}

export default Comment;