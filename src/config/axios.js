import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api-adopt-us.herokuapp.com'
})

export default instance