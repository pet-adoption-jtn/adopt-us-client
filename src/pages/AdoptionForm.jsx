import React from 'react'
import { useHistory } from 'react-router-dom'
import '../style/css/form_adoption-page.css'

function FormAdoptionPage(props) {
  const history = useHistory()

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="my-3 padingRegis col-8">
          <div className="w3-card-4 p-3 bg-light" style={{ borderRadius: '10px' }}>
            <h1 className="titleLogin text-center mb-4">Form Adoption</h1>
            <form>
              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> Full Name</label>
              </div>
                <div className="d-flex mt-3">
                  <input type="text" className="BorRegis form-control"></input>
                  <input type="text" className="BorRegis form-control"></input>
                </div>

              <div className="px-1 mt-3">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> Address</label>
              </div>  
              <input type="Address" className="BorRegis form-control my-3"></input>

              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> No Handphone</label>
              </div>
              <input type="text" className="BorRegis form-control my-3"></input>

              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> E-mail</label>
              </div>
              <input type="email" className="BorRegis form-control my-3"></input>

              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> Name of Pet You Wish to Adopt</label>
              </div>
              <input type="text" className="BorRegis form-control my-3"></input>

              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> How may hours per day would the pet be alone ?</label>
              </div>
              <input type="number" className="BorRegis form-control my-3"></input>

              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> Will you crate your pet</label>
              </div>
              <input type="text" className="BorRegis form-control my-3"></input>

              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> Do you own any pets ?</label>
              </div>
              <div className="d-flex">
                <div class="form-check form-switch m-3">
                  <input value="Yes" className="form-check-input" name="from1" type="radio"></input>
                  <label className="form-check-label">Yes</label>
                </div>
                <div class="form-check form-switch m-3">
                  <input value="No" className="form-check-input" name="from1" type="radio"></input>
                  <label className="form-check-label">No</label>
                </div>
              </div>

              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> Do you own or rent your home ?</label>
              </div>
              <div className="d-flex">
                <div class="form-check form-switch m-3">
                  <input value="Yes" className="form-check-input" name="from2" type="radio"></input>
                  <label className="form-check-label">Yes</label>
                </div>
                <div class="form-check form-switch m-3">
                  <input value="No" className="form-check-input" name="from2" type="radio"></input>
                  <label className="form-check-label">No</label>
                </div>
              </div>

              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> Do you have a yard ?</label>
              </div>
              <div className="d-flex">
                <div class="form-check form-switch m-3">
                  <input value="Yes" className="form-check-input" name="from3" type="radio"></input>
                  <label className="form-check-label">Yes</label>
                </div>
                <div class="form-check form-switch m-3">
                  <input value="No" className="form-check-input" name="from3" type="radio"></input>
                  <label className="form-check-label">No</label>
                </div>
              </div>

              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> Are the children in the home ?</label>
              </div>
              <div className="d-flex">
                <div class="form-check form-switch m-3">
                  <input value="Yes" className="form-check-input" name="from4" type="radio"></input>
                  <label className="form-check-label">Yes</label>
                </div>
                <div class="form-check form-switch m-3">
                  <input value="No" className="form-check-input" name="from4" type="radio"></input>
                  <label className="form-check-label">No</label>
                </div>
              </div>

              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> Have you ever surrended a pet you own to shelter ?</label>
              </div>
              <div className="d-flex">
                <div class="form-check form-switch m-3">
                  <input value="Yes" className="form-check-input" name="from5" type="radio"></input>
                  <label className="form-check-label">Yes</label>
                </div>
                <div class="form-check form-switch m-3">
                  <input value="No" className="form-check-input" name="from5" type="radio"></input>
                  <label className="form-check-label">No</label>
                </div>
              </div>
              
              <div className="p-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> Have you ever been convicted of an animal related crime, such as cruelty to animals, animal theft, or animal abandonment ?</label>
              </div>
              <input type="text" className="BorRegis form-control my-3"></input>

              <div className="p-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> How would you deal with behavioral issues such as barking, chewing, destructive behavior, bathroom accidents indoors, unruly leash behaviors in your pet ?</label>
              </div>
              <input type="text" className="BorRegis form-control my-3"></input>

              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> What is your reason to adopt pet ?</label>
              </div>
              <input type="text" className="BorRegis form-control my-3"></input>

              <div className="px-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}><strong style={{ color: 'red' }}>*</strong> Signature</label>
              </div>
              <input type="text" className="BorRegis form-control my-3"></input>

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