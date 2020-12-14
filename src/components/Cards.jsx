import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToFavorite } from '../store/actions'

export default function Cards({ petList }) {
  const dispatch = useDispatch()
  const history = useHistory()

  function handleFavorite(pet_id) {
    dispatch(addToFavorite(pet_id))
  }

  return(
    <>
    {petList.map((pet => (
      <div key={pet._id} className="col-4 my-4" onClick={() => history.push(`/pet/${pet._id}`)}>
        <div className="card text-center shadow" style={{width: '16rem'}}>
          <div className="image-container">
            <img src={pet.pictures} width="500px" height="200px" className="card-img-top w3-card-4" alt="pics" />
              <div className="top-right">
                <p className="m-0" ><i onClick={() => handleFavorite(pet._id)} className="icon-hearted shadow-lg fa fa-heart-o" style={{fontSize: '20px', fontWeight: '600', color: '#ce0d81'}}></i></p>
              </div>
          </div>
          <div className="card-body">
            <h4 className="card-title">{(pet.name.toUpperCase())}</h4>
              <div style={{fontSize: '14px', display: 'flex', justifyContent: "space-between", paddingRight: '40px', paddingLeft: '40px' }}>
                <p>{pet.age}</p>
                <p><span style={{backgroundColor: '#ce0d81', padding: '5px', color: 'white', borderRadius: '10px' }}>{pet.breed}</span></p>
              </div>
          </div>
        </div>
      </div>
    )))}
    </>
  )
}