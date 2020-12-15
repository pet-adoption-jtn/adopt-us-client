import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { 
  DetailPage, 
  OwnerPage, 
  AddPetPage, 
  Landing, 
  FavoritePage, 
  FormAdoptionPage, 
  SignInPage, 
  SignUpPage
} from './pages'
import { 
  NavBar,
  Footer
} from './components';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const access_token = localStorage.getItem('access_token')
    const account = localStorage.getItem('account')
    if (access_token) {
      dispatch({ type: "SET_ACCESS_TOKEN", payload: access_token })
    }
    if (account) {
      dispatch({ type: 'SET_ACCOUNT', payload: JSON.parse(account) })
    }
  }, [dispatch])
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Landing }/>
        <Route path="/pet/:id" component={ DetailPage }/>
        <Route path="/myPets" component={ OwnerPage }/>
        <Route path="/addPet" component={ AddPetPage } />
        <Route path="/formadoption" component={ FormAdoptionPage } />
        <Route path="/favorites" component={ FavoritePage } />
        <Route path="/signup" component={ SignUpPage } />
        <Route path="/signin" component={ SignInPage } />
      </Switch> 
      <Footer/>
    </>
  );
}

export default App;
