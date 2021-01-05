import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <header>
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Steamy
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
        </div>
        <GoogleAuth />
      </div>
    </header>
  );
};

export default Header;
