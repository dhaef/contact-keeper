import React, { Fragment, useContext, useEffect } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title }) => {
    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);

    const { isAuthenticated, user, logout, loadUser } = authContext;
    const { clearContacts } = contactContext;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    const onLogout = () => {
        logout();
        clearContacts();
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