import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css'
import Navbar from './components/Navbar'
import Pokedex from './pages/Pokedex';
import IndividualPokemon from './pages/IndividualPokemon';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path ="/">
          <Home />
        </Route>
        <Route exact path ="/pokedex">
          <Pokedex />
        </Route>
        <Route exact path="/pokedex/:id">
          <IndividualPokemon />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
