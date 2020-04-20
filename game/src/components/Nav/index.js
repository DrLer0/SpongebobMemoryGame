import React from "react";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-auto navbar-dark bg-info">
      <a className="navbar-brand" href="/">
        <h1>Memory Click Game</h1>
      </a>
      <h2 className="text-light">Click Count: <span id="count"></span></h2>
    </nav>
  );
}

export default Nav;
