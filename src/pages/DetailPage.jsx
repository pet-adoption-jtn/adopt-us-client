import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getDetails, requestAdoption } from '../store/actions'
import { Loading } from "../components";
import { Swal } from '../config/swal';

export default function DetailPage (props) {
  const { id } = useParams()
  const dispatch = useDispatch()
  const history= useHistory()
  
  const { pet_detail, load_detail } = useSelector(state => state)

  useEffect(() => {
    dispatch(getDetails(id))
  }, [dispatch, id])
  

  function handleAdoptButton () {
    const access_token = localStorage.getItem('access_token')
    if (access_token) {
      history.push('/formadoption', { pet_detail })
    } else {
      history.push('/signin')
      Swal.fire({
        icon: 'warning',
        title: 'Please Sign In First'
      })
    }
  }

  if (load_detail) return <Loading />

  return (
    <>
    <div className="container my-5">
      <div id="MyCarousel" className="carousel slide w3-card-4" data-ride="carousel">
        <div className="carousel-inner">
          {
            pet_detail.pictures.map((pic, i) => (
              <div key={i} className={i === 0 ? 'carousel-item active': 'carousel-item'}>
                <img src={pic} alt="slide" height="300px" className="d-block w-100"/>
              </div>
            ))
          }
          <a href="#MyCarousel" className="carousel-control-prev" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon bg-dark p-3" style={{ borderRadius: '50px' }} aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a href="#MyCarousel" className="carousel-control-next" role="button" data-slide="next">
            <span className="carousel-control-next-icon bg-dark p-3" style={{ borderRadius: '50px' }} aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <br/>
      <div className="row mb-5">
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title mb-3">{pet_detail.name}</h1>
              <h6 className="card-subtitle">{pet_detail.breed} | {pet_detail.Owner.address}</h6>
              <hr/>
              <p className="card-text">
                {pet_detail.age.charAt(0).toUpperCase() + pet_detail.age.slice(1)} | {pet_detail.gender.charAt(0).toUpperCase() + pet_detail.gender.slice(1)}
              </p>
              <hr/>
              <div className="card-text">
                <h3>About</h3>
                <div className="row mt-3">
                  <div className="col-2">
                    <p><strong>Name</strong></p>
                    <p><strong>Type</strong></p>
                    <p><strong>Breed</strong></p>
                    <p><strong>Age</strong></p>
                    <p><strong>Gender</strong></p>
                    <p><strong>Color</strong></p>
                  </div>
                  <div className="col-6">
                    <p>{pet_detail.name}</p>
                    <p>{pet_detail.type.charAt(0).toUpperCase() + pet_detail.type.slice(1)}</p>
                    <p>{pet_detail.breed}</p>
                    <p>{pet_detail.age.charAt(0).toUpperCase() + pet_detail.age.slice(1)}</p>
                    <p>{pet_detail.gender.charAt(0).toUpperCase() + pet_detail.gender.slice(1)}</p>
                    <p>{pet_detail.color}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <button className="btn btn-purple btn-block">
                    <span className="fas fa-heart mr-2"></span>Favorite {pet_detail.name}
                  </button>
                  <br/>
                  <button className="btn btn-outline-primary btn-block" onClick={() => handleAdoptButton()}>
                    Adopt {pet_detail.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Contact {pet_detail.name}</h3>
                  <hr/>
                  <div className="card-text">
                    <h6 className="fas fa-user"><span className="ml-3">{pet_detail.Owner.username}</span></h6>
                    <br/>
                    <h6 className="fas fa-map-marker-alt"><span className="ml-3">{pet_detail.Owner.address}</span></h6>
                    <br/>
                    <h6 className="fas fa-phone-alt"><span className="ml-3">{pet_detail.Owner.phone}</span></h6>
                    <br/>
                    <h6 className="fas fa-envelope"><span className="ml-3">{pet_detail.Owner.email}</span></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
