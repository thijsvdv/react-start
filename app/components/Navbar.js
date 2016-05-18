import React from 'react'
import { Link } from 'react-router'
import '../styles/navbar.css'
import Menu from './Menu'

const Navbar = () => {
  return {
    render () {
      return (
        <div className="navbar">
          <Menu />
        </div>
      )
    }
  }
}

export default Navbar;
