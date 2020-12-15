import '../style/css/register-page.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { userSignUp } from '../store/actions'

function RegisterPage(props) {
  const history = useHistory()
  const dispatch = useDispatch()
  const[dataSignUp, setDataSignUp] = useState({
    username: '',
    email: '',
    password: '',
    address: '',
    phone: ''
  })

  function handleChangePage(page) {
    history.push(page)
  }

  function handleChangeValue(e) {
    let key = e.target.name
    let value = e.target.value

    setDataSignUp({
      ...dataSignUp,
      [key]: value
    })
  }
  
  function handleSubmitSignUp(e) {
    e.preventDefault()
    dispatch(userSignUp(dataSignUp))
    history.push('/signin')
  }

  return (
    <div className="bgLogin">
      <div className="container">
        <div className="row justify-content-center">
          <div className="padingRegis col-5 text-center">
            <div className="w3-card-4 p-3 bg-light" style={{ borderRadius: '10px' }}>
              <h1 className="titleLogin">Sign up</h1>
              <form onSubmit={(e) => handleSubmitSignUp(e)}>
                <input 
                  onChange={(e) => handleChangeValue(e)} 
                  name="username" 
                  value={ dataSignUp.username } 
                  type="text" 
                  className="BorRegis form-control my-3" 
                  placeholder="username"
                  required
                ></input>
                <input 
                  onChange={(e) => handleChangeValue(e)} 
                  name="email" 
                  value={ dataSignUp.email } 
                  type="email" 
                  className="BorRegis form-control my-3" 
                  placeholder="E-mail"
                  required
                ></input>
                <input 
                  onChange={(e) => handleChangeValue(e)} 
                  name="password" 
                  value={ dataSignUp.password } 
                  type="password" 
                  className="BorRegis form-control my-3" 
                  placeholder="Password"
                  required
                ></input>
                <input 
                  onChange={(e) => handleChangeValue(e)} 
                  name="address" value={ dataSignUp.address } 
                  type="text" 
                  className="BorRegis form-control my-3" 
                  placeholder="Address"
                  required
                ></input>
                <input 
                  onChange={(e) => handleChangeValue(e)} 
                  name="phone" 
                  value={ dataSignUp.phone } 
                  type="text" 
                  className="BorRegis form-control my-3" 
                  placeholder="No Handphone"
                  required
                ></input>
                <div className="mb-4" style={{ paddingRight: '50px', paddingLeft: '50px' }}>
                  <button type="submit" className="BorRegis btn btn-outline-dark form-control">Sign up</button>
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
                  <p className="mt-2">Already have an account ? <strong><a onClick={() => handleChangePage('/signin')} style={{ textDecoration: 'none', color: 'blue' }}>Sign in</a></strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage