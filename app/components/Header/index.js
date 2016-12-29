import React from 'react';

import style from './style.scss';

const Header = () => (
  <header className="site-header">
    <div className="container-fluid">
      <span className="site-logo"><strong>TRECK</strong></span>
      <button className="hamburger hamburger--htla">
        <span>toggle menu</span>
      </button>

      <div className="site-header-shown">
        <div className="dropdown user-menu">
          <button
            className="dropdown-toggle"
            id="dd-user-menu"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src="img/avatar-2-64.png"
              alt=""
            />
          </button>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dd-user-menu">
            <a className="dropdown-item" href="#profile">
              <span className="font-icon glyphicon glyphicon-user" />Profile
            </a>
            <a className="dropdown-item" href="#settings">
              <span className="font-icon glyphicon glyphicon-cog" />Settings
            </a>
            <a className="dropdown-item" href="#help">
              <span className="font-icon glyphicon glyphicon-question-sign" />Help
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#log">
              <span className="font-icon glyphicon glyphicon-log-out" />Logout
            </a>
          </div>
        </div>
      </div>

    </div>
  </header>
);

export default Header;
