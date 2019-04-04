import React, {Component} from 'react';
import bootstrap from './../assets/vendor/bootstrap/css/bootstrap.min.css';
import all from './../assets/vendor/fontawesome-free/css/all.min.css';
import agency from './../assets/css/agency.min.css';
import {Link} from 'react-router-dom';
class Header extends Component{
	render(){
		return (
			  <header className="masthead">
			    <div className="container">
			      <div className="intro-text">
			        <div className="intro-lead-in">Welcome To Our Studio</div>
			        <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
			        <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to="#services">Tell Me More</Link>
			      </div>
			    </div>
			  </header>
			)
	}
}
export default Header;