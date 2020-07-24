import styled from "@emotion/styled";
import { Colors } from "../../constants/Colors";

export const CardPurple = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 2rem;
  border-width: 1rem;
  border-style: groove;
  border-color: ${Colors.primary.hexa};
  text-align: center;
`;

export const CardBlueMedium = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 2rem;
  border-width: 1rem;
  border-style: groove;
  border-color: ${Colors.secondaryDark.rgb};
  text-align: center;
  width: 50%;
`;
