import React from "react";
import styled from "@emotion/styled";
import { Fonts } from "../../constants/Fonts";

const MessageContainer = styled.div`
  /* ... */
  text-align: center;
  font-family: ${Fonts.Title};
`;

const ErrorMessage = ({ children }) => (
  <MessageContainer className="alert alert-danger" role="alert">
    {children}
  </MessageContainer>
);

export default ErrorMessage;
