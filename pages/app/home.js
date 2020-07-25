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
import Link from "next/link";

const Main = () => {
  const FirstPartContainer = styled.div`
    color: white;
    justify-content: center;
    text-align: center;
    margin-bottom: 6rem;

    h2 {
      margin-top: 3rem;
      font-size: 2.5rem;
    }
  `;

  const ButtonWrapper = styled.div`
    color: white;
    justify-content: center;
    text-align: center;
  `;

  const SecondPartContainer = styled.div`
    color: white;
  `;

  return (
    <LayoutApp>
      <ScreenPurple>
        <FirstPartContainer>
          <Tittle>
            <h2>Disponibles</h2>
          </Tittle>
          <Tittle>
            <h2>Estamos listos para ayudarte!</h2>
          </Tittle>
        </FirstPartContainer>
        <ButtonWrapper>
          <Button
            color={{
              hover: Colors.secondaryLigth.hexa,
              main: Colors.secondaryDark.rgb,
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
            <h2>Citas Recientes</h2>
          </Tittle>
          <Tittle>
            <Link href="/app/dates" passHref>
              <a className="link">Ver todas las citas</a>
            </Link>
          </Tittle>
          <Dates />
          <img
            src="/svg/undraw_receipt_ecdd.svg"
            style={{ position: "absolute", bottom: "-79.5rem", left: "-4rem" }}
            alt="Road Svg undraw credits"
          />
        </SecondPartContainer>
      </ScreenSecondaryDark>
    </LayoutApp>
  );
};

export default Main;
