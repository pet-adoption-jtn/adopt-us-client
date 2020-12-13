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
                <li><a class="dropdown-item" href="#">Dog</a></li>
                <li><a class="dropdown-item" href="#">Cat</a></li>
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
                <li><a class="dropdown-item" href="#">American Bully</a></li>
                <li><a class="dropdown-item" href="#">American Eskimo</a></li>
                <li><a class="dropdown-item" href="#">Afghan Hound</a></li>
                <li><a class="dropdown-item" href="#">Alaskan Malamute</a></li>
                <li><a class="dropdown-item" href="#">Siberian Husky</a></li>
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
                <li><a class="dropdown-item" href="#">Black</a></li>
                <li><a class="dropdown-item" href="#">White</a></li>
                <li><a class="dropdown-item" href="#">Brown</a></li>
                <li><a class="dropdown-item" href="#">Gold</a></li>
                <li><a class="dropdown-item" href="#">Grey</a></li>
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
                <li><a class="dropdown-item" href="#">Male</a></li>
                <li><a class="dropdown-item" href="#">Female</a></li>
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
                <li><a class="dropdown-item" href="#">Baby</a></li>
                <li><a class="dropdown-item" href="#">Young</a></li>
                <li><a class="dropdown-item" href="#">Adult</a></li>
                <li><a class="dropdown-item" href="#">Senior</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}