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

  function handleChangeProfile(e) {
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
    <div className="container my-5 w3-animate-opacity">
      <div className="p-5" style={{ backgroundColor: 'white', borderRadius: '20px' }}>
        <h1 className="mb-4">Profile</h1>
        <div>
          <form onSubmit={(e) => handleSubmitProfile(e)}>
            <label className="col-form-label px-3">Username</label>
            <input onChange={(e) => handleChangeProfile(e)} style={{ borderRadius: '20px' }} name="username" value={ dataProfile.username } className="input form-control mb-2"></input>

            <label className="col-form-label px-3">E-mail</label>
            <input disabled onChange={(e) => handleChangeProfile(e)} style={{ borderRadius: '20px' }} name="email" value={ dataProfile.email } className="input form-control mb-2"></input>
            
            <label className="col-form-label px-3">Phone Number</label>
            <input onChange={(e) => handleChangeProfile(e)} style={{ borderRadius: '20px' }} name="phone" value={ dataProfile.phone } className="input form-control mb-2"></input>
            
            <label className="col-form-label px-3">Address</label>
            <input onChange={(e) => handleChangeProfile(e)} style={{ borderRadius: '20px' }} name="address" value={ dataProfile.address } className="input form-control mb-2"></input>
            <div className="d-flex justify-content-center">
              <button className="btn btnSubmitAdop btn-outline-primary mt-3"><span className="fas fa-paw"></span> Save Profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}