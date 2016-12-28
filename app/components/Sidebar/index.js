import React from 'react';
import style from './style.scss';

const Sidebar = () => (
  <nav className={`side-menu ${style.sidebar} `} tabIndex="0">
    <ul className="side-menu-list">
      <li className="pink-red">
        <a href="activity.html">
          <i className="font-icon font-icon-dashboard" />
          <span className="lbl">Dashboard</span>
        </a>
      </li>
    </ul>
  </nav>
    );
export default Sidebar;
