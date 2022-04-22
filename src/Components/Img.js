import React from "react";
import styled from "styled-components";

const StyledImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;

  h2 {
    color: rgb(255, 179, 37);
    font-size: 2rem;
  }
`;

export default function Img(props) {
  const { nasaData } = props;
  if (!props.nasaData.url) {
    return <h1>...loading</h1>;
  }
  return (
    <StyledImg className="img-div">
      <h2>{nasaData.title}</h2>
      <img src={nasaData.url} alt={nasaData.title} />
    </StyledImg>
  );
}
