import React from "react";
import Logo from "../images/logo.svg";

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h3>ReactFacts</h3>
      </div>
      <h4>React Course - Project 1</h4>
    </header>
  );
}
