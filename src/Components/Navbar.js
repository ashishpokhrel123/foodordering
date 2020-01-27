import React, { Component } from 'react'
import { Form, Button } from 'reactstrap'

import './navbar.css';



export default class Navbar extends Component {
  render() {
    return (

      <div className="Navbar" id = "navbar">

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Food</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#"> <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"></a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#"></a>
      </li>
    </ul>

  <Form className="form-inline my-2 my-lg-0">
    <Button className="btn btn-success my-2 my-sm-0" id="login">Login</Button>
    <Button className="btn btn-success my-2 my-sm-0" id="register">Register</Button>

  </Form>
  </div>
  
</nav>
      </div>
    
     
     
    )
  }
}


