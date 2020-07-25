import React from "react";
import styled from "@emotion/styled";
import { Fonts } from "../../constants/Fonts";

const Tittle = ({ children, color, size }) => {
  const TitleText = styled.div`
    /* ... */
    font-family: ${Fonts.Decoration};
    color: ${color};
    margin-bottom: 2rem;
    text-align: center;

    h2 {
      font-size: ${size};
      font-weight: bolder;
    }
  `;

  return <TitleText>{children}</TitleText>;
};

export default Tittle;
