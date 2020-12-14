import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Toast } from '../config/swal'
import { signIn } from '../store/actions'
import '../style/css/login-page.css'

function LoginPage(props) {
  const [formInput, setFormInput] = useState({
    email: '',
    password: ''
  })
  const history = useHistory()

  function handleInputChange(e) {
    let key = e.target.name
    let value = e.target.value

    setFormInput({
      ...formInput,
      [key]: value
    })
  }

  function handleSgnIn(e) {
    e.preventDefault()
    signIn(formInput)
      .then(({ data }) => {
        localStorage.setItem('access_token', data.access_token)
        Toast.fire({
          icon: 'success',
          title: 'Welcome!'
        })
        history.push('/')
      })
      .catch(console.log)
  }

  return (
    <div className="container">
      <div className="bgLogin row justify-content-center mt-5 border">
        <div className="borderHorver col-5 text-center">
          <div className="w3-card-4 p-3 bg-light" style={{ borderRadius: '10px' }}>
            <h1 className="titleLogin">Sign In</h1>
            <form onSubmit={e => handleSgnIn(e)}>
              <input 
                type="email" 
                name="email"
                style={{ borderRadius: '50px' }} 
                className="form-control my-3" 
                placeholder="E-mail"
                value={formInput.email}
                onChange={(e) => handleInputChange(e)}
                required
              ></input>
              <input 
                type="password" 
                name="password"
                style={{ borderRadius: '50px' }} 
                className="form-control my-3" 
                placeholder="Password"
                value={formInput.password}
                onChange={(e) => handleInputChange(e)}
                required
              ></input>
              <div className="mb-4" style={{ paddingRight: '50px', paddingLeft: '50px' }}>
                <button type="submit" style={{ borderRadius: '50px' }} className="btn btn-outline-dark form-control">Sign in</button>
              </div>
            </form>
            <hr/>
            <div>
              <div>
                <p>Or Sign in with</p>
              </div>
              <a className="fa fa-google mx-3"></a>
              <a className="fa fa-facebook mx-3"></a>
              <div>
                <p className="mt-2">Need an account? <strong><a onClick={() => history.push('/signup')} style={{ textDecoration: 'none', color: 'blue' }}>Sign up</a></strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage