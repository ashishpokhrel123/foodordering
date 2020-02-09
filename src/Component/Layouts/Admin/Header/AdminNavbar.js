import React, { Component } from 'react'

import './adminnavbar.css';


export default class AdminNavbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sidenavbar:false
        }
    }
     
    
    render() {
        return (
            <div class="ad">
            <div className="tophead">
                <div className="brand">
                    Welcome,Admin

                </div>
                <div>
                <span className="menulines" onClick={this.handleNavbaropen}>&#9776;</span>
                </div>
                <div className="sidenavbar" id="sidenav">
                    
                    <a href="#">Home</a>
                    <a href="#">Add Restuarant</a>
                    <a href="#">Add Food</a>
                    <a href="#">Order</a>
                    <a href="#">Active User </a>
                </div>
                <section className="mainpart">
                    <h2>Main Part</h2>
                </section>
                
            </div>
            </div>
           
            
        )
       
    }
}
