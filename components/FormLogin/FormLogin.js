import React from "react";
import styled from "@emotion/styled";

import { CardPurple } from "../../styled-components/card/card";
import { Fonts } from "../../constants/Fonts";
import IconForm from "../../components/IconForm/IconForm";
import { Link } from "next/link";
import IconBulb from "../../components/IconBulb/IconBulb";
import { dimension } from "../../constants/Dimensions";
import { Colors } from "../../constants/Colors";

const TitleCard = styled.h1`
  /* ... */
  text-align: center;
  font-family: ${Fonts.Title};
`;

const HelpContainer = styled.div`
  /* ... */
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 1.2rem;
  width: 60%;
`;

const BulbContainer = styled.div`
  /* ... */
  background-color: ${Colors.primary.hexa};
  width: 30%;
  padding: 0.2rem;
  border-radius: 5rem;

  @media (max-width: ${dimension.mobileNormal}) {
    width: 50%;
  }
`;

const style = {
  link: {
    fontFamily: Fonts.Body,
    textAlign: "center",
    fontSize: "0.7rem",
  },
};

const FormLogin = ({ handleSubmit, handleChange, data }) => {
  return (
    <CardPurple style={{ marginTop: "5rem" }}>
      <TitleCard>Iniciar Sesion</TitleCard>
      <form className="form-group ml-4 mr-4" onSubmit={handleSubmit}>
        <BulbContainer className="m-auto">
          <IconBulb />
        </BulbContainer>
        <br />

        <IconForm
          iconClass="far fa-user"
          placeholder="Nombre de Usuario"
          name="id"
          type="text"
          onChange={handleChange}
          value={data.id.value}
        />
        <IconForm
          iconClass="fas fa-unlock-alt"
          placeholder="Contraseña"
          name="password"
          type="password"
          onChange={handleChange}
          value={data.password}
        />
        <HelpContainer className="m-auto">
          <a to="/recovery/password" style={{ ...style.link }}>
            Olvidaste tu Contraseña...
          </a>
          <br />
          <a to="/recovery/username" style={{ ...style.link }}>
            Olvidaste tu Usuario....
          </a>
        </HelpContainer>
        <button className="btn btn-primary btn-block mt-4">Ingresar</button>
      </form>
    </CardPurple>
  );
};

export default FormLogin;
