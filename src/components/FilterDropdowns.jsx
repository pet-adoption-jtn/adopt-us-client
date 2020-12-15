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
    <form onSubmit={(e) => handleFilterForm(e)} className="border p-2" style={{ borderRadius: '10px' }}>
        <div className="filter mt-3">
          <div className="group-filter mb-4">
            <label className="label-filter ml-3 colorText">TYPE</label>
            <div className="mt-1">
              <select onChange={(e) => handleChangeFilter(e)} name="type" className="btnFilter form-control">
                <option selected disabled value={'Click Me'}>Click Me</option>
                <option value={'dog'}>Dog</option>
                <option value={'cat'}>Cat</option>
              </select>
            </div>
          </div>
          
          <div className="group-filter mb-4">
            <label className="label-filter ml-3 colorText">COLOR</label>
            <div className="mt-1">
              <select onChange={(e) => handleChangeFilter(e)} name="color" className="btnFilter form-control">
                <option selected disabled value={'Click Me'}>Click Me</option>
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
              <select onChange={(e) => handleChangeFilter(e)} name="gender" className="btnFilter form-control">
                <option selected disabled value={'Click Me'}>Click Me</option>
                <option value={'male'}>Male</option>
                <option value={'female'}>Female</option>
              </select>
            </div>
          </div>
          <div className="group-filter mb-4">
            <label className="label-filter ml-3 colorText">AGE</label>
            <div className="mt-1">
              <select onChange={(e) => handleChangeFilter(e)} name="age" className="btnFilter form-control">
                <option selected disabled value={'Click Me'}>Click Me</option>
                <option value={'baby'}>Baby</option>
                <option value={'young'}>Young</option>
                <option value={'adult'}>Adult</option>
                <option value={'senior'}>Senior</option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btnSubmitFilter text-light my-3 form-control">Submit</button>
    </form>
    </>
  )
}