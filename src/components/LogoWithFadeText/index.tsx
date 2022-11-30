import React, { useState } from "react";
import "./index.css";
import logo from "./logo.svg";

export default function LogoWithFadeText() {
  return (
    <>
      <div className="logoMainContainer">
        <div id="logoTextContainer">
          <p id="logoTextHeader">GitHub</p>
          <p id="logoTextSubHeader">Stat Checker</p>
        </div>
        <div id="background-black"></div>
        <img src={logo} id="logo" alt="logo" />
      </div>
    </>
  );
}
