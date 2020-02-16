import React, { Component,useState } from 'react'


import '../Layouts/navbar.css';
import '../User/usernavbar.css';


import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';


import useravatar from '../assets/user.svg';
import bagavatar from '../assets/shopping-bag.svg';
import Axios from 'axios';


export default class Navbar extends React.Component {
 


  constructor(props) {
    super(props)
  
    this.state = {

      modal : false,
      name: '',
      address: '',
      phone:'',
      email:'',
      username: '',
      password: '',
      user: null

    
      

       
    }

    this.toggle = this.toggle.bind(this);
   
   
  }
  toggle() {

    this.setState({
      modal: !this.state.modal
    })

  }
 

  componentDidMount() {
    Axios.get('http://localhost:3002/users/me',this.config)
    .then((response)=>{
      const data = response.data;
      this.setState({
        user:  { ...this.state.user}
      
      });
      console.log("data fecth");
     
    }).catch(error => console.log(error.response));
  }
  
  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value

    })
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

    
  
    
   
    <img src={useravatar} id="user" onClick={this.toggle}/>
    <img src={bagavatar}  id="bag"/>
    
 
  </form>
  </div>
    
  
</nav>


//Modal

<Modal isOpen={this.state.modal}>
<ModalHeader toggle={this.toggle}><legend>Update</legend></ModalHeader>
    
      <ModalBody>
      
      <form>
            <legend><h3>Update Profile</h3></legend>

            <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" className="form-control"
                value={this.state.name} onChange={this.handlechange} />
            </div>

            <div className="form-group">
                <label>address</label>
                <input type="text" name="address" className="form-control"
                value={this.state.address} onChange={this.handlechange}  />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text" name="email" className="form-control"
                value={this.state.email} onChange={this.handlechange}  />
            </div>
            <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" className="form-control"
                value={this.state.username} onChange={this.handlechange}  />
            </div>
            <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password"
                    value={this.state.password} onChange={this.handlechange}  />
                </div>


            <button type="submit" className="btn btn-primary btn-block" onClick={this.handleupdate}>Update</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
      </ModalBody>
      <ModalFooter>
      <p className="forgot-password ">
                Not registered yet? <a href="/register">sign up?</a>
            </p>
      </ModalFooter>
      
    </Modal>
     
      </div>
    )
  }
}



