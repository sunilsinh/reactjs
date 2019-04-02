import React, {Component} from 'react';
import Navigation from './Navigation';
import HeaderContent from './HeaderContent';
import './../assets/css/agency.min.css';
import './../assets/vendor/bootstrap/css/bootstrap.min.css';
import './../assets/vendor/fontawesome-free/css/all.min.css';
class Header extends Component {
	render(){
		return (
				<div>
					<Navigation />
					<HeaderContent />
					
				</div>
			)
	}
}

export default Header;