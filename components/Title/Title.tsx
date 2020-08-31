import React from "react";
import styled from "@emotion/styled";
import { Fonts } from "@constants/Fonts";

export interface TitleProps {
  color: string;
  size: string;
  className?: string;
}

const Title: React.SFC<TitleProps> = ({ children, color, size }) => {
  const TitleText = styled.div`
    /* ... */
    font-family: ${Fonts.Decoration};
    color: ${color};
    margin-bottom: 2rem;
    text-align: center;

    h2 {
      font-size: ${size};
      font-weight: bolder;
      font-family: ${Fonts.Decoration};
      color: ${color};
    }
  `;

  return <TitleText>{children}</TitleText>;
};

export default Title;
