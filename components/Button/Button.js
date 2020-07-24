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
    border-radius: 2rem;
    font-family: ${Fonts.Title};
    font-size: 2rem;
    border-width: 0px;
    width: 100%;
    color: white;

    :hover {
      background-color: ${hover};
      transform: scale(1.1);
      text-decoration: none;
      color: white;
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
