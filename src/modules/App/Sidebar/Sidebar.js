import React from 'react';
import { NavLink } from 'react-router-dom';

import { NAV_LINKS } from 'util/constants';

import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <ul className="side-nav">
      {Object.keys(NAV_LINKS).map((LINK_TYPE) => (
        <li key={NAV_LINKS[LINK_TYPE].url}>
          <NavLink to={NAV_LINKS[LINK_TYPE].url} activeClassName="active">
            {NAV_LINKS[LINK_TYPE].displayName}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
