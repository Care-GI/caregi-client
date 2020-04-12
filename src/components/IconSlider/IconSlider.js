import React from "react";
import styled from "@emotion/styled";
import { Fonts } from "../../constants/Fonts";
import { Colors } from "../../constants/Colors";

const ContainerIconSlide = styled.div`
  /* ... */
  align-self: center;
  color: grey;
  text-align: center;
  font-family: ${Fonts.Body};
  animation-name: sliderAnim;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  cursor: pointer;



  @keyframes sliderAnim {
    0% {color: ${Colors.primary.rgb},0.3)}
    25% {color: ${Colors.primary.rgb},0.5)}
    30% {color: ${Colors.primary.rgb},1)}
    50% {color: ${Colors.primary.rgb},1)}
    60% {color: ${Colors.primary.rgb},1)}
    75% {color: ${Colors.primary.rgb},0.5)}
    100% {color: ${Colors.primary.rgb},0.3)}
  }
`;

const IconSlider = () => {
  return (
    <>
      <ContainerIconSlide onClick={() => alert("bajando la vista")}>
        <i className="fas  fa-angle-double-up fa-3x"></i>
        <p>mas info.</p>
      </ContainerIconSlide>
    </>
  );
};

export default IconSlider;
