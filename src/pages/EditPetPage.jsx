import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { Loading } from '../components'
import { editPet, getDetails } from '../store/actions'

function EditPetPage(props) {
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()
  const { pet_detail, load_detail } = useSelector(state => state)

  const [form_input_edit, setInputEdit] = useState({
    name: '',
    type: '',
    breed: '',
    age: '',
    gender: '',
    color: '',
    pic1: '',
    pic2: '',
    pic3: ''
  })

  useEffect(() => {
    dispatch(getDetails(id))
  }, [dispatch, id])

  useEffect(() => {
    if (!load_detail) {
      setInputEdit({
        name: pet_detail.name,
        type: pet_detail.type,
        breed: pet_detail.breed,
        age: pet_detail.age,
        gender: pet_detail.gender,
        color: pet_detail.color,
        pic1: pet_detail.pictures[0],
        pic2: pet_detail.pictures[1] || '',
        pic3: pet_detail.pictures[2] || ''
      })
    }
  }, [load_detail, pet_detail])

  function handleChange(e) {
    let name = e.target.name
    let value = e.target.value

    setInputEdit({
      ...form_input_edit,
      [name]: value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const pictures = [form_input_edit.pic1]
    if (form_input_edit.pic2) {
      pictures.push(form_input_edit.pic2)
    }
    if (form_input_edit.pic3) {
      pictures.push(form_input_edit.pic3)
    }
    await dispatch(editPet({
      pet_data: {
        ...form_input_edit,
        pictures
      },
      pet_id: id
    }))
    history.push('/myPets')
  }

  if (load_detail) return <Loading />

  return (
    <div className="container my-5">
      <form className="form p-5 border shadow-lg" style={{ borderRadius: '10px' }}  onSubmit={(e) => handleSubmit(e)}>
        <div className="d-flex justify-content-between">
          <h2 className="mt-4">Edit Your Pet Data</h2>
          <img src={'./adoptUs.png'} alt={'Adopt.Us'}></img>
        </div>
        <div className="form-group">
          <label className="px-2" htmlFor="name">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name"
            required
            className="form-control"
            value={form_input_edit.name}
            onChange={(e) => handleChange(e)}
            style={{ borderRadius: '20px' }}
          />
        </div>
        <div className="form-group">
          <label className="px-2" htmlFor="type">Type</label>
          <select 
            name="type" 
            id="type" 
            className="form-control" 
            required 
            onChange={(e) => handleChange(e)} 
            value={form_input_edit.type}
            style={{ borderRadius: '20px' }}
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>
        <div className="form-group">
          <label className="px-2" htmlFor="breed">Breed</label>
          <input 
            type="text" 
            name="breed" 
            id="breed" 
            required 
            className="form-control"
            value={form_input_edit.breed}
            onChange={(e) => handleChange(e)}
            style={{ borderRadius: '20px' }}
          />
        </div>
        <div className="form-group">
          <label className="px-2" htmlFor="gender">Gender</label>
          <select 
            name="gender" 
            id="gender"
            required
            value={form_input_edit.gender}
            onChange={(e) => handleChange(e)}
            className="form-control"
            style={{ borderRadius: '20px' }}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label className="px-2" htmlFor="age">Age</label>
          <select 
            name="age" 
            id="age" 
            className="form-control" 
            required
            value={form_input_edit.age}
            onChange={(e)=> handleChange(e)}
            style={{ borderRadius: '20px' }}
          >
            <option value="baby">Baby (0-2 years)</option>
            <option value="young">Young (2-5 years)</option>
            <option value="adult">Adult (5-8 years)</option>
            <option value="senior">Senior ({'>'}8 years)</option>
          </select>
        </div>
        <div className="form-group">
          <label className="px-2" htmlFor="color">Color</label>
          <select 
            name="color" 
            id="color" 
            className="form-control" 
            required
            value={form_input_edit.color}
            onChange={(e)=> handleChange(e)}
            style={{ borderRadius: '20px' }}
          >
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="brwon">Brown</option>
            <option value="gold">Gold</option>
            <option value="grey">Grey</option>
          </select>
        </div>
        <div className="form-group">
          <label className="px-2" htmlFor="pic1">Picture 1</label>
          <input 
            type="text" 
            name="pic1" 
            id="pic1" 
            required 
            className="form-control"
            value={form_input_edit.pic1}
            onChange={(e) => handleChange(e)}
            style={{ borderRadius: '20px' }}
          />
        </div>
        <div className="form-group">
          <label className="px-2" htmlFor="pic2">Picture 2</label>
          <input 
            type="text" 
            name="pic2" 
            id="pic2"
            className="form-control"
            value={form_input_edit.pic2}
            onChange={(e) => handleChange(e)}
            style={{ borderRadius: '20px' }}
          />
        </div>
        <div className="form-group">
          <label className="px-2" htmlFor="pic3">Picture 3</label>
          <input 
            type="text" 
            name="pic3" 
            id="pic3"
            className="form-control"
            value={form_input_edit.pic3}
            onChange={(e) => handleChange(e)}
            style={{ borderRadius: '20px' }}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button style={{ paddingRight: '100px', paddingLeft: '100px', borderRadius: '25px' }} className="mt-3 btn btn-outline-primary mb-5"><span className="fas fa-paw"></span> Update</button>
        </div>
      </form>
    </div>
  )
}

export default EditPetPage