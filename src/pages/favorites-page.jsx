import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../style/css/favorites-page.css'

function FavoritesPage(props) {
  const history = useHistory()
  const [dataFav, setDataFav] = useState([
    {
      _id: 1,
      name: 'Bambang',
      img_url: 'https://images.unsplash.com/photo-1598200689708-8c613f73b2a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      gender: 'Male',
      age: 'Young',
      color: 'balck'
    },
    {
      _id: 2,
      name: 'Mawar',
      img_url: 'https://images.unsplash.com/photo-1561438774-1790fe271b8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1402&q=80',
      gender: 'Female',
      age: 'Old',
      color: 'white'
    },
    {
      _id: 3,
      name: 'Udin',
      img_url: 'https://images.unsplash.com/photo-1511694009171-3cdddf4484ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      gender: 'Male',
      age: 'Young',
      color: 'burlywood'
    },
    {
      _id: 4,
      name: 'Moka',
      img_url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80',
      gender: 'Female',
      age: 'Young',
      color: 'burlywood'
    }
  ])

  function handleUnFavorites() {

  }

  function handleDetail() {

  }

  function handleChangePage(page) {
    history.push(page)
  }

  return (
    <div className="container">
      <div className="">
        <div className="mt-5">
          <h1 className="titleFavorites">Favorites Page</h1>
          <button onClick={() => handleChangePage('/')} className="btn btnFav my-3">Back Home</button>
        </div>
        <div className="d-flex row mb-5">
          {
            dataFav.map((fav) => (
              <div key={fav._id} className="col-4 pt-2">
                <div className="posisiImgFav">
                  <img className="imgCard w3-card-4" src={fav.img_url} alt={fav.name}/>
                  <img onClick={() => handleUnFavorites()} className="imgLoveFav" src={'https://freeiconshop.com/wp-content/uploads/edd/heart-compact-flat-128x128.png'} alt={'Love'}/>
                </div>
                <div className="w3-card-4 infoCardFav">
                  <h1>{fav.name}</h1> 
                  <h5>{fav.age} <strong className="text-dark">|</strong> {fav.gender}</h5>
                  <h5>{fav.color}</h5>
                  <button onClick={() => handleDetail()} className="btn my-4 btnFav">Ask About me</button>
                </div>
              </div>
            ))
          }
          <div className="testData====">
            {/* <div className="col-4 pt-2">
              <div className="posisiImgFav">
                <img className="imgCard w3-card-4" src={'https://images.unsplash.com/photo-1598200689708-8c613f73b2a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'} alt={'dog'}/>
                <img className="imgLoveFav" src={'https://freeiconshop.com/wp-content/uploads/edd/heart-compact-flat-128x128.png'} alt={'Love'}/>
              </div>
              <div className="w3-card-4 infoCardFav">
                <h1>Jon</h1> 
                <h5>Young <strong className="text-dark">|</strong> Female</h5>
                <h5>Black</h5>
                <button className="btn my-4 btnFav">Ask About me</button>
              </div>
            </div>
            <div className="col-4 pt-2">
              <div className="posisiImgFav">
                <img className="imgCard w3-card-4" src={'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'} alt={'dog'}/>
                <img className="imgLoveFav" src={'https://freeiconshop.com/wp-content/uploads/edd/heart-compact-flat-128x128.png'} alt={'Love'}/>
              </div>
              <div className="w3-card-4 infoCardFav">
                <h1>Amike</h1> 
                <h5>Young <strong className="text-dark">|</strong> Female</h5>
                <h5>Black</h5>
                <button className="btn my-4 btnFav">Ask About me</button>
              </div>
            </div>
            <div className="col-4 pt-2">
              <div className="posisiImgFav">
                <img className="imgCard w3-card-4" src={'https://images.unsplash.com/photo-1511694009171-3cdddf4484ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'} alt={'dog'}/>
                <img className="imgLoveFav" src={'https://freeiconshop.com/wp-content/uploads/edd/heart-compact-flat-128x128.png'} alt={'Love'}/>
              </div>
              <div className="w3-card-4 infoCardFav">
                <h1>Ayong</h1> 
                <h5>Young <strong className="text-dark">|</strong> Female</h5>
                <h5>Black</h5>
                <button className="btn my-4 btnFav">Ask About me</button>
              </div>
            </div>
            <div className="col-4 pt-2">
              <div className="posisiImgFav">
                <img className="imgCard w3-card-4" src={'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80'} alt={'dog'}/>
                <img className="imgLoveFav" src={'https://freeiconshop.com/wp-content/uploads/edd/heart-compact-flat-128x128.png'} alt={'Love'}/>
              </div>
              <div className="w3-card-4 infoCardFav">
                <h1>Baki</h1> 
                <h5>Young <strong className="text-dark">|</strong> Female</h5>
                <h5>Black</h5>
                <button className="btn my-4 btnFav">Ask About me</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavoritesPage