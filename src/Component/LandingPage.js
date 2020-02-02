import React from 'react'
import  Navbar  from './Layouts/Navbar';
import Category from './Category'
import Poppular from './Poppular'
import Footer from './Layouts/Foot'
import Restuarant from './Restuarant'



export default function LandingPage() {
    return (
        <div>
             <Navbar />

            <Category />

           <Poppular />

         <Restuarant/>

           <Footer/>
        </div>
    )
}
