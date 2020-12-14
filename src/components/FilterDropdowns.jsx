import React from 'react';

export default function FilterDropdowns() {
  return(
    <>
      <div className="filter">
        <div className="group-filter mb-3">
          <label className="label-filter">TYPE</label>
          <div className="mt-1">
            <div class="btn-group">
              <button class="btn btn-light border btn-sm dropdown-toggle shadow" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width: '200px'}}>
                Any
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item">Dog</a></li>
                <li><a class="dropdown-item">Cat</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="group-filter mb-3">
          <label className="label-filter">BREED</label>
          <div className="mt-1">
            <div class="btn-group">
              <button class="btn btn-light border shadow btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width: '200px'}}>
                Any
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item">American Bully</a></li>
                <li><a class="dropdown-item">American Eskimo</a></li>
                <li><a class="dropdown-item">Afghan Hound</a></li>
                <li><a class="dropdown-item">Alaskan Malamute</a></li>
                <li><a class="dropdown-item">Siberian Husky</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="group-filter mb-3">
          <label className="label-filter">COLOR</label>
          <div className="mt-1">
            <div class="btn-group">
              <button class="btn btn-light border shadow btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width: '200px'}}>
                Any
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item">Black</a></li>
                <li><a class="dropdown-item">White</a></li>
                <li><a class="dropdown-item">Brown</a></li>
                <li><a class="dropdown-item">Gold</a></li>
                <li><a class="dropdown-item">Grey</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="group-filter mb-3">
          <label className="label-filter">GENDER</label>
          <div className="mt-1">
            <div class="btn-group">
              <button class="btn btn-light border shadow btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width: '200px'}}>
                Any
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item">Male</a></li>
                <li><a class="dropdown-item">Female</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="group-filter mb-3">
          <label className="label-filter">SIZE</label>
          <div className="mt-1">
            <div class="btn-group">
              <button class="btn btn-light border shadow btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width: '200px'}}>
                Any
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item">Baby</a></li>
                <li><a class="dropdown-item">Young</a></li>
                <li><a class="dropdown-item">Adult</a></li>
                <li><a class="dropdown-item">Senior</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}