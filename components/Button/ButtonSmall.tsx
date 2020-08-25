import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

//Constants
import { Fonts } from "../../constants/Fonts";

export interface ButtonSmallProps {
  clickfunc?: Function;
  color: TColorPropButton;
  toLink?: string;
}

const ButtonSmall: React.SFC<ButtonSmallProps> = ({
  children,
  clickfunc,
  color,
  toLink,
}) => {
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
    color: ${font};

    :hover {
      background-color: ${hover};
      text-decoration: none;
      color: ${font};
      border-radius: 2.5rem;
      font-size: 1.3rem;
      cursor: pointer;
    }
  `;

  // Ref button

  if (toLink) {
    <Link href={toLink}>
      <ButtonContainer className="text">{children}</ButtonContainer>
    </Link>;
  }

  // Button Action doesnt recibe toLink

  return (
    <ButtonContainer className="text" onClick={(e) => clickfunc(e)}>
      {children}
    </ButtonContainer>
  );
};

export default ButtonSmall;
