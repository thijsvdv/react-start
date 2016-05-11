/*
  Post
*/
import React from 'react';

const Post = () => {
  return {

    render() {
      const posts = this.props.posts;

      if(posts[this.props.params.postid] !== undefined) {
        const post = posts[this.props.params.postid];

        return (
          <div className="">
            <h1>{post.title}</h1>
            <p>Id: {post.id}</p>
            <p>User: {post.userId}</p>
            <p>{post.body}</p>
          </div>
        )
      } else {
        return <div>No post selected</div>
      }
    }

  }
}

export default Post;