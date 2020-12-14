import React from 'react';
import { FilterDropdowns, Cards } from '../components'

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
              <img src="https://images.squarespace-cdn.com/content/v1/5cd493f1185add0001e4670d/1558988155986-PY602J3JHUN77WUMVRXS/ke17ZwdGBToddI8pDm48kFyD7pzB8zoMIVY5aiUuFlp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jG2lbcDYBOeMi4OFSYem8DMb5PTLoEDdB05UqhYu-xbnSznFxIRsaAU-3g5IaylIg/image-asset.jpeg?format=2500w" width="350" height="350" className="rounded shadow" alt="" style={{borderColor: '#f0199a'}} />
              <button className="mt-3 mb-4 btn btn-1 btn-lg">ABOUT DOG</button>
            </div>
            <div className="col-6 text-center">
              <img src="https://catrescue.id/wp-content/uploads/2020/01/cat-rescue-03.jpg" width="350" height="350" className="rounded shadow" alt="" style={{borderColor: '#f0199a'}} />
              <button className="mt-3 mb-4 btn btn-1 btn-lg">ABOUT CAT</button>
            </div>
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}