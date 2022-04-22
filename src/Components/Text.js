import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowUpSFill } from "react-icons/ri";
import styled from "styled-components";

const StyledText = styled.div`
  color: rgb(255, 179, 37);
  background-color: black;
  padding: 1rem;

  h2 {
    width: 65%;
    margin: 0 auto;
    text-align: center;
    font-size: 2rem;
  }

  p {
    width: 65%;
    margin: 0 auto;
    text-align: center;
    font-size: 1.3rem;
  }
`;

export default function Text(props) {
  const [openClose, setOpenClose] = useState(true);

  function openCloseParagraph() {
    document.querySelector(".information").classList.toggle("hidden");
    setOpenClose(!openClose);
  }

  return (
    <StyledText className="text-div">
      <h2>
        Today's date: {props.nasaData.date}{" "}
        {openClose ? (
          <IoMdArrowDropdown onClick={openCloseParagraph} />
        ) : (
          <RiArrowUpSFill onClick={openCloseParagraph} />
        )}
      </h2>
      <p className="information hidden">{props.nasaData.explanation}</p>
    </StyledText>
  );
}
