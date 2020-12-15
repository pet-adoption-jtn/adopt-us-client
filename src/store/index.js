import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  petList: [],
  pet_detail: {},
  load_detail: true,
  favorites: [],
  owners_pets: [],
  loading: true,
  access_token: '',
  account: {},
  favorites_load: true,
  username: ''
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case "SET_PET_DATA":
      return { ...state, petList: payload }
    case "SET_LOADING_DATA":
      return { ...state, loading: payload }
    case "SET_DETAILS":
      return { ...state, pet_detail: payload }
    case "SET_DETAIL_LOADING":
      return { ...state, load_detail: payload }
    case "SET_FAVORITES":
      return { ...state, favorites: payload }
    case "ADD_FAVORITES":
      return { ...state, favorites: [...state.favorites, payload] }
    case "SET_FAVORITE_LOADING":
      return { ...state, favorites_load: payload }
    case "REMOVE_FAVORITES":
      return { ...state, favorites: state.favorites.filter(fav => fav._id.toString() !== payload.toString()) }
    case "SET_OWNER_PET": 
      return { ...state, owners_pets: payload }
    case "SET_ACCESS_TOKEN":
      return { ...state, access_token: payload }
    case "SET_ACCOUNT":
      return { ...state, account: payload }
    case "DELETE_PET":
      return { ...state, owners_pets: state.owners_pets.filter(pet => pet._id.toString() !== payload.toString()) }
    case "SET_USERNAME":
      return { ...state, username: payload }  
    default:
      return state
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, 
  composeEnhancers(applyMiddleware(thunk))
)

export default store