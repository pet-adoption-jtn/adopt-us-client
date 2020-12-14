import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOwnerPet, deletePet, adoptPet } from '../store/actions'
import { Swal, Toast } from '../config/swal'
import { useHistory } from 'react-router-dom'

export default function OwnerPage (props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const my_pets = useSelector(state => state.owners_pets)

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
    <div className="container mt-3">
      <h2 className="text-center mb-3">Your Pets</h2>
      <button className="btn btn-success mb-3" onClick={() => history.push('/addPet')}><span className="fas fa-paw"></span>  Add a new Pet</button>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Breed</th>
            <th>Requested for Adoption</th>
            <th>Adopted</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            my_pets.map(pet => (
              <tr key={pet._id}>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>{pet.breed}</td>
                <td>
                  {
                    pet.request ? 'Requested' : '-'
                  }
                </td>
                <td>
                  {
                    pet.status ? 'Adopted' : 'Not Adopted'
                  }
                </td>
                <td>
                  {
                    pet.request ?
                    <div>
                      <button className="btn btn-primary mr-2" onClick={() => handleAdoptPet({ pet, status: true })}>Approve</button>
                      <button className="btn btn-danger" onClick={() => handleAdoptPet({ pet, status: false })}>Cancel</button>
                    </div>
                    :
                    <div>
                      <button className="btn btn-primary mr-2">Edit</button>
                      <button className="btn btn-danger" onClick={() => handleDeletePet(pet._id)}>Delete</button>
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