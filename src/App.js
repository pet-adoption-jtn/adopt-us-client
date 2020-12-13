// import { ApolloProvider } from '@apollo/client'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import LoginPage from './pages/login-page'
import RegisterPage from './pages/register-page'
import FavoritesPage from './pages/favorites-page'
import FormAdoptionPage from './pages/form_adoption-page'

function App() {
  return (
    <Switch> 
      <Route path="/formadoption">
        <FormAdoptionPage/>
      </Route>
      <Route path="/favorites">
        <FavoritesPage/>
      </Route>
      <Route path="/register">
        <RegisterPage/>
      </Route>
      <Route path="/">
        <LoginPage/>
      </Route>
    </Switch>
  );
}

export default App;
