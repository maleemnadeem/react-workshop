import React, { Component } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from '../../Navbar'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Navbar/>
        <Footer/>
      </div>
    );
  }
}

export default App;
