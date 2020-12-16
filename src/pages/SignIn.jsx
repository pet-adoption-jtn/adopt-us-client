import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Toast, Swal } from '../config/swal'
import { signIn, googleSignIn } from '../store/actions'
import { useDispatch } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import '../style/css/login-page.css'

function LoginPage(props) {
  const [formInput, setFormInput] = useState({
    email: '',
    password: ''
  })
  const history = useHistory()
  const dispatch = useDispatch()

  function handleInputChange(e) {
    let key = e.target.name
    let value = e.target.value

    setFormInput({
      ...formInput,
      [key]: value
    })
  }

  const handleSgnIn = (event) => {
    event.preventDefault()
    signIn(formInput)
      .then(({ data }) => {
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('account', JSON.stringify(data.account))
        dispatch({
          type: 'SET_ACCESS_TOKEN',
          payload: data.access_token
        })
        dispatch({
          type: 'SET_ACCOUNT',
          payload: data.account
        })
        Toast.fire({
          icon: 'success',
          title: `Welcome ${data.account.username}!`
        })
        history.push('/')
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops..',
          text: err.response.data.message || 'Something Went Wrong'
        })
      })
  }

  const responseGoogle = (response) => {
    const google_token = response.getAuthResponse().id_token
    googleSignIn(google_token)
    .then(({ data }) => {
      response = data
      localStorage.setItem('access_token', data.access_token)
      localStorage.setItem('account', JSON.stringify(data.account))
      dispatch({
        type: 'SET_ACCESS_TOKEN',
        payload: data.access_token
      })
      dispatch({
        type: 'SET_ACCOUNT',
        payload: response.account
      })
      Toast.fire({
        icon: 'success',
        title: `Welcome ${data.account.username}!`
      })
      history.push('/')
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: err.response.data.message || 'Something Went Wrong'
      })
    })
  }

  return (
    <div className="bgLogin">
      <div className="container">
        <div className="row justify-content-center">
          <div className="borderHorver col-5 text-center">
            <div className="w3-card-4 p-3 bg-light" style={{ borderRadius: '10px' }}>
              <h1 className="titleLogin">Sign In</h1>
              <form onSubmit={handleSgnIn}>
                <input 
                  type="email" 
                  name="email"
                  style={{ borderRadius: '50px' }} 
                  className="form-control my-3" 
                  placeholder="E-mail"
                  value={formInput.email}
                  onChange={handleInputChange}
                  required
                ></input>
                <input 
                  type="password" 
                  name="password"
                  style={{ borderRadius: '50px' }} 
                  className="form-control my-3" 
                  placeholder="Password"
                  value={formInput.password}
                  onChange={handleInputChange}
                  required
                ></input>
                <div className="mb-4" style={{ paddingRight: '50px', paddingLeft: '50px' }}>
                  <button type="submit" className="btnSignInUp btn btn-outline-dark form-control">Sign In</button>
                </div>
              </form>
              <hr/>
              <div>
                <div>
                  <p>Or Sign in with</p>
                </div>
                <GoogleLogin
                  clientId="281372448495-9egpusn6t7nq49euno6bv5ffi9qesq2s.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />
                <div>
                  <p className="mt-2">Need an account? <strong><span onClick={() => history.push('/signup')} style={{ textDecoration: 'none', color: 'blue' }}>Sign up</span></strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage