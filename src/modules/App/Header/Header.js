import React from 'react';

import './Header.css';

const Header = () => (
  <div id="header">
    <div className="container">
      <div className="logo">
        <span>react-</span>
        workshop
      </div>
      <ul className="right-nav">
        <li>
          <a href="#">My Account</a>
        </li>
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
