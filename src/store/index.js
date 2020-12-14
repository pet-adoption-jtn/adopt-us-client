import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  petList: [],
  pet_detail: {},
  load_detail: true,
  favorites: [],
  owners_pets: [],
  loading: true
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case "SET_LANDING_PAGE":
      return { ...state, petList: payload }
    case "SET_LOADING_DATA":
      return { ...state, loading: payload }
    case "SET_DETAILS":
      return { ...state, pet_detail: payload }
    case "SET_DETAIL_LOADING":
      return { ...state, load_detail: payload }
    case "SET_FAVORITES":
      return { ...state, favorites: payload }
    case "SET_OWNER_PET": 
      return { ...state, owners_pets: payload }
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