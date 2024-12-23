import React from 'react';

import Header from './Header.js';
import Nav from './Nav.js';

import '../styles/components/Sidebar.scss'; // Optional: Create a corresponding CSS file for styles
import '../styles/global.scss';
import { Link, NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <Header />
      <div className="nav-links">
        
          <NavLink to="/learn" className={({ isActive }) => (isActive ? "selected" : "")} >LEARN</NavLink>
          <NavLink to="/progress" className={({ isActive }) => (isActive ? "selected" : "")} >PROGRESS</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "selected" : "")} >ABOUT</NavLink>
          <NavLink to="/add" className={({ isActive }) => (isActive ? "selected" : "")} >ADD</NavLink>
        
      </div>
        
    </div>
  );
}

export default Sidebar;