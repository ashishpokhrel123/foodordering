import React from 'react';


import './App.css';





import Navbar from './Component/Layouts/Navbar';
import Desc from  './Component/Layouts/Description';
import Category from './Component/Category';
import Poppular from './Component/Poppular';
import Footer from './Component/Layouts/Foot';
import Restuarant from './Component/Restuarant';




function App() {
  return (

    <div className="App">
        
         <Navbar/>

         <Category />

        <Poppular />

        <Restuarant />

       <Footer />
      
  
    </div>

  
    
  );
}

export default App;
