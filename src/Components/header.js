import React from "react";
import headerData from "./headerData";

export default function header() {
  return (
    <div>
      <img
        src="https://assets-global.website-files.com/605e2c8c6b591c8ec12559d4/60b801d8faf4750ac09f6edd_SSG1000X1000.png"
        alt="astronaut cartoon logo"
      />
      <h1>True Space</h1>
      <nav>
        {headerData.map((link) => {
          return <button>{link}</button>;
        })}
      </nav>
    </div>
  );
}
