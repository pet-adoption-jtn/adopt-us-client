import React from 'react'
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

function App() {
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
