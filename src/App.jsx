import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { DetailPage, OwnerPage, AddPetPage } from './pages'

function App() {
  return (
    <>
      <Switch>
        <Route path="/pet/:id" component={ DetailPage }/>
        <Route path="/myPets" component={ OwnerPage }/>
        <Route path="/addPet" component={ AddPetPage } />
      </Switch> 
    </>
  );
}

export default App;
