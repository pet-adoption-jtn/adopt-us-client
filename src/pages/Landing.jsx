import React from 'react';
import FilterDropdowns from '../components/FilterDropdowns';
import Cards from '../components/Cards';

export default function Landing() {
  return(
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <FilterDropdowns />
          </div>
          <div className="col-9 d-flex" style={{marginBottom: '50px'}}>
            <div className="row">
            <div className="col-6 text-center">
              <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F09%2F22%2F50-cute-dog-names.jpg" width="300" height="300" className="rounded shadow" alt="" style={{borderColor: '#f0199a'}} />
              <button className="mt-3 mb-4 btn btn-danger btn-lg">ABOUT DOG ADOPTION</button>
            </div>
            <div className="col-6 text-center">
              <img src="https://www.rover.com/blog/wp-content/uploads/2019/12/adorable-fluffy-cat.jpg" width="300" height="300" className="rounded shadow" alt="" style={{borderColor: '#f0199a'}} />
              <button className="mt-3 mb-4 btn btn-danger btn-lg">ABOUT CAT ADOPTION</button>
            </div>
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}