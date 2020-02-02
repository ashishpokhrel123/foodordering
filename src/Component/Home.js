import React, { Component } from 'react'

import UserNavbar from './Layouts/UserNavbar';
import Category from './Category';
import Poppular from './Poppular';
import Restuarant from './Restuarant';
import Footer from './Layouts/Foot';

export default class Home extends Component {

    


   
    render() {
        return (
            <div>
                <UserNavbar />
                <Category />
                <Poppular />
                <Restuarant />
                <Footer />
                
            </div>
        )
    }
}
