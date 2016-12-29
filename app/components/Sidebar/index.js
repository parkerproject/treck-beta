import React from 'react';
import { Link } from 'react-router';
import style from './style.scss';

const Sidebar = () => (
  <nav className={`side-menu ${style.sidebar} `} tabIndex="0">
    <ul className="side-menu-list">
      <li className="pink-red">
        <Link to="/dashboard">
          <i className="font-icon font-icon-dashboard" />
          <span className="lbl">Dashboard</span>
        </Link>
      </li>
      <li className="blue">
        <Link to="/feed">
          <i className="font-icon font-icon-zigzag" />
          <span className="lbl">My Feed</span>
        </Link>
      </li>
      <li className="gold">
        <Link to="/tags">
          <i className="font-icon font-icon-picture-2" />
          <span className="lbl">Image Catalog</span>
        </Link>
      </li>
      <li className="green">
        <Link to="/tags">
          <i className="fa fa-tags" />
          <span className="lbl">Tags</span>
        </Link>
      </li>
      <li className="gray">
        <Link to="/settings">
          <i className="fa fa-gear" />
          <span className="lbl">Settings</span>
        </Link>
      </li>
    </ul>
  </nav>
    );
export default Sidebar;
