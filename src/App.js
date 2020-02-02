import React from 'react';


import './App.css';





import Navbar from './Component/Layouts/Navbar';
import UserNavbar from './Component/Layouts/UserNavbar';
import Desc from  './Component/Layouts/Description';
import Category from './Component/Category';
import Poppular from './Component/Poppular';
import Footer from './Component/Layouts/Foot';
import Restuarant from './Component/Restuarant';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './Component/LandingPage';
import PrivateRoute from './Component/PrivateRoute';
import Home from './Component/Home';




function App() {
  return (

    <div className="App">
        
       

       <Router>
         <Route exact path='/' component={LandingPage} />
         <PrivateRoute path='/home' component={Home} />

        
       </Router>
      
  
    </div>

  
    
  );
}

export default App;
