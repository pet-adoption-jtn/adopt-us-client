import React from 'react';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#fff', paddingLeft: '100px', paddingRight: '100px'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./Adopt.Us.png" alt="logo" width="70" height="70" />
          </a>
          <div className="">
            <ul className="navbar-nav mb-2-lg-0">
              <li className="nav-item">
                  <p className="content nav-link" style={{fontSize: '24px'}}><i className="fa fa-heart-o"></i></p>
              </li>
              <li className="nav-item pt-1">
                <p className="content nav-link">Login</p>
              </li>
              <li className="nav-item pt-1">
                <p className="content nav-link">Register</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="pt-3 text-center text-white d-flex nav-item" style={{justifyContent: 'space-evenly', backgroundColor: '#ce0d81'}}>
        <p className="side">ABOUT DOG ADOPTION</p>
        <p className="side">ABOUT CAT ADOPTION</p>
      </div>
    </>
  )
}