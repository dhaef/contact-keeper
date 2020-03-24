import React, { Fragment, useContext } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title }) => {
    const authContext = useContext(AuthContext);

    const { isAuthenticated, user, logout } = authContext;

    const onLogout = () => {
        logout();
    }

    const authLinks = (
        <Fragment>
            <li>Hello { user && user.name }</li>
            <li>
                <a onClick={onLogout} href='#!'>
                    Logout
                </a>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    );

  return (
    <div className="navbar bg-primary">
        <h1>
            {title}
        </h1>
        <ul>
            {isAuthenticated ? authLinks : guestLinks}
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