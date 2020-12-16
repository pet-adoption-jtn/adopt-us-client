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
              <select onChange={(e) => handleChangeFilter(e)} name="type" className="btnFilter form-control">
                <option selected={!dataFilter.type} value={''}>Any</option>
                <option selected={dataFilter.type === 'dog'} value={'dog'}>Dog</option>
                <option selected={dataFilter.type === 'cat'} value={'cat'}>Cat</option>
              </select>
            </div>
          </div>
                    
          <div className="group-filter mb-4">
            <label className="label-filter ml-3 colorText">COLOR</label>
            <div className="mt-1">
              <select onChange={(e) => handleChangeFilter(e)} name="color" className="btnFilter form-control">
                <option selected={!dataFilter.color} value={''}>Any</option>
                <option selected={dataFilter.color === 'black'} value={'black'}>Black</option>
                <option selected={dataFilter.color === 'white'} value={'white'}>White</option>
                <option selected={dataFilter.color === 'brwon'} value={'brown'}>Brown</option>
                <option selected={dataFilter.color === 'gold'} value={'gold'}>Gold</option>
                <option selected={dataFilter.color === 'grey'} value={'grey'}>Grey</option>
              </select>
            </div>
          </div>
          <div className="group-filter mb-4">
            <label className="label-filter ml-3 colorText">GENDER</label>
            <div className="mt-1">
              <select onChange={(e) => handleChangeFilter(e)} name="gender" className="btnFilter form-control">
                <option selected={!dataFilter.gender} value={''}>Any</option>
                <option selected={dataFilter.gender === 'male'} value={'male'}>Male</option>
                <option selected={dataFilter.gender === 'female'} value={'female'}>Female</option>
              </select>
            </div>
          </div>
          <div className="group-filter mb-4">
            <label className="label-filter ml-3 colorText">AGE</label>
            <div className="mt-1">
              <select onChange={(e) => handleChangeFilter(e)} name="age" className="btnFilter form-control">
                <option selected={!dataFilter.age} value={''}>Any</option>
                <option selected={dataFilter.age === 'baby'} value={'baby'}>Baby</option>
                <option selected={dataFilter.age === 'young'} value={'young'}>Young</option>
                <option selected={dataFilter.age === 'adult'} value={'adult'}>Adult</option>
                <option selected={dataFilter.age === 'senior'} value={'senior'}>Senior</option>
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