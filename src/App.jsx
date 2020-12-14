import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { DetailPage, OwnerPage, AddPetPage } from './pages'
import Navbar from './components/Navbar';
import Landing from './pages/Landing';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Landing }/>
        <Route path="/pet/:id" component={ DetailPage }/>
        <Route path="/myPets" component={ OwnerPage }/>
        <Route path="/addPet" component={ AddPetPage } />
      </Switch> 
    </>
  );
}

export default App;
