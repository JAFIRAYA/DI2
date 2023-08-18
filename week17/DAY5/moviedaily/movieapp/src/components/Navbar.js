import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      MovieSeriesInfo
    </Link>
  </nav>
);

export default Navbar;
