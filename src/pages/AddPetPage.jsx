import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addNewPet } from '../store/actions'

export default function AddPetPage(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const [form_input, setInput] = useState({
    name: '',
    type: 'dog',
    breed: '',
    age: 'baby',
    gender: 'male',
    color: '',
    pictures: ''
  })

  function handleChange(e) {
    let name = e.target.name
    let value = e.target.value

    setInput({
      ...form_input,
      [name]: value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await dispatch(addNewPet({
      ...form_input,
      pictures: form_input.pictures.split(', ')
    }))
    history.push('/myPets')
  }

  return (
    <>
    <div className="container mt-5">
      <h3 className="text-center">Add A New Pet</h3>
      <form onSubmit={e => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name"
            required
            className="form-control"
            value={form_input.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select 
            name="type" 
            id="type" 
            className="form-control" 
            required 
            onChange={(e) => handleChange(e)} 
            value={form_input.type}
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="breed">Breed</label>
          <input 
            type="text" 
            name="breed" 
            id="breed" 
            required 
            className="form-control"
            value={form_input.breed}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select 
            name="gender" 
            id="gender"
            required
            value={form_input.gender}
            onChange={(e) => handleChange(e)}
            className="form-control"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <select 
            name="age" 
            id="age" 
            className="form-control" 
            required
            value={form_input.age}
            onChange={(e)=> handleChange(e)}
          >
            <option value="baby">Baby (0-2 years)</option>
            <option value="young">Young (2-5 years)</option>
            <option value="adult">Adult (5-8 years)</option>
            <option value="senior">Senior ({'>'}8 years)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input 
            type="text" 
            name="color" 
            id="color" 
            required 
            className="form-control"
            value={form_input.color}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pictures">Pictures</label>
          <textarea 
            type="text" 
            name="pictures" 
            id="pictures" 
            multiple 
            className="form-control"
            placeholder="if more than 1 pictures use a coma (ex: pic1, pic2)"
            value={form_input.pictures}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="btn btn-primary"><span className="fas fa-paw"></span> Add</button>
      </form>
    </div>
    </>
  )
}