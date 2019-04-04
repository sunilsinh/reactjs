import React, { Component } from 'react';
import Service from './Component/Service';
import Portfolio from './Component/Portfolio';
import About from './Component/About';
import Team from './Component/Team';
import Clients from './Component/Clients';
import Contact from './Component/Contact';
import Navigation from './Component/Navigation';
import Header from './Component/Header';
import bootstrap from './assets/vendor/bootstrap/css/bootstrap.min.css';
import all from './assets/vendor/fontawesome-free/css/all.min.css';
import agency from './assets/css/agency.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Error from './Component/Error';
import Home from './Component/Home';
class App extends Component {
  render() {
    return (
				<div>
        <BrowserRouter>
				<Navigation />
				<switch>
        <Route path="/service" component={Service} />
				<Route path="/about" component={About} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/team" component={Team} />
				<Route path="/client" component={Clients} />
				<Route path="/contact" component={Contact} />
				<Route  component={Error} />
        </switch>
				</BrowserRouter>
					
				</div>
		
    );
  }
}

export default App;
