import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchAllPets } from '../store/actions';
import SignInPage from '../pages/SignIn'
import SignUpPage from '../pages/SignUp'

export default function Navbar() {
  const history = useHistory()
  const { access_token, account } = useSelector(state => state)

  const dispatch = useDispatch()
  const goToMyPets = () => {
    history.push('/myPets')
  }

  const signOut = () => {
    dispatch({
      type: 'SET_ACCESS_TOKEN',
      payload: null
    })
    localStorage.clear()
    history.push('/')
  }

  const backToHome = () => {
    dispatch(fetchAllPets())
  }

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

      <nav className="navbar navbar-expand-lg shadow-lg" style={{paddingLeft: '100px', paddingRight: '100px'}}>
        <div className="container-fluid">
          <p className="navbar-brand m-0">
            <Link to="/">
              <img src="./adoptUs.png" alt="logo" width="60" height="60" />
            </Link>
          </p>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item justify-content-between">
                  <Link style={{ textDecoration: 'none' }} to="/favorites" className="content nav-link"><i className="fa fa-heart-o p-0"></i></Link>
              </li>
              {
                access_token
                ? 
                <li className="nav-item dropdown">
                  <a className="content nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <a>{account.username}<i className='fas fa-user-alt' style={{paddingLeft: '5px', paddingRight: '5px'}}></i></a>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a onClick={() => goToMyPets()} className="dropdown-item">MyPets</a></li>
                    <li><a onClick={() => signOut()} className="dropdown-item">Sign Out</a></li>
                  </ul>
                </li>
                : 
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/signin">
                    <p className="content nav-link m-0" style={{textDecoration: 'none'}}>Sign In</p>
                  </Link>
                </li>
              }
              {
                access_token
                ? ''
                :
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/signup">
                    <p className="content nav-link m-0" style={{textDecoration: 'none'}}>Sign Up</p>

                  </Link>
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}