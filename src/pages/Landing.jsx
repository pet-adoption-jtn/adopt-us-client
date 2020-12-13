import React from 'react';
import FilterDropdowns from '../components/FilterDropdowns';
import Cards from '../components/Cards';

export default function Landing() {
  return(
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
            <FilterDropdowns />
          </div>
          <div className="col-9 d-flex" style={{marginBottom: '100px'}}>
            <div className="row">
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}