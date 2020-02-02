import React, { Component,useState } from 'react'


import './navbar.css';
import './usernavbar.css';

import {loginmodal} from '../User/LoginModal';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';


import useravatar from '../assets/user.png';
import bagavatar from '../assets/bag.png';


export default class Navbar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {

    
      

       
    }
   
   
  }
  
  
  
  
  render() {
    

    return (
      <div>
          <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">Food</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        
      </li>
      <li class="nav-item">
     
      </li>
      <li class="nav-item dropdown">
        
        
      </li>
      
    </ul>
    
    <form class="form-inline my-2 my-lg-0">

    
  
    
   
    <img src={useravatar} id="user"/>
    <img src={bagavatar}  id="bag"/>
    
 
  </form>
  </div>
    
  
</nav>
     
      </div>
    )
  }
}

