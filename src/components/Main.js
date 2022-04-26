import React from "react";
import GreyLogo from "../images/logo_grey.svg";

export default function Main() {
  return (
    <main>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K start on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprice apps, including mobile apps</li>
      </ul>
      <img src={GreyLogo} alt="grey_logo" id="greylogo" />
    </main>
  );
}
