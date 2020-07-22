import React, { useState, useContext, useEffect } from "react";
import styled from "@emotion/styled";
import Axios from "axios";

// constants
import { Fonts } from "../constants/Fonts";
import { Colors } from "../constants/Colors";

// components
import Tittle from "../components/Tilttle/Tittle";
import IconForm from "../components/IconForm/IconForm";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { ScreenPurple } from "../styled-components/screen/screen";

// Helpers
import { proxy } from "../constants/proxy";
import { StatusAcountContext } from "../context/StatusAcountContext";
import { useSelector } from "react-redux";
import axiosClient from "../config/axios";
import Layout from "../layout/Layout";
import NavBarApp from "../layout/NavBarApp";
import useSecure from "../hooks/useSecure";

const Container = styled.div`
  background-color: white;
  padding: 2rem;
  border-width: 1rem;
  border-radius: 2rem;
  border-style: groove;
  border-color: ${Colors.secondaryDark.rgb};
  text-align: center;
  p {
    font-family: ${Fonts.Title};
    text-align: center;
    font-size: 1.2rem;
  }

  h5 {
    font-family: ${Fonts.Body};
    text-align: center;
    background-color: paleturquoise;
    border-radius: 5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  h4 {
    font-family: ${Fonts.Title};
    text-align: center;
    font-size: 2rem;
  }
`;

const ConfirmAcountForm = ({ history }) => {
  const { userInformation } = useSelector((state) => state.user);
  const [code, setCode] = useState("");
  const [error, setError] = useState({ state: false, msg: "" });
  const [token, Secure] = useSecure();

  const axios = axiosClient(token);

  const handleSendEmail = () => {
    const fetchMail = async () => {
      try {
        const response = await axios.put(`${proxy}/api/client/validate/send`);
        console.log(response.status);

        //! posibles respuestas

        switch (response.status) {
          case 208:
            setError({ state: true, msg: response.data.msg });
            return;
          case 200:
            setError({ state: true, msg: "Nuevo Código enviado" });
            return;
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMail();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validar el codigo
    if (code.trim("") === "") {
      setError({ state: true, msg: "Ingresa tu código" });
      return;
    }

    const fetchConfirm = async () => {
      try {
        const response = await axios.put(
          `${proxy}/api/client/validate/${code}`
        );
        console.log(response);

        //! respuestas posibles a la peticion

        switch (response.status) {
          case 208:
            setError({ state: true, msg: response.data.msg });
            return;
          case 200:
            setError({ state: false, msg: "" });
            history.push("/app/home");
        }
      } catch (error) {
        console.log(error);
      }
    };

    setError({ state: false, msg: "" });
    fetchConfirm();
  };

  return (
    <Layout navActive={false} appOn={true}>
      <Secure>
        <ScreenPurple>
          <Container className="col-lg-4 col-md-4 m-auto">
            {error.state ? <ErrorMessage>{error.msg}</ErrorMessage> : null}
            <Tittle>
              Antes de empezar, necesitamos que actives tu cuenta!
            </Tittle>

            {/* <h4>{name}</h4> */}
            <p>
              Te damos la bienvenidad a la App, ahora nos toca cuidar de tu
              salud.
            </p>
            <h5>
              Enviamos un correo con el código de activación de tu cuenta.
            </h5>
            <a
              style={{ fontFamily: Fonts.Body, cursor: "pointer" }}
              onClick={handleSendEmail}
            >
              No recibiste el código, enviar nuevamente
            </a>
            <form className="mt-4" onSubmit={handleSubmit}>
              <IconForm
                type="number"
                iconClass="fas fa-ticket-alt"
                placeholder="Código"
                max="99999"
                onChange={(event) => setCode(event.target.value)}
              />
              <button className="btn btn-primary btn-block">
                Activar cuenta
              </button>
            </form>
          </Container>
        </ScreenPurple>
      </Secure>
    </Layout>
  );
};

export default ConfirmAcountForm;
