import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{paddingLeft: '100px', paddingRight: '100px'}}>
        <div className="container-fluid">
          <p className="navbar-brand">
            <Link to='/'>
              <img src="./adoptUs.png" alt="logo" width="80" height="80" />
            </Link>
          </p>
          <div className="">
            <ul className="navbar-nav mb-2-lg-0">
              <li className="nav-item">
                  <p className="content nav-link" style={{fontSize: '20px'}}><i className="fa fa-heart-o"></i></p>
              </li>
              <li className="nav-item pt-1" style={{marginLeft: '20px', marginRight: '15px'}}>
                <p className="content nav-link">Sign In</p>
              </li>
              <li className="nav-item pt-1">
                <p className="content nav-link">Sign Up</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}