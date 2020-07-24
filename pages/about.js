import React from "react";
import Layout from "../layout/Layout";
import { ScreenPurple as Screen } from "../styled-components/screenc/screen";
import { Fonts } from "../constants/Fonts";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { CardBlueMedium } from "../styled-components/card/card";
import Link from "next/link";

const about = () => {
  const FirstZoneContainer = styled.div`
    h1 {
      font-family: ${Fonts.Title};
      margin-bottom: 4rem;
      color: white;
    }

    h3 {
      font-family: ${Fonts.Decoration};
    }

    font-family: ${Fonts.Body};
    text-align: center;
    padding: 4rem;

    .titulo {
      font-family: ${Fonts.Title};
      font-size: 2rem;
    }

    .text {
      font-size: 1.2rem;
    }

    img {
      position: fixed;
      top: 5rem;
    }
  `;

  return (
    <Layout navActive="true">
      <Screen>
        <FirstZoneContainer>
          <h1>Conocenos Mas</h1>

          <CardBlueMedium>
            <h3>
              Somos una start-up que brinda servicios medicos inteligentes.
            </h3>
            <p className="text">
              Nuestro objetivo es brindar un servicio de salud personalizado
              hasta la puerta de tu casa.
            </p>
            <p className="titulo">
              Lo que buscamos en cada uno de nuestros sevicios:
            </p>
            <h3>-Consultas medicas de Calidad</h3>
            <h3>-App Inteligente</h3>
            <h3>-Medicina accesible y segura.</h3>
            <p className="text">
              Te invitamos a que lo compruebes por ti mismo...
            </p>
            <Link href="/register" passHref>
              <a className="text">Create una cuenta y comenzemos</a>
            </Link>
          </CardBlueMedium>
          <div>
            <img src="/svg/undraw_current_location_rypt.svg" />
          </div>
        </FirstZoneContainer>
      </Screen>
    </Layout>
  );
};

export default about;
