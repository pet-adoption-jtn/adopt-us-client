import React from 'react'
import { useHistory } from 'react-router-dom'
import '../style/css/favorites-page.css'

function FavoritesPage(props) {
  const history = useHistory()

  return (
    <div className="container">
      <div className="text-center">
        <h1 className="titleLogin">Favorites Page</h1>
      </div>
    </div>
  )
}

export default FavoritesPage