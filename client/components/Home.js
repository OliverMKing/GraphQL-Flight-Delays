import React from "react";

export default () => {
  return (
    <div className="section no-pad-bot" id="index-banner">
      <div className="container">
        <h1 className="header center">Flight Delay Researcher</h1>
        <div className="row center">
          <h5 className="header col s12 light">
            We give you the <b>facts</b> about flying
          </h5>
        </div>
        <div className="row center">
          <a
            href="http://materializecss.com/getting-started.html"
            id="download-button"
            className="btn-large"
          >
            Let's Research
          </a>
        </div>
      </div>
    </div>
  );
};
