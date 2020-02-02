import React, { Component,useState } from 'react'


import './navbar.css';

import {loginmodal} from '../User/LoginModal';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';


export default class Navbar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {

      modal: false,
      username: '',
      password: '',
      isLoggedIn: false
      

       
    }
    this.toggle = this.toggle.bind(this);
   
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value

    })
  }

  handleLogin = (e) =>{
    e.preventDefault();
    Axios.post('http://localhost:3002/users/login',this.state)
      .then((response)=>{
        console.log(response);
        localStorage.setItem('token', response.data.token)

                this.setState({
                    username: '',
                    password: '',
                    isLoggedIn: true
                })
              


    }).catch((err) => console.log(err.response))


    }
  
  
  
  render() {
    if(this.state.isLoggedIn){
      return <Redirect to='/home'/>
    }
    

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

    
  
    
   
    <Button color="success" onClick={this.toggle}>Login</Button>{' '}
    <Modal isOpen={this.state.modal}>
        
          <ModalBody>
          
          <form>
                <legend><h3>Sign In</h3></legend>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" name="username" className="form-control" placeholder="Username"
                    value={this.state.username} onChange={this.handlechange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password"
                    value={this.state.password} onChange={this.handlechange}  />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleLogin}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
          </ModalBody>
          <ModalFooter>
          <p className="forgot-password ">
                    Not registered yet? <a href="#">sign up?</a>
                </p>
          </ModalFooter>
          
        </Modal>
    
 
  </form>
  </div>
    
  
</nav>
     
      </div>
    )
  }
}

