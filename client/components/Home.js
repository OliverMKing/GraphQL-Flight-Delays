import React from "react";
import Header from "./Header";
import { Link } from "react-router";

export default () => {
  return (
    <div className="container">
      <Header></Header>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <h1 className="header center">Flight Delay Researcher</h1>
          <div className="row center">
            <h5 className="header col s12 light">
              We give you the <b>facts</b> about flying
            </h5>
          </div>
          <div className="row center">
            <Link to="/select" className="brand-logo">
              <div className="btn-large">Let's Research</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
