import React from 'react';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

import ROUTES from 'routes';

import './App.css';

const App = () => (
  <div className="app">
    <Header />
    <div className="container">
      <Sidebar />
      {ROUTES}
    </div>
    <Footer />
  </div>
);

export default App;
