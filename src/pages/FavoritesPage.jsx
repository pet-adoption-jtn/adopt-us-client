import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchFavorites, removeFavorites } from '../store/actions'
import '../style/css/favorites-page.css'

function FavoritesPage(props) {
  const history = useHistory()
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites)

  useEffect(() => {
    dispatch(fetchFavorites())
  }, [dispatch])

  function handleUnFavorites(id) {
    dispatch(removeFavorites(id))
  }

  return (
    <div className="favPage">
      <div className="container">
        <div className="">
          <div className="mt-5">
            <h1 className="titleFavorites">Your Favorites Pets</h1>
          </div>
          <div className="d-flex row mb-5">
            {
              favorites.map((fav) => (
                <div key={fav._id} className="col-4 pt-2">
                  <div className="posisiImgFav">
                    <img className="imgCard w3-card-4" src={fav.Pet.pictures[0]} alt={fav.Pet.name}/>
                    {/* <img onClick={() => handleUnFavorites(fav._id)} className="imgLoveFav" src={'https://freeiconshop.com/wp-content/uploads/edd/heart-compact-flat-128x128.png'} alt={'Love'}/> */}
                    <p className="m-0" ><i onClick={() => handleUnFavorites(fav._id)} className="imgLoveFav icon-hearted shadow-lg fa fa-heart-o" style={{fontSize: '20px', fontWeight: '600', color: '#ce0d81'}}></i></p>
                  </div>
                  <div className="w3-card-4 infoCardFav">
                    <h1><strong>{fav.Pet.name}</strong></h1> 
                    <div className="d-flex" style={{ justifyContent: 'space-evenly' }}>
                      <h5 className="text-dark" style={{ padding: '5px', borderRadius: '10px' }}>{fav.Pet.age}</h5>
                      <h5 style={{ backgroundColor: 'rgb(180,61,102)', color: 'white', padding: '5px', borderRadius: '10px' }}>{fav.Pet.breed}</h5>
                    </div>
                    <button onClick={() => history.push(`/pet/${fav.pet_id}`)} className="btn my-4 btnFav">Ask About me</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavoritesPage