import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/account/">My Account</Link>
        </li>
        <li>
          <Link to="/login/">Logout</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
