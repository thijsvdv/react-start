/*
  Home
*/
import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component {

  renderPost(key) {
    return <li key={key}><Link to={`/post/${key}`}>{this.props.posts[key].title}</Link></li>
  }

  render() {
    return (
      <div className="">
        <h1>React start</h1>
        <ol>
        {Object.keys(this.props.posts).map(this.renderPost.bind(this))}
        </ol>
      </div>
    )
  }

}

export default Home;