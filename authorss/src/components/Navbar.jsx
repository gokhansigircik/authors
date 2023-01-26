import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <navbar className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <span className="navbar-brand">Authors List</span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className='nav-link' to='/authors'>All Authors</Link>
            <Link className='nav-link' to='/authors/new'>New Authors</Link>
            
          </li>
        </ul>
      </div>
    </navbar>
  )
}

export default Navbar;