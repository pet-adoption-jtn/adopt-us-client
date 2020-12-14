import React from 'react'
import { useHistory } from 'react-router-dom'
import '../style/css/login-page.css'

function LoginPage(props) {
  const history = useHistory()

  function handleChangePage(page) {
    history.push(page)
  }

  return (
    <div className="container">
      <div className="bgLogin row justify-content-center mt-5 border">
        <div className="borderHorver col-5 text-center">
          <div className="w3-card-4 p-3 bg-light" style={{ borderRadius: '10px' }}>
            <h1 className="titleLogin">Sign in</h1>
            <form>
              <input type="email" style={{ borderRadius: '50px' }} className="form-control my-3" placeholder="E-mail"></input>
              <input type="password" style={{ borderRadius: '50px' }} className="form-control my-3" placeholder="Password"></input>
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
                <p className="mt-2">Need an account? <strong><a onClick={() => handleChangePage('/signup')} style={{ textDecoration: 'none', color: 'blue' }}>Sign up</a></strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage