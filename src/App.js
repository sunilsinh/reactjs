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
class App extends Component {
  render() {
    return (
				<div>
          <Navigation />
					<Header />
					<Service />
					<Portfolio />
					<About />
					<Team />
					<Clients />
					<Contact />
				</div>
		
    );
  }
}

export default App;
