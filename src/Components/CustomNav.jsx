import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CustomNav.css';

import Logo from './Logo';

const CustomNav = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 920);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
            <a
                href="../../Daniel_s_Resume.pdf"
                target="_blank"
                className="link"
            >
                resume
            </a>
        </ul>
    );

    return (
        <>
            {isMobile ? (
                <>
                    <nav
                        className={`flex justify-between items-center p-8 relative `}
                    >
                        <Logo />
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-2xl z-20! border-0!"
                        >
                            {menuOpen ? '--' : '++'}
                        </button>
                    </nav>
                    {menuOpen ? (
                        <ul className="text-4xl text-right flex flex-col space-y-8 p-8 absolute pt-28 left-0 right-0 bg-[var(--background)] text-white h-dvh mobile-menu">
                            <Link
                                to="/blog"
                                className="link"
                                onClick={() => setMenuOpen(false)}
                            >
                                blog
                            </Link>
                            <Link
                                to="/about"
                                className="link"
                                onClick={() => setMenuOpen(false)}
                            >
                                about
                            </Link>
                            <a
                                href="https://portfolio-16w1.onrender.com/"
                                target="_blank"
                                className="link"
                                onClick={() => setMenuOpen(false)}
                            >
                                portfolio
                            </a>
                            <a
                                href="../../Daniel_s_Resume.pdf"
                                target="_blank"
                                className="link"
                                onClick={() => setMenuOpen(false)}
                            >
                                resume
                            </a>
                        </ul>
                    ) : null}
                </>
            ) : (
                <nav>
                    <Logo />
                    <NavLinks />
                </nav>
            )}
        </>
    );
};

export default CustomNav;
