import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { DetailPage } from './pages'

function App() {
  return (
    <>
      <Switch>
        <Route path="/pet/:id" component={ DetailPage }/>
      </Switch> 
    </>
  );
}

export default App;
