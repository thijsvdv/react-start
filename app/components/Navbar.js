import React from 'react';
import { Link } from 'react-router'

const Navbar = () => {
  return {
    render() {
      return (
        <div className="navbar">
          <ul role="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      )
    }
  }
}

export default Navbar;