import React from 'react'

import './navbar.css';

export default function Navbar() {
    return (
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
  
    <button type="button" class="btn btn-light" id="login">Login</button>
    <button type="button" class="btn btn-success" id="signup">Signup</button>
    
 
  </form>
  </div>
  
</nav>
    )
}
