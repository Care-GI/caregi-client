import React from "react";
import styled from "@emotion/styled";

//Constants
import { Fonts } from "../../constants/Fonts";
import { Link } from "react-router-dom";

const Button = ({ children, type, onClick, color, toLink }) => {
  // extracting from color props

  const { font, main, hover } = color;

  // Styled
  const ButtonContainer = styled.button`
    /* ... */
    padding-top: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 0.4rem;
    background-color: ${main};
    border-radius: 2rem;
    font-family: ${Fonts.Body};
    font-size: 1rem;
    border-width: 0px;
    width: 100%;

    :hover {
      background-color: ${hover};
      transform: scale(1.1);
    }
  `;

  return (
    <ButtonContainer type={type} onClick={onClick}>
      <Link to={toLink} style={{ textDecoration: "none", color: font }}>
        {children}
      </Link>
    </ButtonContainer>
  );
};

export default Button;
