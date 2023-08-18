import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

const Post = (props) => {
  const handleClick = () => {
    props.deletePost(props.post.id);
    props.history.push('/');
  };

  const post = props.post ? (
    <div className="container">
      <h4>{props.post.title}</h4>
      <p>{props.post.body}</p>
      <div className="center">
        <button className="btn grey" onClick={handleClick}>
          Delete Post
        </button>
      </div>
    </div>
  ) : (
    <div className="center">Loading post...</div>
  );

  return post;
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
