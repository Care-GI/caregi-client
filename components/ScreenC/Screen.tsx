import React from "react";
import styled from "@emotion/styled";

export interface ScreenProps {
  color?: string;
  image?: string;
  extraSize?: number;
}

const Screen: React.SFC<ScreenProps> = ({
  children,
  color,
  image,
  extraSize,
}) => {
  const Div = styled.div`
    /* ... */
    width: 100%;
    height: ${840 + extraSize}px;
    background-color: ${color};
    background-image: url(${image});

    /* Tableta Mode */
    @media (max-width: 768px) {
      width: 800px;
      height: ${900 + extraSize * 2.3}px;
    }

    /* Mobile large*/
    @media (max-width: 428px) {
      width: 428px;
      height: ${1200 + extraSize * 1.5}px;
    }
  `;

  return (
    <>
      <Div>{children}</Div>
    </>
  );
};

export default Screen;
