import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filteredByType } from '../store/actions';

export default function FilterDropdowns() {
  const dispatch = useDispatch()
  const [ filterOptions, setFilterOptions ] = useState({
    type: '-',
    age: '-',
    gender: '-',
    color: '-'
  })
  const filterByType = (type, age, gender, color) => {
    dispatch(filteredByType(type, age, gender, color))
  }

  return(
    <>
      <div className="filter">
        <div className="group-filter mb-3">
          <label className="label-filter">TYPE</label>
          <div className="mt-1">
            <div className="btn-group">
              <button className="btn btn-light border btn-sm dropdown-toggle shadow" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width: '200px'}}>
                Any
              </button>
              <ul className="dropdown-menu">
                <li><p onClick={() => filterByType('dog')} className="dropdown-item">Dog</p></li>
                <li><p onClick={() => filterByType('cat')} className="dropdown-item">Cat</p></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="group-filter mb-3">
          <label className="label-filter">COLOR</label>
          <div className="mt-1">
            <div className="btn-group">
              <button className="btn btn-light border shadow btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width: '200px'}}>
                Any
              </button>
              <ul className="dropdown-menu">
                <li><p className="dropdown-item">Black</p></li>
                <li><p className="dropdown-item">White</p></li>
                <li><p className="dropdown-item">Brown</p></li>
                <li><p className="dropdown-item">Gold</p></li>
                <li><p className="dropdown-item">Grey</p></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="group-filter mb-3">
          <label className="label-filter">GENDER</label>
          <div className="mt-1">
            <div className="btn-group">
              <button className="btn btn-light border shadow btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width: '200px'}}>
                Any
              </button>
              <ul className="dropdown-menu">
                <li><p className="dropdown-item">Male</p></li>
                <li><p className="dropdown-item">Female</p></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="group-filter mb-3">
          <label className="label-filter">AGE</label>
          <div className="mt-1">
            <div className="btn-group">
              <button className="btn btn-light border shadow btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width: '200px'}}>
                Any
              </button>
              <ul className="dropdown-menu">
                <li><p className="dropdown-item">Baby</p></li>
                <li><p className="dropdown-item">Young</p></li>
                <li><p className="dropdown-item">Adult</p></li>
                <li><p className="dropdown-item">Senior</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}