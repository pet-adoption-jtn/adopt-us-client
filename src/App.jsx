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
  SignUpPage,
  AboutCat,
  AboutDog,
  Profile,
  EditPetPage
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
        <Route path="/signup" component={ SignUpPage } />
        <Route path="/signin" component={ SignInPage } />
        <Route path="/about/dog" component={ AboutDog } />
        <Route path="/about/cat" component={ AboutCat } />
        <Route path="/editpet/:id" component={ EditPetPage }/>
        <Route path="/adopt/:id" component={ FormAdoptionPage } />
        <Route path="/favorites" component={ FavoritePage } />
        <Route path="/profile" component={Profile} />
      </Switch> 
      <Footer/>
    </>
  );
}

export default App;
