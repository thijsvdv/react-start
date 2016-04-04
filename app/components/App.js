/*
  App
*/
import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {

  render() {
    return (
      <div className="">
        <ul role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }

}

export default App;