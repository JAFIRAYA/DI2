import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav-wrapper blue">
    <div className="container">
      <Link to="/" className="brand-logo">
        <img src={process.env.PUBLIC_URL + '/blog.png'} alt="Blog Logo" />
      </Link>
      <ul className="right">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
