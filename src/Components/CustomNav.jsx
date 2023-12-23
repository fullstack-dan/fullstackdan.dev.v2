import React from "react";
import { Link } from "react-router-dom";
import "./CustomNav.css";

import Logo from "./Logo";

const CustomNav = () => {
  const NavLinks = () => (
    <ul className="nav-links">
      <Link to="/" className="link">
        blog
      </Link>
      <Link to="/about" className="link">
        about
      </Link>
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
