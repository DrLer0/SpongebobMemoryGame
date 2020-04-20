import React from "react";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Clicky Game
      </a>
      <p>Click and image to begin!</p>
      <p>Click Count: <span id="count"></span></p>
    </nav>
  );
}

export default Nav;
