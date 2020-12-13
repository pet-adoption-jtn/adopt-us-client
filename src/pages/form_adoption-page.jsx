import React from 'react'
import { useHistory } from 'react-router-dom'
import '../style/css/form_adoption-page.css'

function FormAdoptionPage(props) {
  const history = useHistory()

  function handleDrop(doc) {

  }

  return (
    <div className="container">
      <div className="bgLogin row justify-content-center mt-5 border">
        <div className="padingRegis col-8 text-center">
          <div className="w3-card-4 p-3 bg-light" style={{ borderRadius: '10px' }}>
            <h1 className="titleLogin">Form Adoption</h1>
            <form>
              <div className="d-flex mt-3">
                <input type="text" className="BorRegis form-control" placeholder="Frist Name"></input>
                <input type="text" className="BorRegis form-control" placeholder="Last Name"></input>
              </div>
              <input type="Address" className="BorRegis form-control my-3" placeholder="Address"></input>
              <input type="text" className="BorRegis form-control my-3" placeholder="No Handphone"></input>
              <input type="email" className="BorRegis form-control my-3" placeholder="E-mail"></input>
              <input type="text" className="BorRegis form-control my-3" placeholder="Name of Pet You Wish to Adopt"></input>
              <input type="number" className="BorRegis form-control my-3" placeholder="How may hours per day would the pet be alone ?"></input>
              <input type="text" className="BorRegis form-control my-3" placeholder="Will you crate your pet ?"></input>

              <select class="BorRegis form-select my-3" aria-label="Default select example">
                <option selected disabled>Do you own any pets ?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              <select class="BorRegis form-select my-3" aria-label="Default select example">
                <option selected disabled>Do you own or rent your home ?</option>
                <option value="Own">Own</option>
                <option value="Rent">Rent</option>
              </select>

              <select class="BorRegis form-select my-3" aria-label="Default select example">
                <option selected disabled>Do you have a yard ?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              <select class="BorRegis form-select my-3" aria-label="Default select example">
                <option selected disabled>Are the children in the home ?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              <select class="BorRegis form-select my-3" aria-label="Default select example">
                <option selected disabled>Have you ever surrended a pet you own to shelter ?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              
              <div className="p-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}>Have you ever been convicted of an animal related crime, such as cruelty to animals, animal theft, or animal abandonment ?</label>
              </div>
              <input type="text" className="BorRegis form-control my-3" placeholder="Have you ?"></input>

              <div className="p-1">
                <label style={{ fontSize: '15px', textAlign: 'start', color: '#748596' }}>How would you deal with behavioral issues such as barking, chewing, destructive behavior, bathroom accidents indoors, unruly leash behaviors in your pet ?</label>
              </div>
              <input type="text" className="BorRegis form-control my-3" placeholder="How would you deal ?"></input>

              <input type="text" className="BorRegis form-control my-3" placeholder="What is your reason to adopt pet ?"></input>

              <input type="text" className="BorRegis form-control my-3" placeholder="Signature"></input>

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