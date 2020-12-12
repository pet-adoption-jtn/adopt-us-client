import axios from '../config/axios'
import { Toast } from '../config/swal'

export function getDetails(id) {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: `/pets/${id}`
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