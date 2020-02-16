import React from 'react'
import  Navbar  from '../Layouts/Navbar';
import Category from './Category'
import Poppular from './Poppular'
import Footer from '../Layouts/Foot'
import Restuarant from './Restuarant'
import ResturantFood from './ResturantFood';



export default function LandingPage() {
    return (
        <div>
             <Navbar />

            <Category />

           <Poppular />

            <Restuarant/>
           
           <ResturantFood />

           <Footer/>
        </div>
    )
}
