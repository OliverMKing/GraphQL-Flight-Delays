import React from "react";
import { Link } from "react-router";

const Header = props => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Flight Delay Researcher
        </Link>
      </div>
    </nav>
  );
};

export default Header;
