import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

//Constants
import { Fonts } from "../../constants/Fonts";

export interface ButtonProps {
  color?: TColorPropButton;
  toLink: string;
  as?: string;
}

const Button: React.SFC<ButtonProps> = ({ children, color, toLink, as }) => {
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

  return (
    <Link href={toLink} as={as}>
      <ButtonContainer href={toLink} className="text">
        {children}
      </ButtonContainer>
    </Link>
  );
};

export default Button;
