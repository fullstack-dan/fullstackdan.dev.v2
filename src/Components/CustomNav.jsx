import React from 'react';
import { Link } from 'react-router-dom';
import './CustomNav.css';

import Logo from './Logo';

const CustomNav = () => {
    const NavLinks = () => (
        <ul className="nav-links">
            <Link to="/blog" className="link">
                blog
            </Link>
            <Link to="/about" className="link">
                about
            </Link>
            <a
                href="https://portfolio-16w1.onrender.com/"
                target="_blank"
                className="link"
            >
                portfolio
            </a>
        </ul>
    );

    return (
        <nav>
            <Logo />
            <NavLinks />
        </nav>
    );
};

export default CustomNav;
