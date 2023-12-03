import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/" id='home'>Home</Link>
      <Link to="/history" id='history'>History</Link>
    </nav>
  );
};

export default Navbar;
