import {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './Login';
import {auth} from './Firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe(
  "pk_test_51J1ZL2SJ18ah23ZjRZ1HvMmVCr418S5okjmkl6Opnq4EHot4j5wInfkurDkwnPuojz8IKRSH3fsuDC4AYynddfUe00lLRKZdLH"
)
function App() {
  const [{user},dispatch] = useStateValue();
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
      <Route exact path="/Login">
        <Login/>
    </Route>
    <Route exact path="/payment">
      <Header/>
      <Elements stripe={promise}>
      <Payment/>
      </Elements>
  </Route>
  <Route  path="/orders">
    <Header/>
    <Orders/>
  </Route>
  <Route  path="/">
    <Header/>
    <Home/>
  </Route>
</Switch>
</div>
</Router>
  );
}

export default App;
