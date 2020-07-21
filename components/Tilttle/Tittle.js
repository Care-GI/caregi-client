import React from "react";
import styled from "@emotion/styled";
import { Fonts } from "../../constants/Fonts";

const Tittle = ({ children, color, size }) => {
  const TitleText = styled.h2`
    /* ... */
    font-family: ${Fonts.Decoration};
    color: ${color};
    font-size: ${size};
    margin-bottom: 2rem;
    text-align: center;
    font-weight: bold;
  `;

  return <TitleText>{children}</TitleText>;
};

export default Tittle;
