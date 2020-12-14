import React from 'react';
import { Link } from 'react-router-dom';
import SignInPage from '../pages/SignIn'
import SignUpPage from '../pages/SignUp'


export default function Navbar() {
  return (
    <>
      <div className="modal fade" id="Sing-in-Modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog-centered modal-fullscreen">
            <div style={{ backgroundColor: 'rgb(0, 0, 0, 0.5)' }} className="modal-content">
              <SignInPage/>
            </div>
        </div>
      </div>

      <div className="modal fade" id="Sing-up-Modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog-centered modal-fullscreen">
            <div style={{ backgroundColor: 'rgb(0, 0, 0, 0.5)' }} className="modal-content">
              <SignUpPage/>
            </div>
        </div>
      </div>

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
                <Link data-bs-toggle="modal" data-bs-target="#Sing-in-Modal" className="content nav-link">Sign In</Link>
              </li>
              <li className="nav-item pt-1">
                <Link data-bs-toggle="modal" data-bs-target="#Sing-up-Modal" className="content nav-link">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}