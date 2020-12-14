import React from 'react'
import { useHistory } from 'react-router-dom'
import '../style/css/register-page.css'

function RegisterPage(props) {
  const history = useHistory()

  function handleChangePage(page) {
    history.push(page)
  }

  return (
    <div className="container">
      <div className="bgLogin row justify-content-center mt-5 border">
        <div className="padingRegis col-5 text-center">
          <div className="w3-card-4 p-3 bg-light" style={{ borderRadius: '10px' }}>
            <h1 className="titleLogin">Sign up</h1>
            <form>
              <input type="email" className="BorRegis form-control my-3" placeholder="E-mail"></input>
              <input type="password" className="BorRegis form-control my-3" placeholder="Password"></input>
              <input type="text" className="BorRegis form-control my-3" placeholder="User Name"></input>
              <input type="text" className="BorRegis form-control my-3" placeholder="Address"></input>
              <input type="text" className="BorRegis form-control my-3" placeholder="No Handphone"></input>
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
                <p className="mt-2">Already have an account ? <strong><a onClick={() => handleChangePage('/')} style={{ textDecoration: 'none', color: 'blue' }}>Sign in</a></strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage