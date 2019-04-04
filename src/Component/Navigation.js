import React, {Component} from 'react';
import {NavLink,Link} from 'react-router-dom';


class Navigation extends Component{
  render(){
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
            
              <Link className="navbar-brand js-scroll-trigger" to="/page-top"></Link>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item">
                     <NavLink className="nav-link js-scroll-trigger" to="/">Home</NavLink>
                    </li>           
                    <li className="nav-item">
                     <NavLink className="nav-link js-scroll-trigger" to="/service">Service</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link js-scroll-trigger" to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link js-scroll-trigger" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                     <NavLink className="nav-link js-scroll-trigger" to="/contact">Contact</NavLink>
                    </li>
                </ul>
              </div>
         </div>
  </nav>
        </div>

      )
  }
}
export default Navigation;