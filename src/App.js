import {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './Login';
import {auth} from './Firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{},dispatch] = useStateValue();
useEffect(() => {
  auth.onAuthStateChanged(authUser=>{
    if (authUser){
      dispatch({
        type:"SET_USER",
        user:authUser
      })
    }else{
      dispatch({
        type:"SET_USER",
        user:null
      })
    }
  })
},[]);

  return (
    <Router>
    <div className="App">

      <Switch>
        <Route exact path="/Checkout">
        <Header/>
        <Checkout/>
      </Route>
        <Route exact path="/">
        <Header/>
        <Home/>
      </Route>
      <Route exact path="/Login">
        <Login/>
    </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
