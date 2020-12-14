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
  }, [])

  function handleUnFavorites(id) {
    dispatch(removeFavorites(id))
  }

  return (
    <div className="favPage">
      <div className="container">
        <div className="">
          <div className="mt-5">
            <h1 className="titleFavorites">Favorites Page</h1>
            <button onClick={() => history.push('/')} className="btn btnFav my-3">Back Home</button>
          </div>
          <div className="d-flex row mb-5">
            {
              favorites.map((fav) => (
                <div key={fav._id} className="col-4 pt-2">
                  <div className="posisiImgFav">
                    <img className="imgCard w3-card-4" src={fav.Pet.pictures[0]} alt={fav.Pet.name}/>
                    <img onClick={() => handleUnFavorites(fav._id)} className="imgLoveFav" src={'https://freeiconshop.com/wp-content/uploads/edd/heart-compact-flat-128x128.png'} alt={'Love'}/>
                  </div>
                  <div className="w3-card-4 infoCardFav">
                    <h1>{fav.Pet.name}</h1> 
                    <h5>{fav.Pet.age} <strong className="text-dark">|</strong> {fav.Pet.gender}</h5>
                    <h5>{fav.Pet.color}</h5>
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