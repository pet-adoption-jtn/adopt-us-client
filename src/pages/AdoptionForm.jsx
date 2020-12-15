import React, { useState } from 'react'
import '../style/css/form_adoption-page.css'
import { handleAdoptionForm } from '../store/actions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function FormAdoptionPage({ location }) {
  const history = useHistory()
  const dispatch = useDispatch()
  const { pet_detail } = location.state
  const [formInput, setFormInput] = useState({
    first_name: '',
    last_name: '',
    address: '',
    phone_number: '',
    email: '',
    pet_name: pet_detail.name,
    hours_pet_alone: 0,
    crate_pet: null,
    own_pets: 0,
    own_home: null,
    yard: null,
    children: null,
    surrender_pet: null,
    convicted: null,
    behavioral_issues: '',
    reason: '',
    signature: ''
  })

  function handleChange (e) {
    let name = e.target.name
    let value = e.target.value

    setFormInput({
      ...formInput,
      [name]: value
    })
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault()
    await dispatch(handleAdoptionForm(pet_detail, formInput))

    history.push('/')
  }

  return (
  <div className="container">
    <div className="row justify-content-center mt-5">
      <div className="my-3 padingRegis col-8">
        <div className="w3-card-4 p-3 bg-light" style={{ borderRadius: '10px' }}>
          <h1 className="titleLogin text-center mb-4">Form Adoption</h1>
          <form onSubmit={handleSubmitForm}>
            <div className="px-1">
              <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> Full Name</label>
            </div>
            <div className="d-flex mt-3">
              <input
                name="first_name"
                type="text" 
                className="BorRegis form-control" 
                required 
                value={formInput.first_name}
                placeholder="first name"
                onChange={(e) => handleChange(e)}
              ></input>
              <input 
                name="last_name"
                type="text" 
                className="BorRegis form-control"
                required
                value={formInput.last_name}
                placeholder="last name"
                onChange={(e) => handleChange(e)}
              ></input>
            </div>

            <div className="px-1 mt-3">
              <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> Address</label>
            </div>
            <input
              name="address"
              type="Address" 
              className="BorRegis form-control my-3"
              required
              onChange={(e) => handleChange(e)}
              value={formInput.address}
            ></input>

            <div className="px-1">
              <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong>Phone Number</label>
            </div>
            <input
              name="phone_number"
              type="text" 
              className="BorRegis form-control my-3"
              required
              value={formInput.phone_number}
              onChange={(e) => handleChange(e)}
            ></input>

            <div className="px-1">
              <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> E-mail</label>
            </div>
            <input
              name="email"
              type="email" 
              className="BorRegis form-control my-3"
              required
              value={formInput.email}
              onChange={(e) => handleChange(e)}
            ></input>

            <div className="px-1">
              <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> Name of Pet You Wish to Adopt</label>
            </div>
            <input
              name="pet_name" 
              type="text"
              className="BorRegis form-control my-3" 
              value={formInput.pet_name} 
              disabled
            ></input>

            <div className="px-1">
              <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> How many hours per day would the pet be alone ?</label>
            </div>
            <input
              onChange={handleChange}
              name="hours_pet_alone"
              type="number" 
              className="BorRegis form-control my-3"
              value={formInput.hours_pet_alone}
              required
              >
            </input>

            <div className="px-1">
              <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> Will you crate your pet ?</label>
            </div>
            <div className="d-flex">
              <div class="form-check form-switch m-3">
                <input onChange={handleChange} name="crate_pet" value="Yes" className="form-check-input" type="radio"></input>
                <label className="form-check-label">Yes</label>
              </div>
              <div class="form-check form-switch m-3">
                <input onChange={handleChange} name="crate_pet" value="No" className="form-check-input" type="radio"></input>
                <label className="form-check-label">No</label>
              </div>
            </div>

            <div className="px-1">
              <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong
                  style={{ color: 'red' }}>*</strong> Do you own any pets ?</label>
            </div>
            <div className="d-flex">
              <div class="form-check form-switch m-3">
                <input onChange={handleChange} name="own_pets" value="Yes" className="form-check-input" type="radio"></input>
                <label className="form-check-label">Yes</label>
              </div>
              <div class="form-check form-switch m-3">
                <input onChange={handleChange} name="own_pets" value="No" className="form-check-input" type="radio"></input>
                <label className="form-check-label">No</label>
              </div>
            </div>

            <div className="px-1">
              <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong
                  style={{ color: 'red' }}>*</strong> Do you own or rent your home ?</label>
            </div>
            <div className="d-flex">
              <div class="form-check form-switch m-3">
                <input onChange={handleChange} name="own_home" value="Yes" className="form-check-input" type="radio"></input>
                <label className="form-check-label">Yes</label>
              </div>
              <div class="form-check form-switch m-3">
                <input onChange={handleChange} name="own_home" value="No" className="form-check-input" type="radio"></input>
                <label className="form-check-label">No</label>
              </div>
            </div>

            <div className="px-1">
              <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong
                  style={{ color: 'red' }}>*</strong> Do you have a yard ?</label>
            </div>
            <div className="d-flex">
              <div class="form-check form-switch m-3">
                <input onChange={handleChange} name="yard" value="Yes" className="form-check-input" type="radio"></input>
                <label className="form-check-label">Yes</label>
              </div>
              <div class="form-check form-switch m-3">
                <input onChange={handleChange} name="yard" value="No" className="form-check-input" type="radio"></input>
                <label className="form-check-label">No</label>
              </div>
            </div>

            <div className="px-1">
              <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong
                  style={{ color: 'red' }}>*</strong> Is there any children at home ?</label>
            </div>
            <div className="d-flex">
              <div className="form-check form-switch m-3">
                <input onChange={handleChange} name="children" value="Yes" className="form-check-input" type="radio"></input>
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check form-switch m-3">
                <input onChange={handleChange} name="children" value="No" className="form-check-input" type="radio"></input>
                <label className="form-check-label">No</label>
              </div>
            </div>

            <div className="px-1">
              <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong
                  style={{ color: 'red' }}>*</strong> Have you ever surrended a pet you own to shelter ?</label>
            </div>
            <div className="d-flex">
              <div className="form-check form-switch m-3">
                <input onChange={handleChange} name="surrender_pet" value="Yes" className="form-check-input" type="radio"></input>
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check form-switch m-3">
                <input onChange={handleChange} name="surrender_pet" value="No" className="form-check-input" type="radio"></input>
                <label className="form-check-label">No</label>
              </div>
            </div>

            <div className="p-1">
              <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong
                  style={{ color: 'red' }}>*</strong> Have you ever been convicted of an animal related crime, such as
                cruelty to animals, animal theft, or animal abandonment ?</label>
            </div>
            <div className="d-flex">
              <div className="form-check form-switch m-3">
                <input onChange={handleChange} name="convicted" value="Yes" className="form-check-input" type="radio"></input>
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check form-switch m-3">
                <input onChange={handleChange} name="convicted" value="No" className="form-check-input" type="radio"></input>
                <label className="form-check-label">No</label>
              </div>
            </div>

            <div className="p-1">
              <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong
                  style={{ color: 'red' }}>*</strong> How would you deal with behavioral issues such as barking, chewing,
                destructive behavior, bathroom accidents indoors, unruly leash behaviors in your pet ?</label>
            </div>
            <input onChange={handleChange} name="behavioral_issues" value={formInput.behavioral_issues} type="text" className="BorRegis form-control my-3"></input>

            <div className="px-1">
              <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong
                  style={{ color: 'red' }}>*</strong> What is your reason to adopt pet ?</label>
            </div>
            <input  onChange={handleChange} name="reason" value={formInput.reason} type="text" className="BorRegis form-control my-3"></input>

            <div className="px-1">
              <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong
                  style={{ color: 'red' }}>*</strong> Signature</label>
            </div>
            <input onChange={handleChange} name="signature" value={formInput.signature} type="text" className="BorRegis form-control my-3" placeholder="Full Name"></input>

            <div className="mb-4" style={{ paddingRight: '50px', paddingLeft: '50px' }}>
              <button type="submit" className="BorRegis btn btn-outline-dark form-control">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FormAdoptionPage