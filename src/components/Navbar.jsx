import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Navbar() {
  const history = useHistory()
  const { access_token, account } = useSelector(state => state)

  const dispatch = useDispatch()
  const goToMyPets = () => {
    history.push('/myPets')
  }

  const signOut = () => {
    localStorage.clear()
    dispatch({
      type: 'SET_ACCESS_TOKEN',
      payload: ''
    })
    dispatch({
      type: 'SET_ACCOUNT',
      payload: {}
    })
    history.push('/')
  }

  const backToHome = () => {
    history.push('/')
  }

  const goToProfile = () => {
    history.push('/profile')
  }

  if(!access_token) {
    return (
      <>
    <nav className="navbar navbar-expand-lg shadow-lg" style={{paddingLeft: '100px', paddingRight: '100px'}}>
      <div className="container-fluid">
        <p className="navbar-brand m-0">
          <Link to="/">
            <img onClick={() => backToHome()} src={"./adoptUs.png"} alt="Adopt.Us" width="60" height="60" />
          </Link>
        </p>
        <div>
          <ul className="navbar-nav">
            {
              access_token
              ? 
              <li className="nav-item dropdown">
                <span className="content nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span>{account.username}<i className='fas fa-user-alt' style={{paddingLeft: '5px', paddingRight: '5px'}}></i></span>
                </span>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><span onClick={() => goToProfile()} className="dropdown-item">Profile</span></li>
                  <li><span onClick={() => goToMyPets()} className="dropdown-item">MyPets</span></li>
                  <li><span onClick={() => signOut()} className="dropdown-item">Sign Out</span></li>
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
  } else {
    return (
      <>
        <nav className="navbar navbar-expand-lg shadow-lg" style={{paddingLeft: '100px', paddingRight: '100px'}}>
          <div className="container-fluid">
            <p className="navbar-brand m-0">
              <Link to="/">
                <img onClick={() => backToHome()} src={"https://i.ibb.co/5cVVJgT/adoptUs.png"} alt="Adopt.Us" width="60" height="60" />
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
                    <span className="content nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span>{account.username}<i className='fas fa-user-alt' style={{paddingLeft: '5px', paddingRight: '5px'}}></i></span>
                    </span>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><span onClick={() => goToProfile()} className="dropdown-item">Profile</span></li>
                      <li><span onClick={() => goToMyPets()} className="dropdown-item">MyPets</span></li>
                      <li><span onClick={() => signOut()} className="dropdown-item">Sign Out</span></li>
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

}