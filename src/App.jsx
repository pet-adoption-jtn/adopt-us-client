import './App.css';
import Landing from './pages/Landing';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <> 
      <Navbar />
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </>
  );
}

export default App;
