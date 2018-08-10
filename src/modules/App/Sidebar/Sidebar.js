import React from 'react';

import { NAV_LINKS } from 'util/constants';

const Sidebar = () => (
  <div className="side-bar">
    <ul>
      {NAV_LINKS.map((link) => (
        <li>{link}</li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
