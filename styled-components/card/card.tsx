import styled from "@emotion/styled";
import { ColorsHexa } from "@constants/Colors";
import { Fonts } from "@constants/Fonts";

export const CardPurple = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 2rem;
  border-width: 1rem;
  border-style: groove;
  border-color: ${ColorsHexa.primary};
  text-align: center;

  h3 {
    font-family: ${Fonts.Title};
    color: ${ColorsHexa.primary};
  }

  .link,
  p,
  li {
    color: black;
    font-size: 1.2rem;
    font-family: ${Fonts.Body};
  }

  li {
    text-align: start;
  }

  .link {
    color: ${ColorsHexa.primary};
    font-family: ${Fonts.Title};
    letter-spacing: 2px;
  }
`;

export const CardBlueMedium = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 2rem;
  border-width: 1rem;
  border-style: groove;
  border-color: ${ColorsHexa.secondaryDark};
  text-align: center;
  width: 50%;
`;
