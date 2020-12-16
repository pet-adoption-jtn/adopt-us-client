import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOwnerPet, deletePet, adoptPet } from '../store/actions'
import { Swal } from '../config/swal'
import { useHistory } from 'react-router-dom'
import { Loading } from '../components'

export default function OwnerPage (props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const { owners_pets, loading } = useSelector(state => state)
  

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
    }
  }

  async function handleAdoptPet(payload) {
    if (payload.status) {
      const res = await Swal.fire({
        icon: 'warning',
        title: 'Do you want to approve this request ?',
        showCancelButton: true,
        confirmButtonText: 'Approve'
      })
      if (res.isConfirmed) {
        await dispatch(adoptPet(payload))
      }
    } else {
      const res = await Swal.fire({
        icon: 'warning',
        title: 'You will cancel this request',
        showCancelButton: true,
        confirmButtonText: 'Yes'
      })
      if (res.isConfirmed) {
        await dispatch(adoptPet(payload))
      }
    }
  }

  if (loading) return <Loading />

  return (
    <>
    <div className="container my-5 w3-animate-opacity">
      <h1 className="mb-3 titleFavorites">Your Pets</h1>
      <button className="btn btn-outline-success mb-3 radisBtn" onClick={() => history.push('/addPet')}><span className="fas fa-paw"></span>  Add a new Pet</button>
      <table className="table text-center">
        <thead>
          <tr>
            <th>#</th>
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
            owners_pets.map((pet, index) => (
              <tr key={pet._id}>
                <td className="align-middle">{index + 1}</td>
                <td className="align-middle">{pet.name}</td>
                <td className="align-middle">{pet.type}</td>
                <td className="align-middle">{pet.breed}</td>
                <td className="align-middle">
                  {
                    pet.status ? 'Adopted' : 'Not Adopted'
                  }
                </td>
                <td className="align-middle">
                  {
                    pet.request.length ? pet.request.map(((person,index) => (
                      <div className="my-4" key={index}>
                        <p className="m-0 p-0">Requested by {person.email}</p>
                      </div>
                    ))) : '-'
                  }
                </td>
                <td className="align-middle">
                  {
                    pet.request.length ? pet.request.map(((person, index) => (
                    <div key={index}>
                      <button className="btn btn-outline-primary mr-2 mb-2 radisBtn" onClick={() => handleAdoptPet({ pet, status: true, person })}><span className="fas fa-user-check"></span> Approve</button>
                      <button className="btn btn-outline-danger mb-2 radisBtn" onClick={() => handleAdoptPet({ pet, status: false, person })}><span className="fas fa-ban"></span> Cancel</button>
                    </div>
                    )))
                    :
                    <div>
                      <button onClick={() => history.push(`/editpet/${pet._id}`)} className="btn btn-outline-primary mr-2 radisBtn"><span className="far fa-edit"></span> Edit</button>
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