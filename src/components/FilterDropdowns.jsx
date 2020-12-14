import React, { useState } from 'react';
import '../style/css/filter.css'

export default function FilterDropdowns() {
  const[dataFilter, setDataFilter] = useState({
    type: '',
    breed: '',
    color: '',
    gender: '',
    age: ''
  })

  function handleChangeFilter(e) {
    let key = e.target.name
    let value = e.target.value

    setDataFilter({
      ...dataFilter,
      [key]: value
    })

    console.log({
      ...dataFilter,
      [key]: value
    })
  }

  return(
    <>
    <form className="border p-2" style={{ borderRadius: '10px' }}>
        <div className="text-center colorText">
          <h3>Fillter Pets</h3>
        </div>
        <div className="filter mt-3">
          <div className="group-filter mb-4">
            <label className="label-filter ml-3 colorText">TYPE</label>
            <div className="mt-1">
              <select onChange={(e) => handleChangeFilter(e)} name="type" className="btnFilter form-control">
                <option selected disabled value={'Click Me'}>Click Me</option>
                <option value={'Dog'}>Dog</option>
                <option value={'Cat'}>Cat</option>
              </select>
            </div>
          </div>
          <div className="group-filter mb-4">
            <label className="label-filter ml-3 colorText">BREED</label>
            <div className="mt-1">
              <select onChange={(e) => handleChangeFilter(e)} name="breed"  className="btnFilter form-control">
                <option selected disabled value={'Click Me'}>Click Me</option>
                <option value={'American Bully'}>American Bully</option>
                <option value={'American Eskimo'}>American Eskimo</option>
                <option value={'Afghan Hound'}>Afghan Hound</option>
                <option value={'Alaskan Malamute'}>Alaskan Malamute</option>
                <option value={'Siberian Husky'}>Siberian Husky</option>
              </select>
            </div>
          </div>
          <div className="group-filter mb-4">
            <label className="label-filter ml-3 colorText">COLOR</label>
            <div className="mt-1">
              <select onChange={(e) => handleChangeFilter(e)} name="color" className="btnFilter form-control">
                <option selected disabled value={'Click Me'}>Click Me</option>
                <option value={'Black'}>Black</option>
                <option value={'White'}>White</option>
                <option value={'Brown'}>Brown</option>
                <option value={'Gold'}>Gold</option>
                <option value={'Grey'}>Grey</option>
              </select>
            </div>
          </div>
          <div className="group-filter mb-4">
            <label className="label-filter ml-3 colorText">GENDER</label>
            <div className="mt-1">
              <select onChange={(e) => handleChangeFilter(e)} name="gender" className="btnFilter form-control">
                <option selected disabled value={'Click Me'}>Click Me</option>
                <option value={'Male'}>Male</option>
                <option value={'Female'}>Female</option>
              </select>
            </div>
          </div>
          <div className="group-filter mb-4">
            <label className="label-filter ml-3 colorText">AGE</label>
            <div className="mt-1">
              <select onChange={(e) => handleChangeFilter(e)} name="age" className="btnFilter form-control">
                <option selected disabled value={'Click Me'}>Click Me</option>
                <option value={'Baby'}>Baby</option>
                <option value={'Young'}>Young</option>
                <option value={'Adult'}>Adult</option>
                <option value={'Senior'}>Senior</option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btnSubmitFilter text-light my-3">Submit</button>
    </form>
    </>
  )
}