import React from 'react';


import './App.css';





import Navbar from './Component/Layouts/Navbar';
import UserNavbar from './Component/User/UserNavbar';
import Desc from  './Component/Layouts/Description';
import Category from './Component/Pages/Category';
import Poppular from './Component/Pages/Poppular';
import Footer from './Component/Layouts/Foot';
import Restuarant from './Component/Pages/Restuarant';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './Component/Pages/LandingPage';
import PrivateRoute from './Component/PrivateRoute';
import Home from './Component/Pages/Home';
import AdminDashboard from './Component/Admin/AdminDashboard';
import AddFood from './Component/Admin/AddFood';
import AddRestuarant from './Component/Admin/AddRestuarant';
import Register from './Component/User/Register';

import Food from './Component/Pages/Food';





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
          <PrivateRoute path='/food' component={Food}/>

        
       </Router>
      
  
    </div>

  
    
  );
}

export default App;
