import React from 'react';

import routes from "./routes";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar =() => {
    return (
        <div className="lessons">
            <aside>
                <ul className="lessons-list">
                    <li><Link to="/lesson/jsx">Introduction to JSX</Link></li>
                    <li><Link to="/lesson/elements">React Elements</Link></li>
                    <li><Link to="/lesson/components-props">Components and Props</Link></li>
                    <li><Link to="/lesson/state-lifecycle-hooks">State & Lifecycle Hooks</Link></li>
                    <li><Link to="/lesson/conditional-rendering">Conditional Rendering</Link></li>
                    <li><Link to="/lesson/state-liftup">State Lift-up</Link></li>
                    <li><Link to="/lesson/container-vs-presentational">Container vs. Presentational</Link></li>
                    <li><Link to="/lesson/handling-user-data">Handling User Data</Link></li>
                    <li><Link to="/lesson/api-integration">API Integration</Link></li>
                </ul>
            </aside>
            <div className="lesson-body">
                {routes}
            </div>
        </div>

    );
};

export default Navbar;