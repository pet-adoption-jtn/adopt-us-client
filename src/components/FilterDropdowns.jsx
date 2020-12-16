import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllPets } from '../store/actions';
import '../style/css/filter.css';

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
  }

  const handleFilterForm = (e) => {
    e.preventDefault()

    dispatch(fetchAllPets(dataFilter))
  }

  const resetForm = (e) => {
    e.preventDefault()
    setDataFilter({
      type: '',
      color: '',
      gender: '',
      age: ''
    })
    dispatch(fetchAllPets())
  }

  return(
    <>
    <form onReset={(e) => resetForm(e)} onSubmit={(e) => handleFilterForm(e)} className="border shadow-lg p-2" style={{ borderRadius: '10px' }}>
        <div className="filter mt-3">
          <div className="group-filter mb-4">
            <label className="label-filter ml-3 colorText">TYPE</label>
            <div className="mt-1">
              <select value={ dataFilter.type } onChange={(e) => handleChangeFilter(e)} name="type" className="btnFilter form-select">
                <option value={''}>Any</option>
                <option value={'dog'}>Dog</option>
                <option value={'cat'}>Cat</option>
              </select>
            </div>
          </div>
                    
          <div className="group-filter mb-4">
            <label className="label-filter ml-3 colorText">COLOR</label>
            <div className="mt-1">
              <select value={ dataFilter.color } onChange={(e) => handleChangeFilter(e)} name="color" className="btnFilter form-select">
                <option value={''}>Any</option>
                <option value={'black'}>Black</option>
                <option value={'white'}>White</option>
                <option value={'brown'}>Brown</option>
                <option value={'gold'}>Gold</option>
                <option value={'grey'}>Grey</option>
              </select>
            </div>
          </div>
          <div className="group-filter mb-4">
            <label className="label-filter ml-3 colorText">GENDER</label>
            <div className="mt-1">
              <select value={ dataFilter.gender } onChange={(e) => handleChangeFilter(e)} name="gender" className="btnFilter form-select">
                <option value={''}>Any</option>
                <option value={'male'}>Male</option>
                <option value={'female'}>Female</option>
              </select>
            </div>
          </div>
          <div className="group-filter mb-4">
            <label className="label-filter ml-3 colorText">AGE</label>
            <div className="mt-1">
              <select value={ dataFilter.age } onChange={(e) => handleChangeFilter(e)} name="age" className="btnFilter form-select">
                <option value={''}>Any</option>
                <option value={'baby'}>Baby</option>
                <option value={'young'}>Young</option>
                <option value={'adult'}>Adult</option>
                <option value={'senior'}>Senior</option>
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