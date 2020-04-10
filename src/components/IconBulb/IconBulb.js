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
      color: rgba(242, 255, 10, 0.3);
    }
    25% {
      color: rgba(242, 255, 10, 0.5);
    }
    50% {
      color: rgba(242, 255, 10, 1);
    }
    75% {
      color: rgba(242, 255, 10, 0.5);
    }
    100% {
      color: rgba(242, 255, 10, 0.3);
    }
  }
`;

const IconBulb = () => (
  <BulbIconAnim>
    <i class="fas fa-lightbulb fa-5x"></i>
  </BulbIconAnim>
);

export default IconBulb;
