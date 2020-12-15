import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../style/css/filter.css';
import { fetchAllPets } from '../store/actions';

export default function FilterDropdowns() {
  const dispatch = useDispatch()
  const[dataFilter, setDataFilter] = useState({
    type: '',
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

  const handleFilterForm = (e) => {
    e.preventDefault()

    dispatch(fetchAllPets(dataFilter))
  }

  return(
    <>
    <form onSubmit={(e) => handleFilterForm(e)} className="border shadow-lg p-2" style={{ borderRadius: '10px' }}>
        <div className="text-center colorText text-dark">
          <h3>Fillter Pets</h3>
        </div>
        <div className="filter mt-3">
          <div className="group-filter mb-4">
            <label className="label-filter ml-3 colorText">TYPE</label>
            <div className="mt-1">
              <select onChange={(e) => handleChangeFilter(e)} name="type" className="btnFilter form-control">
                <option value={''}>Click Me</option>
                <option value={'Dog'}>Dog</option>
                <option value={'Cat'}>Cat</option>
              </select>
            </div>
          </div>
                    
          <div className="group-filter mb-4">
            <label className="label-filter ml-3 colorText">COLOR</label>
            <div className="mt-1">
              <select onChange={(e) => handleChangeFilter(e)} name="color" className="btnFilter form-control">
                <option value={''}>Click Me</option>
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
                <option value={''}>Click Me</option>
                <option value={'Male'}>Male</option>
                <option value={'Female'}>Female</option>
              </select>
            </div>
          </div>
          <div className="group-filter mb-4">
            <label className="label-filter ml-3 colorText">AGE</label>
            <div className="mt-1">
              <select onChange={(e) => handleChangeFilter(e)} name="age" className="btnFilter form-control">
                <option value={''}>Click Me</option>
                <option value={'Baby'}>Baby</option>
                <option value={'Young'}>Young</option>
                <option value={'Adult'}>Adult</option>
                <option value={'Senior'}>Senior</option>
              </select>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <button type="submit" className="btn btnSubmitFilter mr-2 my-3 form-control"><span className="fas fa-paw"></span> Submit</button>
          <button style={{ borderRadius: '20px' }} type="reset" className="btn btnReset my-3 form-control"><span className="fas fa-undo"></span> Reset</button>
        </div>
    </form>
    </>
  )
}