import '../style/css/register-page.css'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { userSignUp } from '../store/actions'
import { Toast } from '../config/swal'

function RegisterPage(props) {
  const history = useHistory()
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
    userSignUp(dataSignUp)
      .then(({ data }) => {
        Toast.fire({
          icon: 'success',
          title: 'Successfully Signed Up'
        })
        history.push('/signin')
      })
      .catch((err) => {
        Toast.fire({
          icon: 'error',
          title: err.response.data.message || 'Oops, Error'
        })
      })
  }

  return (
    <div className="bgLogin">
      <div className="container w3-animate-opacity">
        <div className="row justify-content-center">
          <div className="padingRegis col-5 text-center">
            <div className="w3-card-4 p-3 bg-light" style={{ borderRadius: '10px' }}>
              <h1 className="titleLogin">Sign Up</h1>
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
                  <button type="submit" className="btnSignInUp btn btn-outline-dark form-control">Sign up</button>
                </div>
              </form>
              <hr/>
              <div>
                <div>
                  <p className="mt-2">Already have an account ? <strong><span onClick={() => handleChangePage('/signin')} style={{ textDecoration: 'none', color: 'blue' }}>Sign in</span></strong></p>
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