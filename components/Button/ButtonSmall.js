import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

//Constants
import { Fonts } from "../../constants/Fonts";
import { dimension } from "../../constants/Dimensions";

const ButtonSmall = ({ children, type, clickfunc, color, toLink }) => {
  // extracting from color props

  const { font, main, hover } = color;

  // Styled
  const ButtonContainer = styled.a`
    /* ... */
    padding-top: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 1rem;
    background-color: ${main};
    border-radius: 1.5rem;
    font-family: ${Fonts.Title};
    font-size: 1.2rem;
    border-width: 0px;
    width: 100%;
    color: white;

    :hover {
      background-color: ${hover};
      text-decoration: none;
      color: white;
      border-radius: 2.5rem;
      font-size: 1.3rem;
      cursor: pointer;
    }
  `;

  const LinkStyled = styled(Link)`
    text-decoration: none;
    color: white;
  `;

  return (
    <ButtonContainer href={toLink} className="text" onClick={clickfunc}>
      {children}
    </ButtonContainer>
  );
};

export default ButtonSmall;
