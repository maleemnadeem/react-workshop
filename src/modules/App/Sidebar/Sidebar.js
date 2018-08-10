import React from 'react';
import { NavLink } from 'react-router-dom';

import { NAV_LINKS } from 'util/constants';

const Sidebar = () => (
  <div className="side-bar">
    <ul>
      {Object.keys(NAV_LINKS).map(LINK_TYPE => (
        <NavLink key={NAV_LINKS[LINK_TYPE].url} to={NAV_LINKS[LINK_TYPE].url} activeClassName="active">
          {NAV_LINKS[LINK_TYPE].displayName}
        </NavLink>
      ))}
    </ul>
  </div>
);

export default Sidebar;
