import React,{Component} from 'react';
import Service from './../Component/Service';
import Portfolio from './../Component/Portfolio';
import About from './../Component/About';
import Team from './../Component/Team';
import Clients from './../Component/Clients';
import Contact from './../Component/Contact';
import Navigation from './../Component/Navigation';

import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Error from './../Component/Error';
import Home from './../Component/Home';

class Routes extends Component {
	render(){
		return(
		        	<BrowserRouter>
						<Navigation />
						<Switch>
							<Route path="/" component={Home} exact />
				        	<Route path="/service" component={Service} />
							<Route path="/about" component={About} />
							<Route path="/portfolio" component={Portfolio} />
							<Route path="/team" component={Team} />
							<Route path="/client" component={Clients} />
							<Route path="/contact" component={Contact} />
							<Route component={Error} />
						
        				</Switch>
					</BrowserRouter>
					
			

			)
	}


}
export default Routes;