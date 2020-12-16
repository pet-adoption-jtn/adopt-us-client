import React, { useEffect, useState } from 'react'
import '../style/css/form_adoption-page.css'
import { getDetails, handleAdoptionForm } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { Swal } from '../config/swal'
import { Loading } from '../components'

function FormAdoptionPage(props) {
  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const { account, pet_detail, load_detail } = useSelector(state => state)
  const [formInput, setFormInput] = useState({
    first_name: '',
    last_name: '',
    address: account.address,
    phone_number: account.phone,
    email: account.email,
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

  useEffect(() => {
    dispatch(getDetails(id))
  }, [dispatch, id])

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
    if (formInput.signature === `${formInput.first_name} ${formInput.last_name}`) {
      await dispatch(handleAdoptionForm(pet_detail, formInput, account))
      history.push('/')
    } else {
      await Swal.fire({
        icon: 'warning',
        title: 'Signature must match your first and last name.'
      })
    }
  }

  if (load_detail) return <Loading/>

  return (
  <div>
    <div className="container my-5">
      <div className="row">
        <div className=" padingRegis d-flex justify-content-center">
          <div className="w3-card-4 p-3 bg-light" style={{ borderRadius: '10px', width: '70%' }}>
            <form className="p-4" onSubmit={handleSubmitForm}>
              <div className="p-4 d-flex justify-content-between">
                <h1 className="titleLogin text-start my-5">Form Adoption</h1>
                <img src={'https://i.ibb.co/5cVVJgT/adoptUs.png'} alt={'Adopt.Us'}></img>
              </div>
              <div className="px-1 d-flex justify-content-between">
                <label style={{ fontSize: '15px', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> First Name</label>
                <label style={{ fontSize: '15px', color: '#748596', marginRight: '40%' }}><strong style={{ color: 'red' }}>*</strong> Last Name</label>
              </div>
              <div className="d-flex my-3">
                <input
                  name="first_name"
                  type="text" 
                  className="BorRegis form-control mr-2" 
                  required 
                  value={formInput.first_name}
                  onChange={(e) => handleChange(e)}
                ></input>
                <input 
                  name="last_name"
                  type="text" 
                  className="BorRegis form-control"
                  required
                  value={formInput.last_name}
                  onChange={(e) => handleChange(e)}
                ></input>
              </div>

              <div className="px-1 my-3">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596', marginTop: '15px' }}><strong style={{ color: 'red' }}>*</strong> Address</label>
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
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596', marginTop: '15px' }}><strong style={{ color: 'red' }}>*</strong>Phone Number</label>
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
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596', marginTop: '15px' }}><strong style={{ color: 'red' }}>*</strong> E-mail</label>
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
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596', marginTop: '15px' }}><strong style={{ color: 'red' }}>*</strong> Name of Pet You Wish to Adopt</label>
              </div>
              <input
                name="pet_name" 
                type="text"
                className="BorRegis form-control my-3" 
                value={formInput.pet_name} 
                disabled
              ></input>

              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596', marginTop: '15px' }}><strong style={{ color: 'red' }}>*</strong> How many hours per day would the pet be alone ?</label>
              </div>
              <input
                onChange={handleChange}
                name="hours_pet_alone"
                min='0'
                type="number" 
                className="BorRegis form-control my-3"
                value={formInput.hours_pet_alone}
                required
                >
              </input>

              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596', marginTop: '15px' }}><strong style={{ color: 'red' }}>*</strong> Will you crate your pet ?</label>
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
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596', marginTop: '15px' }}><strong
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
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596', marginTop: '15px' }}><strong
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
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596', marginTop: '15px' }}><strong
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
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596', marginTop: '15px' }}><strong
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
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596', marginTop: '15px' }}><strong
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

              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596', marginTop: '15px' }}><strong
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

              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596', marginTop: '15px' }}><strong
                    style={{ color: 'red' }}>*</strong> How would you deal with behavioral issues such as barking, chewing,
                  destructive behavior, bathroom accidents indoors, unruly leash behaviors in your pet ?</label>
              </div>
              <input onChange={handleChange} name="behavioral_issues" value={formInput.behavioral_issues} type="text" className="BorRegis form-control my-3"></input>

              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596', marginTop: '15px' }}><strong
                    style={{ color: 'red' }}>*</strong> What is your reason to adopt pet ?</label>
              </div>
              <input  onChange={handleChange} name="reason" value={formInput.reason} type="text" className="BorRegis form-control my-3"></input>

              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596', marginTop: '15px' }}><strong
                    style={{ color: 'red' }}>*</strong> Signature</label>
              </div>
              <input onChange={handleChange} name="signature" value={formInput.signature} type="text" className="BorRegis form-control my-3" placeholder="Full Name"></input>

              <div className="mb-4 d-flex justify-content-center" style={{ paddingRight: '50px', paddingLeft: '50px' }}>
                <button type="submit" className="btnSubmitAdop btn btn-outline-primary"><span className="fas fa-paw"></span> Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FormAdoptionPage