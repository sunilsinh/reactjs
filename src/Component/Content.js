import React,{Component} from 'react';
import Service from './Service';
import Portfolio from './Portfolio';
import About from './About';
import Team from './Team';
import Clients from './Clients';
import Contact from './Contact';



class Content extends Component{

	render(){
		return(
				<div>
					<Service />
					<Portfolio />
					<About />
					<Team />
					<Clients />
					<Contact />
				</div>
			)
	}
}

export default Content;