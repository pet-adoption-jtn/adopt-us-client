import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  petList: [],
  pet_detail: {},
  load_detail: true,
  favorites: []
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case "SET_DETAILS":
      return { ...state, pet_detail: payload }
    case "SET_DETAIL_LOADING":
      return { ...state, load_detail: payload }
    case "SET_FAVORITES":
      return { ...state, favorites: payload }
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