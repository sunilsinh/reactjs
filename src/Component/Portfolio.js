import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
class Portfolio extends Component{
	render(){
		return(
        <div>
    <Header />
				<section className="bg-light" id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={require('./../assets/img/portfolio/01thumbnail.jpg')} alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>Threads</h4>
            <p className="text-muted">Illustration</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={require('./../assets/img/portfolio/02thumbnail.jpg')} alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>Explore</h4>
            <p className="text-muted">Graphic Design</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={require('./../assets/img/portfolio/03thumbnail.jpg')} alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>Finish</h4>
            <p className="text-muted">Identity</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={require('./../assets/img/portfolio/04thumbnail.jpg')} alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>Lines</h4>
            <p className="text-muted">Branding</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={require('./../assets/img/portfolio/05thumbnail.jpg')} alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>Southwest</h4>
            <p className="text-muted">Website Design</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={require('./../assets/img/portfolio/06thumbnail.jpg')} alt="" />
          </a>
          <div className="portfolio-caption">
            <h4>Window</h4>
            <p className="text-muted">Photography</p>
          </div>
        </div>
      </div>
    </div>
  </section>
   <Footer />
  </div>
  

			)
	}
}

export default Portfolio;