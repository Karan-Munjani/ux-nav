import "./App.scss";
import React from "react";
import MobileNav from "./comps/MobileNav";
import Nav from "./comps/Nav";
import { CalculateWidth } from "./hooks/calculateWidth";

function App() {
  var mobile = CalculateWidth();

  return (
    <div className="container">
      {mobile ? <MobileNav></MobileNav> : <Nav></Nav>}
      <h2>ehu</h2>
    </div>
  );
}

export default App;
