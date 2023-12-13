import React, { useState } from "react";
import logo from "../assets/logo.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <img className="logo" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
