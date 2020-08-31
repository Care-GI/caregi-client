import React from "react";
import styled from "@emotion/styled";

const Card = ({ children, color }) => {
  //extacting key from color prop object
  const { main, border } = color;

  const CardContainer = styled.div`
    /* ... */
    background-color: ${main};
    border-radius: 2rem;
    border-width: 1rem;
    border-style: groove;
    border-color: ${border};
    padding: 2rem;
  `;

  return (
    <>
      <CardContainer>{children}</CardContainer>
    </>
  );
};

export default Card;
