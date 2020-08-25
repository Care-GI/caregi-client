// funcionalidad de autenticacion y el index router
import React from "react";
import _useAuth from "../../hooks/useAuth";
import LayoutApp from "../../layout/LayoutApp";
import {
  ScreenPurple,
  ScreenSecondaryDark,
} from "../../styled-components/screen/screen";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import styled from "@emotion/styled";
import { Colors } from "../../constants/Colors";
import Dates from "../../components/Dates";
import Link from "next/link";

const Main = () => {
  console.log("recargando");
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
          <Title color="white" size="2rem">
            <h2>Disponibles</h2>
          </Title>
          <Title color="white" size="2rem">
            <h2>Estamos listos para ayudarte!</h2>
          </Title>
        </FirstPartContainer>
        <ButtonWrapper>
          <Button
            color={{
              hover: Colors.secondaryLigth.hexa,
              main: Colors.secondaryDark.rgb,
              font: "white",
            }}
            toLink="/"
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
          <Title className="few-left" color="white" size="4rem">
            <h2>Citas Recientes</h2>
          </Title>
          <Title color="white" size="2rem">
            <Link href="/app/dates" passHref>
              <a className="link">Ver todas las citas</a>
            </Link>
          </Title>
          <Dates />
          <img
            src="/svg/undraw_receipt_ecdd.svg"
            style={{
              position: "absolute",
              bottom: "-79.5rem",
              left: "-4rem",
            }}
            alt="Road Svg undraw credits"
          />
        </SecondPartContainer>
      </ScreenSecondaryDark>
    </LayoutApp>
  );
};

export default Main;
