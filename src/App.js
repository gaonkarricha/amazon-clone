import React from "react";
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Routes }
from "react-router-dom";
import Checkout from "./Checkout";



function App() {
  return (
    //BEM
    <Router>
    <div className="app">
    <Header />
    <Routes>

    

<Route path="/checkout">
  
  <Checkout />
</Route>

<Route path="/" element={[<Header />, <Home />]} />

</Routes>
    
     
    </div>
    </Router>
  );
}

export default App;
