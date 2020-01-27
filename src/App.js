import React from 'react';
import logo from './logo.svg';

import './App.css';

import './Components/navbar.css';



import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Landing from './Components/Landing';

function App() {
  return (

    <div className="App">
        
         <Navbar/>
         <Landing />
         <Body />
    </div>

  
    
  );
}

export default App;
