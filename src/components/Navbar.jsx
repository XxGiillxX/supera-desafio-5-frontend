import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="navbar">
        <h2>
            <Link to={`/`}>Nullbank</Link>
        </h2>
    </div>
  );
};

export default Navbar;