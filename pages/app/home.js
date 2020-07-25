// funcionalidad de autenticacion y el index router
import React from "react";
import _useAuth from "../../hooks/useAuth";
import LayoutApp from "../../layout/LayoutApp";
import {
  ScreenPurple,
  ScreenSecondaryDark,
} from "../../styled-components/screen/screen";
import Tittle from "../../components/Tilttle/Tittle";
import Button from "../../components/Button/Button";
import styled from "@emotion/styled";
import { Colors } from "../../constants/Colors";
import moment from "moment";
import Dates from "../../components/Dates";

const Main = () => {
  const FirstPartContainer = styled.div`
    color: white;
    justify-content: center;
    text-align: center;
    margin-bottom: 5rem;

    h2 {
      margin-top: 3rem;
    }
  `;

  const ButtonWrapper = styled.div`
    color: white;
    justify-content: center;
    text-align: center;
  `;

  const SecondPartContainer = styled.div`
    color: white;
    z-index: 2;
  `;

  return (
    <LayoutApp>
      <ScreenPurple>
        <FirstPartContainer>
          <Tittle>Disponibles</Tittle>
          <Tittle>Estamos listos para ayudarte!</Tittle>
        </FirstPartContainer>
        <ButtonWrapper>
          <Button
            color={{
              main: Colors.secondaryLigth.hexa,
              hover: Colors.secondaryDark.rgb,
            }}
          >
            Pedir una cita
          </Button>
        </ButtonWrapper>
        <img
          src="/svg/undraw_gift.svg"
          style={{ position: "absolute", top: "20rem" }}
        />
      </ScreenPurple>
      <ScreenSecondaryDark>
        <SecondPartContainer>
          <Tittle className="few-left" size="4rem">
            Citas Recientes
            <Dates />
          </Tittle>
        </SecondPartContainer>
      </ScreenSecondaryDark>
    </LayoutApp>
  );
};

export default Main;
