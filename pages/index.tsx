import React, { useState } from "react";
import styled from "@emotion/styled";

//Components
import Screen from "../components/ScreenC/Screen";

// Personal Hooks

//lib
import { Fonts } from "../constants/Fonts";
import { Colors } from "../constants/Colors";
import Card from "../components/Card/Card";
import IconSlider from "../components/IconSlider/IconSlider";
import Button from "../components/Button/Button";
import IconBulb from "../components/IconBulb/IconBulb";
import Title from "../components/Title/Title";
import Layout from "../layout/Layout";

// Styled Components

const CardContainer = styled.div`
  /* ... */
  text-align: center;
  font-family: ${Fonts.Title};
`;

const TitleWelcome = styled.h1`
  /* ... */
  margin-top: 1.5rem;
  color: ${Colors.secondaryDark.rgb};
  font-size: 3rem;

  span {
    color: ${Colors.secondaryLigth.hexa};
    font-size: 3.5rem;
  }
`;

const SubtitleWelcome = styled.h2`
  /* ... */
  color: ${Colors.secondaryLigth.hexa};
  font-size: 2rem;

  span {
    font-size: 2rem;
    color: ${Colors.secondaryDark.rgb};
  }
`;

const ButtonMainContianer = styled.div`
  /* ... */
  display: flex;
  margin: auto;
  width: 80%;
  justify-content: space-between;
  margin-top: 3rem;

  div {
    width: 50%;
  }

  @media (max-width: 880px) {
    width: 100%;
    flex-direction: column;
    div {
      width: 100%;
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
`;

const CentralImage = styled.img`
  /* ... */
  width: 30rem;
  display: block;
  margin: auto;
  margin-top: 5rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    width: 80%;
    margin-top: 0.5rem;
  }
`;

const SlideContainer = styled.div`
  /* ... */
  margin-top: 1.5rem;
  @media (max-width: 428px) {
    display: none;
  }
`;

const TitleHowItWorks = styled.h2`
  /* ... */
  font-size: 4rem;
  font-family: ${Fonts.Title};
  text-align: center;
  margin-top: 5rem;
  color: ${Colors.primary.hexa};
`;

const TextInfo = styled.h4`
  /* ... */
  font-family: ${Fonts.Body};
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2rem;
  text-align: center;
`;

const Home = () => {
  return (
    <>
      <Layout navActive={true}>
        {/*   Screen de welcome  */}
        <Screen
          color={"white"}
          image="/images/ImageSmallBackGround.png"
          extraSize={1}
        >
          <div className="row mt-5">
            <div className="col-lg-8 col-sm-12 p-5">
              <CardContainer>
                <Card
                  color={{
                    main: "white",
                    border: Colors.primary.hexa,
                  }}
                >
                  <TitleWelcome>
                    La App Inteligente que <span>cuida de tu Salud.</span>
                  </TitleWelcome>
                  <IconBulb icon=" fa-lightbulb" />
                  <SubtitleWelcome>
                    Sin necesidad <span>de salir</span>
                  </SubtitleWelcome>
                  <ButtonMainContianer>
                    <div>
                      <Button
                        color={{
                          main: Colors.primary.rgb + ",0.7)",
                          font: "#fff",
                          hover: Colors.primary.rgb + ",1)",
                        }}
                        toLink="/register"
                      >
                        Crea tu Cuenta gratis
                      </Button>
                    </div>
                    <div>
                      <Button
                        toLink={"/about"}
                        color={{
                          main: Colors.secondaryLigth.hexa,
                          font: "#fff",
                          hover: Colors.secondaryDark.rgb,
                        }}
                      >
                        Conocenos mas...
                      </Button>
                    </div>
                  </ButtonMainContianer>
                </Card>
              </CardContainer>
            </div>
            <div className="col-md-4">
              <CentralImage
                src="/svg/undraw_medical_care_movn.svg"
                alt="Central Image Vector"
              />
            </div>
          </div>
          {/* Coponent Slide */}
          <SlideContainer>
            <IconSlider />
          </SlideContainer>
        </Screen>
        {/* Screen de como funciona caregi*/}
        <Screen color={Colors.secondaryLigth.hexa} extraSize={500}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <TitleHowItWorks>Como funciona CareGI</TitleHowItWorks>
              </div>
            </div>
          </div>
          {/* Informacion extra*/}
          <div className="container mt-5">
            <div className="row m-auto">
              <div className="col-lg-6 mt-5">
                <Title size="3rem" color={Colors.primary.hexa}>
                  <h2>Crea una Cuenta</h2>
                </Title>
                <TextInfo>
                  Crea una cuenta de manera gratuita.
                  <br /> De esta manera te podemos dar le mejor servicio
                  personalizado.
                </TextInfo>
              </div>
              <div className="col-lg-6 mt-5">
                <img
                  src="../images/Vitacora.PNG"
                  style={{ display: "block", margin: "auto", width: "40%" }}
                  alt="Vitacora"
                />
              </div>

              <div className="col-lg-6 mt-5">
                <Title size="3rem" color={Colors.primary.hexa}>
                  <h2>Elige un Doctor Certificado</h2>
                </Title>
                <TextInfo>
                  Tenemos personal capacitado para darte un primer vistazo.
                  Consideranos tu medico de confianza y de cabecera.
                </TextInfo>
              </div>
              <div className="col-lg-6 mt-5">
                <img
                  src="/images/doctor.svg"
                  style={{ display: "block", margin: "auto", width: "50%" }}
                  alt="Doctor Imagen"
                />
              </div>
              <div className="col-lg-6 mt-5">
                <Title size="3rem" color={Colors.primary.hexa}>
                  <h2>Llegamos a tu hogar</h2>
                </Title>
                <TextInfo>
                  Llevamos las medicinas que necesitas y el mejor servicio
                  personalizado. <br />
                  Todo para que te mejores.
                  <br /> Deja que el app vaya guiando tu progreso.
                </TextInfo>
              </div>
              <div className="col-lg-6 mt-5">
                <img
                  src="../images/PastillasMedicina.PNG"
                  style={{ display: "block", margin: "auto", width: "40%" }}
                  alt="Pastillas Medicina"
                />
              </div>
            </div>
          </div>
        </Screen>
      </Layout>
    </>
  );
};

export default Home;
