import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

export class Navbar extends Component {
  render() {
    return (
      <nav className={`navbar navbar-expand-lg bg-body-tertiary ${style.night}`}>
        <div className="container-fluid ms-5">
          <Link className={`navbar-brand ms-2 fs-3 fw-bold ${style.twhite}`} to='/'>START BOOTSTRAP</Link>
          <div className="collapse navbar-collapse me-1" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto me-5 my-4">
              <Link className={`nav-link me-4 fs-6 fw-bold ${style.whiteWithHover}`} current="page" to="/Portfolio">PORTFOLIO</Link>
              <Link className={`nav-link me-4 fs-6 fw-bold ${style.whiteWithHover}`} to="/About">ABOUT</Link>
              <Link className={`nav-link me-4 fs-6 fw-bold ${style.whiteWithHover}`} to="/Contact">CONTACT</Link>
            </div>
          </div>
        </div>
      </nav>
      
    )
  }
}

export default Navbar