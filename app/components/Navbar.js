import React from 'react'
import { Link } from 'react-router'
import '../styles/navbar.css'
import Menu from './Menu'

const Navbar = () => {
  return {
    render() {
      return (
        <div className="navbar">
          <Menu />
        </div>
      )
    }
  }
}

export default Navbar;


// <ul role="nav">
//   <li><Link to="/">Home</Link></li>
//   <li><Link to="/users">Users</Link></li>
//   <li><Link to="/events">Events</Link></li>
//   <li><Link to="/about">About</Link></li>
// </ul>