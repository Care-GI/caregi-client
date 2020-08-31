import React from "react";
import styled from "@emotion/styled";

const BulbIconAnim = styled.div`
  /* ... */
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: rgba(242, 255, 10, 1);
  animation-name: opacity;
  animation-iteration-count: infinite;
  animation-duration: 2s;

  @keyframes opacity {
    0% {
      color: rgba(42, 120, 134, 0.2);
    }
    25% {
      color: rgba(42, 120, 134, 0.5);
    }
    50% {
      color: rgba(42, 120, 134, 1);
    }
    75% {
      color: rgb(121, 186, 193, 1);
    }
    100% {
      color: rgb(121, 186, 193, 1);
    }
  }
`;

const IconBulb = ({ icon }) => (
  <BulbIconAnim>
    <i className={`fas ${icon} fa-5x`}></i>
  </BulbIconAnim>
);

export default IconBulb;
