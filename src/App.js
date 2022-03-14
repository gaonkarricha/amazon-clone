import React from "react";
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Routes }
from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from './Login';




function App() {
  return (
    //BEM
    <Router>
    <div className="app">
    <Header />
    <Routes>

    <Route path="/" element={<Home />} />

  <Route path="./Login"  element={<Login />} />

<Route path="./Checkout" element={<Checkout />} />
  
  




 

</Routes>
    
     
    </div>
    </Router>
  );
}

export default App;
