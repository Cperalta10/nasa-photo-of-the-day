import React from "react";
import headerData from "./headerData";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(pr) => pr.theme.primaryColor};

  img {
    width: 150px;
  }

  h1 {
    font-size: 4rem;
  }

  nav {
    width: 30%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
  }

  button {
    font-size: 2rem;
    font-weight: bold;
    background: none !important;
    border: none;
    padding: 0 !important;
    cursor: pointer;
  }
`;

export default function Header() {
  return (
    <StyledHeader className="page-header">
      <img
        src="https://assets-global.website-files.com/605e2c8c6b591c8ec12559d4/60b801d8faf4750ac09f6edd_SSG1000X1000.png"
        alt="astronaut cartoon logo"
      />
      <h1>True Space</h1>
      <nav>
        {headerData.map((link) => {
          return <button key={link.id}>{link.linkName}</button>;
        })}
      </nav>
    </StyledHeader>
  );
}
