import axios from '../config/axios'
import { Swal, Toast } from '../config/swal'

export function updateProfile (payload) {
  return (dispatch) => {
    const access_token = localStorage.getItem('access_token')
    axios({
      method: 'POST',
      url: '/edituser',
      headers: {
        access_token
      },
      data: payload
    })
      .then(({ data }) => {
        dispatch({
          type: 'SET_ACCESS_TOKEN',
          payload: data.access_token
        })
        dispatch({
          type: 'SET_ACCOUNT',
          payload: data.account
        })
      })
      Toast.fire({
        icon: 'success',
        title: 'Your profile has been updated!'
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops..',
          text: err.response.data.message || 'Something Went Wrong'
        })
      })
  }
}

export function googleSignIn(googleToken) {
  return axios({
    method: 'POST',
    url: '/googlesignin',
    data: { googleToken }
  })
}

export function userSignUp(dataSignUp) {
  return axios({
    method: 'POST',
    url: '/register',
    data: dataSignUp
  })
}

export function fetchAllPets (foo = {}) {
  const { type, color, gender, age } = foo
  const query = []
  if (type) {
    query.push(`type=${type}`)
  }
  if (color) {
    query.push(`color=${color}`)
  }
  if (gender) {
    query.push(`gender=${gender}`)
  }
  if (age) {
    query.push(`age=${age}`)
  }
  return (dispatch) => {
    axios({
      url: `/pets?${query.join('&')}`,
      method: 'GET'
    })
      .then(({ data }) => {
        dispatch({
          type: 'SET_PET_DATA',
          payload: data
        })
      })
      .catch(console.log)
      .finally(() => {
        dispatch({
          type: 'SET_LOADING_DATA',
          payload: false
        })
      })
  }
}


export function getDetails(id) {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: `/pets/detail/${id}`
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

export function fetchFavorites () {
  return (dispatch) => {
    const access_token = localStorage.getItem('access_token')
    axios({
      method: 'GET',
      url: '/favorites' ,
      headers: {
        access_token
      }
    })
      .then(({ data }) => {
        dispatch({
          type: 'SET_FAVORITES',
          payload: data
        })
      })
      .catch(console.log)
      .finally(() => {
        dispatch({
          type: 'SET_FAVORITE_LOADING',
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
        url: '/favorites',
        data: { pet_id },
        headers: { access_token }
      })
      await dispatch({
        type: 'ADD_FAVORITE',
        payload: data
      })
      await Toast.fire({
        icon: 'success',
        title: 'added to favorites'
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: error.response.data.message || 'Something Went Wrong'
      })
      console.log(error.response); 
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
        dispatch({
          type: 'ADD_OWNERS_PETS',
          payload: data
        })
      })
      .catch(err => {
        console.log(err.response);
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: err.response.data.message || 'Something Went Wrong'
        })
      })
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
          dispatch({
            type: 'DELETE_PET',
            payload: id
          })
          Toast.fire({
            icon: 'success',
            title: data.message
          })
        })
        .catch((err) => {
          console.log(err.response);
          Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: err.response.data.message || 'Something Went Wrong'
          })
        })
    }
  }

export function adoptPet({ pet, status, person: adopter }) {
  return (dispatch) => {
    const access_token = localStorage.getItem('access_token')
    axios({
      method: 'PATCH',
      url: `/pets/${pet._id}`,
      headers: {
        access_token
      },
      data: {
        pet,
        status,
        adopter
      }
    })
      .then(({ data }) => {
        Toast.fire({
          icon: 'success',
          title: 'Message delivered to adopter'
        })
        dispatch({
          type: 'EDIT_OWNER_PET',
          payload: data.data
        })
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: err.response.data.message || 'Something Went Wrong'
        })
      })
  }
}

export function signIn(payload) {
  return axios({
    method: 'POST',
    url: '/login',
    data: payload
  })
}

export function removeFavorites (id) {
  const access_token = localStorage.getItem('access_token')
  return (dispatch) => {
    axios({
      method: 'DELETE',
      url: `/favorites/${id}`,
      headers: {
        access_token
      }
    })
      .then(({ data }) => {
        dispatch({
          type: 'REMOVE_FAVORITES',
          payload: id
        })
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: err.response.data.message || 'Something Went Wrong'
        })
      })
  }
}


export function handleAdoptionForm(pet_detail, form_data, adopter) {
  return (dispatch) => {
    const access_token = localStorage.getItem('access_token')
    axios({
      url: '/pets/request_adoption',
      method: 'POST',
      data: {
        pet_detail,
        form_data,
        adopter
      },
      headers: {
        access_token
      }
    })
      .then(({ data }) => {
        Toast.fire({
          icon: 'success',
          title: data.message
        })
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops',
          text: err.response.data.message || 'Something Went Wrong'
        })
      })
  }
}