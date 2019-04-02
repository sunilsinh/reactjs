import React, { Component } from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Content from './Component/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Content/>
          <Footer/>
      </div>
    );
  }
}

export default App;
