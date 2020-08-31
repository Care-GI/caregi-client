import { ColorsHexa } from "@constants/Colors";
import styled from "@emotion/styled";

export const ScreenPurple = styled.div`
  /* ... */
  width: 100%;
  height: ${840 + 1}px;
  background-color: ${ColorsHexa.primary};
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

export const ScreenSecondaryLight = styled.div`
  /* ... */
  width: 100%;
  height: ${840 + 1}px;
  background-color: ${ColorsHexa.secondaryLigth};
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

export const ScreenSecondaryDark = styled.div`
  /* ... */
  width: 100%;
  height: ${840 + 200}px;
  background-color: ${ColorsHexa.secondaryDark};
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
