import axios from '../config/axios'
import { Toast } from '../config/swal'

export function fetchAllPets () {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: '/pets',
        method: 'GET'
      })
      await dispatch({
        type: 'SET_LANDING_PAGE',
        payload: data
      })

      await dispatch({
        type: 'SET_LOADING_DATA',
        payload: false
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getDetails(id) {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: `/pets/details/${id}`
    })
      .then(({ data }) => {
        dispatch({
          type: 'SET_DETAILS',
          payload: data
        })
      })
      .catch(console.log)
      .finally(() => {
        dispatch({
          type: 'SET_DETAIL_LOADING',
          payload: false
        })
      })
  }
}

export function addToFavorite (pet_id) {
  return async (dispatch) => {
    try {
      const access_token = localStorage.getItem('access_token')
      const { data } = await axios({
        method: 'POST',
        data: { pet_id },
        headers: { access_token }
      })
      if (data) {
        Toast.fire({
          icon: 'success',
          title: 'Added to favorites'
        })
      }
    } catch (error) {
      console.log(error); 
    }
  }
}

export function fetchOwnerPet() {
  return async (dispatch) => {
    try {
      const access_token = localStorage.getItem('access_token')
      const { data } = await axios({
        method: 'GET',
        url: '/pets/owner',
        headers: {
          access_token
        }
      })
      await dispatch({
        type: 'SET_OWNER_PET',
        payload: data
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export function addNewPet(newPet) {
  return (dispatch) => {
    const access_token = localStorage.getItem('access_token')
    axios({
      method: 'POST',
      data: newPet,
      headers: {
        access_token
      },
      url: '/pets'
    })
      .then(({ data }) => {
        fetchOwnerPet()
      })
      .catch(console.log)
  }
}

export function deletePet(id) {
  return (dispatch) => {
    const access_token = localStorage.getItem('access_token')
    axios({
      method: 'DELETE',
      url: `/pets/${id}`,
      headers: {
        access_token
      }
    })
      .then(({ data }) => {
        fetchOwnerPet()
        return data
      })
      .catch(console.log)
  }
}

export function adoptPet({ pet, status }) {
  return (dispatch) => {
    const access_token = localStorage.getItem('access_token')
    axios({
      method: 'PATCH',
      url: `/pets/${pet._id}`,
      headers: {
        access_token
      },
      data: {
        status
      }
    })
      .then(({ data }) => {

      })
      .catch(console.log)
  }
}