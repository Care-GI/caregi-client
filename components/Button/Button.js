import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

//Constants
import { Fonts } from "../../constants/Fonts";
import { dimension } from "../../constants/Dimensions";

const Button = ({ children, type, onClick, color, toLink }) => {
  // extracting from color props

  const { font, main, hover } = color;

  // Styled
  const ButtonContainer = styled.a`
    /* ... */
    padding-top: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 1.5rem;
    background-color: ${main};
    border-radius: 1.5rem;
    font-family: ${Fonts.Title};
    font-size: 2rem;
    border-width: 0px;
    width: 100%;
    color: white;

    :hover {
      background-color: ${hover};
      text-decoration: none;
      color: white;
      border-radius: 2.5rem;
      font-size: 2.5rem;
      cursor: pointer;
    }
  `;

  const LinkStyled = styled(Link)`
    text-decoration: none;
    color: white;
  `;

  return (
    <ButtonContainer href={toLink} className="text">
      {children}
    </ButtonContainer>
  );
};

export default Button;
