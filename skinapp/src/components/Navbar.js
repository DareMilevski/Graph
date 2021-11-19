import React from "react";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="img" />
      <div>
        <h2>Chooose servise</h2>
        <h4>Step 1/8</h4>
      </div>
    </div>
  );
};

export default Navbar;
