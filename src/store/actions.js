import axios from '../config/axios'
import { Toast } from '../config/swal'

export function googleSignIn(googleToken) {
  return axios({
    method: 'POST',
    url: '/googlesignin',
    data: { googleToken }
  })
}

export function userSignUp(dataSignUp) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: '/register',
        data: dataSignUp
      })
      if (data) {
        Toast.fire({
          icon: 'success',
          title: 'Sign up success full'
        })
      }
    } catch (err) {
      Toast.fire({
        icon: 'error',
        title: err.message || 'Oops, Error'
      })
      console.log(err)
    }
  }
}

export function fetchAllPets () {
  return (dispatch) => {
    axios({
      url: '/pets',
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
        dispatch({
          type: ''
        })
      })
      .catch(err => console.log(err))
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
        })
        .catch(console.log)
    }
  }

export function requestAdoption (payload) {

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
      .catch(console.log)
  }
}

export function filteredByType (type, age, gender, color) {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: `/pets/filter/${type}/${age}/${gender}/${color}`
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

export function handleAdoptionForm(pet_detail, form_data) {
  return (dispatch) => {
    const access_token = localStorage.getItem('access_token')
    axios({
      url: '/pets/request_adoption',
      method: 'POST',
      data: {
        pet_detail,
        form_data
      },
      headers: {
        access_token
      }
    })
      .then(({ data }) => {
        console.log(data)
      })
      .catch(console.log)
      .finally(() => {
        console.log('loading')
      })
  }
}