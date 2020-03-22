import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <div className="navbar bg-primary">
        <h1>
            {title}
        </h1>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </ul>
    </div>
  );
}

Navbar.propTypes = {
    title: Proptypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Contact Keeper'
}

export default Navbar;