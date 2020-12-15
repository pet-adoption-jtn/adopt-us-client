import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOwnerPet, deletePet, adoptPet } from '../store/actions'
import { Swal, Toast } from '../config/swal'
import { useHistory } from 'react-router-dom'

export default function OwnerPage (props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const { owners_pets } = useSelector(state => state)
  

  useEffect(() => {
    dispatch(fetchOwnerPet())
  }, [dispatch])

  async function handleDeletePet(pet_id) {
    const res = await Swal.fire({
      icon: 'warning',
      title: 'You will delete this pet from your list',
      text: 'Are you sure ?',
      showCancelButton: true,
      confirmButtonText: 'Delete'
    })     
    if (res.isConfirmed) {
      await dispatch(deletePet(pet_id))
      Toast.fire({
        icon: 'success',
        title: 'deleted'
      })
    }
  }

  function handleAdoptPet(payload) {
    dispatch(adoptPet(payload))
  }

  return (
    <>
    <div className="container my-5">
      <h1 className="mb-3 titleFavorites">Your Pets</h1>
      <button className="btn btn-outline-success mb-3 radisBtn" onClick={() => history.push('/addPet')}><span className="fas fa-paw"></span>  Add a new Pet</button>
      <table className="table text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Breed</th>
            <th>Adopted</th>
            <th>Requested for Adoption</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            owners_pets.map(pet => (
              <tr key={pet._id}>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>{pet.breed}</td>
                <td>
                  {
                    pet.status ? 'Adopted' : 'Not Adopted'
                  }
                </td>
                <td>
                  {
                    pet.request.length ? pet.request.map(((person,index) => (
                      <div className="pt-2" key={index}>
                        <small>Requested by {person.email}</small>
                      </div>
                    ))) : '-'
                  }
                </td>
                <td>
                  {
                    pet.request.length ? pet.request.map(((person, index) => (
                    <div>
                      <button className="btn btn-primary btn-sm mr-2 mb-2" onClick={() => handleAdoptPet({ pet, status: true, person })}>Approve</button>
                      <button className="btn btn-danger btn-sm mb-2" onClick={() => handleAdoptPet({ pet, status: false, person })}>Cancel</button>
                    </div>
                    )))
                    :
                    <div>
                      <button className="btn btn-outline-primary mr-2 radisBtn"><span className="far fa-edit"></span> Edit</button>
                      <button className="btn btn-outline-danger radisBtn" onClick={() => handleDeletePet(pet._id)}><span className="fas fa-trash-alt"></span> Delete</button>
                    </div>
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    </>
  )
}