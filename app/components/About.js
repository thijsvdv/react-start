/*
  About
*/
import React from 'react'
import { Link } from 'react-router'

class About extends React.Component {

  render() {
    return (
      <div className="">
        <h1>About</h1>
        <Link to="/about/team">Team</Link>
        {this.props.children}
      </div>
    )
  }

}

export default About;