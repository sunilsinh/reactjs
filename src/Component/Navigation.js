import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class Navigation extends Component{
  render(){
    return (
        <div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/service">Service</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/client">Clinet</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </div>

      )
  }
}
export default Navigation;