import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { DetailPage, OwnerPage, AddPetPage } from './pages'
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import LoginPage from './pages/login-page'
import RegisterPage from './pages/register-page'
import FavoritesPage from './pages/favorites-page'
import FormAdoptionPage from './pages/form_adoption-page'
import Footer from './components/footer'

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ Landing }/>
        <Route path="/pet/:id" component={ DetailPage }/>
        <Route path="/myPets" component={ OwnerPage }/>
        <Route path="/addPet" component={ AddPetPage } />
        <Route path="/formadoption" component={ FormAdoptionPage } />
        <Route path="/favorites" component={ FavoritesPage } />
        <Route path="/signup" component={ RegisterPage } />
        <Route path="/signin" component={ LoginPage } />
      </Switch> 
      <Footer/>
    </>
  );
}

export default App;
