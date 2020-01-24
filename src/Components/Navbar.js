import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
             <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand">Food</a>
  <form class="form-inline">
    <button className="btn btn-outline-success" id="login" type="button">Login</button>
    <button className="btn btn-outline-success"  id="register" type="button">Register</button>
    
  </form>
  
</nav>
    </div>
   
  );
}
export default Example;
