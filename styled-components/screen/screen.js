import { Colors } from "../../constants/Colors";
import styled from "@emotion/styled";

export const ScreenPurple = styled.div`
  /* ... */
  width: 100%;
  height: ${840 + 1}px;
  background-color: ${Colors.primary.hexa};
  padding: 2rem;

  /* Tableta Mode */
  @media (max-width: 768px) {
    width: 800px;
    height: ${900 + 1 * 2.3}px;
  }

  /* Mobile large*/
  @media (max-width: 428px) {
    width: 428px;
    height: ${1200 + 1 * 1.5}px;
  }
`;
