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
import AdminDashboard from './Component/Layouts/Admin/AdminDashboard';
import AddFood from './Component/AddFood';
import AddRestuarant from './Component/AddRestuarant';
import Register from './Component/Layouts/Register';





function App() {
  return (

    <div className="App">
        
       

       <Router>
         <Route exact path='/' component={LandingPage} /> 
         <Route path='/register' component={Register} />
         <PrivateRoute path='/home' component={Home} />
         <PrivateRoute path ='/admin' component={AdminDashboard} />
         <PrivateRoute path='/addfood' component={AddFood}/>
         <PrivateRoute path='/addresturant' component={AddRestuarant}/>

        
       </Router>
      
  
    </div>

  
    
  );
}

export default App;
