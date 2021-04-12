import './App.css';
import Pokemon from './component/Pokemon';
import {BrowserRouter as Router,Switch,route, Route} from 'react-router-dom'
import Signin from './component/Signin';
import Signup from './component/Signup';
import Userfav from './component/Userfav';

function App() {
  return (
    <div className="App">
       <div>
      <Router>
        <Switch>
          <Route exact path='/signin'>
            <Signin />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/'>
            <Pokemon />
          </Route>
          <Route exact path='/userfav'>
            <Userfav />
          </Route>
        </Switch>
      </Router>
      </div >
      
    </div>
  );
}

export default App;
