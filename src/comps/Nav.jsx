import React from "react";

function Nav() {
  return (
    <nav className="nav">
      <div className="logo" style={{ height: "100%" }}>
        Diesel
      </div>

      <ul className="nav-links-container">
        <li>
          <a href="/contact">Contact</a>
          <a href="/contact">Contact</a>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
