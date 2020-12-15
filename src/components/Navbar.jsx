import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchAllPets } from '../store/actions';

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
      <nav className="navbar navbar-expand-lg" style={{paddingLeft: '100px', paddingRight: '100px'}}>
        <div className="container-fluid">
          <p className="navbar-brand">
            <Link to='/'>
              <img onClick={() => backToHome()} src="./adoptUs.png" alt="logo" width="80" height="80" />
            </Link>
          </p>
          <div className="">
            <ul className="navbar-nav">
              <li className="nav-item">
                  <Link to="/favorites" className="content nav-link">
                    <i className='fas fa-heart' style={{marginRight: '10px'}}></i>
                  </Link>
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
                <li className="nav-item pt-1" style={{marginLeft: '20px', marginRight: '15px'}}>
                  <Link to="/signin">
                    <p className="content nav-link" style={{textDecoration: 'none'}}>Sign In</p>
                  </Link>
                </li>
              }
              {
                access_token
                ? ''
                :
                <li className="nav-item pt-1">
                  <Link to="/signup">
                    <p className="content nav-link" style={{textDecoration: 'none'}}>Sign Up</p>
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