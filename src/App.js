import React, {useEffect} from "react";
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Routes }
from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";



function App() {

  const [{dispatch}] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, );

  return (
    //BEM
    <Router>
    <div className="app">
    <Header />
    <Routes>

    <Route path="/" element={<Home />} />

  

<Route path="/Checkout" element={<Checkout />} />
  
<Route path="/Login" element={<Login />} />
  





 

</Routes>
    
     
    </div>
    </Router>
  );
  

}

export default App;
