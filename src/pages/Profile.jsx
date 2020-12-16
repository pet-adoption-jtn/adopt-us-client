import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../store/actions';

export default function Profile () {
  const dispatch = useDispatch()
  const { account } = useSelector(state => state)
  const[dataProfile, setDataProfile] = useState({
    username: account.username,
    email: account.email,
    phone: account.phone,
    address: account.address
  })

  function handleChangePprofile(e) {
    const key = e.target.name
    const value = e.target.value

    setDataProfile({
      ...dataProfile,
      [key]: value
    })
  }

  function handleSubmitProfile(e) {
    e.preventDefault()
    dispatch(updateProfile(dataProfile))
  }


  return(
    <div className="container my-5">
      <div className="px-5">
        <div className="px-5">
          <h1>Profile</h1>
        </div>
        <div>
          <form onSubmit={(e) => handleSubmitProfile(e)}>
            <label className="col-form-label px-3">Name</label>
            <input onChange={(e) => handleChangePprofile(e)} style={{ borderRadius: '20px' }} name="username" value={ dataProfile.username } className="input form-control mb-2"></input>

            <label className="col-form-label px-3">E-mail</label>
            <input onChange={(e) => handleChangePprofile(e)} style={{ borderRadius: '20px' }} name="email" value={ dataProfile.email } className="input form-control mb-2"></input>
            
            <label className="col-form-label px-3">No Phone</label>
            <input onChange={(e) => handleChangePprofile(e)} style={{ borderRadius: '20px' }} name="phone" value={ dataProfile.phone } className="input form-control mb-2"></input>
            
            <label className="col-form-label px-3">Address</label>
            <input onChange={(e) => handleChangePprofile(e)} style={{ borderRadius: '20px' }} name="address" value={ dataProfile.address } className="input form-control mb-2"></input>
            <div className="d-flex justify-content-center">
              <button className="btn btnSubmitAdop btn-outline-primary mt-3"><span className="fas fa-paw"></span> Save Profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}