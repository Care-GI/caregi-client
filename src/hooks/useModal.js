import React, { useState } from "react";
import styled from "@emotion/styled";
import { Colors } from "../constants/Colors";

const IconClose = styled.div`
  /* ... */
  color: rebeccapurple;
  width: 2%;

  :hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const useModal = (init) => {
  // estado de el modal

  const [open, setOpen] = useState(init);

  let Component = ({ children }) => (
    <>
      <div
        style={{
          width: "80%",
          height: "80%",
          backgroundColor: "white",
          position: "fixed",
          left: "8%",
          top: "5%",
          zIndex: 2,
          borderRadius: "2rem",
          borderWidth: "1rem",
          borderStyle: "groove",
          borderColor: Colors.secondaryLigth.hexa,
        }}
      >
        <IconClose>
          <i
            class="fas fa-times-circle fa-2x"
            color="red"
            onClick={() => setOpen(false)}
          ></i>
        </IconClose>
        {children}
      </div>
    </>
  );

  return [open, Component, setOpen];
};

export default useModal;
