import React from 'react';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

import ROUTES from 'routes';

const App = () => (
  <div className="app">
    <Header />
    <Sidebar />
    {ROUTES}
    <Footer />
  </div>
);

export default App;
