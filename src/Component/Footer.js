import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component{
	render(){
		return (
			<footer>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Your Website 2019</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
               <Link to="/">
                <i className="fab fa-twitter"></i>
               </Link>
            </li>
            <li className="list-inline-item">
             <Link to="/">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li className="list-inline-item">
               <Link to="/">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <Link to="/">Privacy Policy</Link>
            </li>
            <li className="list-inline-item">
               <Link to="/">Terms of Use</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  
		)
	}
}

export default Footer;