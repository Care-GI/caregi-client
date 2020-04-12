import React from "react";
import Tittle from "../../components/Tilttle/Tittle";
import styled from "@emotion/styled";

import { Colors } from "../../constants/Colors";
import IconForm from "../../components/IconForm/IconForm";
import { Fonts } from "../../constants/Fonts";

const Container = styled.div`
  p {
    font-family: ${Fonts.Decoration};
    text-align: center;
  }

  h5 {
    font-family: ${Fonts.Body};
    text-align: center;
    background-color: paleturquoise;
    border-radius: 5rem;
  }
`;

const StepConfim = () => {
  return (
    <>
      <Container
        className="col-lg-4 col-md-4 m-auto"
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "2rem",
          borderWidth: "1rem",
          borderStyle: "groove",
          borderColor: Colors.secondaryDark.rgb,
        }}
      >
        <Tittle>Felicidades! Cuenta creada con exito</Tittle>
        <p>
          Te damos la bienvenidad a la App, ahora nos toca cuidar de tu salud.
        </p>
        <h5> Enviamos un correo con el código de activación de tu cuenta.</h5>
        <form className="mt-4">
          <IconForm
            type="number"
            iconClass="fas fa-ticket-alt"
            placeholder="Código"
          />
          <button className="btn btn-primary btn-block">Activar cuenta</button>
        </form>
      </Container>
    </>
  );
};

export default StepConfim;
