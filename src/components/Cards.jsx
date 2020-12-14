import React from 'react';

export default function Cards({ petList }) {
  return(
    <>
    {petList.map((pet => (
      <div key={pet._id} className="col-4 mb-4">
        <div className="card text-center shadow" style={{width: '16rem'}}>
          <div className="image-container">
            <img src={pet.pictures} width="500px" height="200px" className="card-img-top" alt="pics" />
              <div className="top-right"><p><i className="icon-hearted shadow-lg fa fa-heart-o" style={{fontSize: '24px', fontWeight: '600', color: '#ce0d81'}}></i></p></div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{(pet.name.toUpperCase())}</h5>
              <div style={{fontSize: '14px', display: 'flex', justifyContent: 'space-evenly'}}>
                <p>{pet.age}</p>
                <p><span className="badge" style={{backgroundColor: '#ce0d81'}}>{pet.breed}</span></p>
              </div>
          </div>
        </div>
      </div>
    )))}
    </>
  )
}