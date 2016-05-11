/*
  About
*/
import React from 'react'
import { Link } from 'react-router'

const About = () => {
  
  return {
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

}

export default About;