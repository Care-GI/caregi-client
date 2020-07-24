import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardPurple } from "../styled-components/card/card";
import styled from "@emotion/styled";
import Tittle from "../components/Tilttle/Tittle";
import { Fonts } from "../constants/Fonts";
import IconForm from "../components/IconForm/IconForm";
import axiosClient from "../config/axios";
import { proxy } from "../constants/proxy";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { setActiveStatus } from "../redux/actions/userActions";

const useActive = () => {
  const { active, token, userInformation } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const axios = axiosClient(token);

  const [error, setError] = useState({ state: false, msg: "" });
  const [wait, setWait] = useState(false);
  const [code, setCode] = useState("");

  const handleSendEmail = () => {
    const fetchMail = async () => {
      try {
        if (!wait) {
          const response = await axios.put(`${proxy}/api/client/validate/send`);
          console.log(response.status);
          setWait(true);

          //! posibles respuestas

          switch (response.status) {
            case 208:
              setError({ state: true, msg: response.data.msg });
              return;
            case 200:
              setError({ state: true, msg: "Nuevo Código enviado" });
              return;
          }
        } else {
          return setError({
            state: true,
            msg: "Espera un momento para mandar otro codigo",
          });
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
            // set active en redux
            dispatch(setActiveStatus(true));
        }
      } catch (error) {
        console.log(error);
      }
    };

    setError({ state: false, msg: "" });
    fetchConfirm();
  };

  let Component = (props) => <Fragment>{props.children}</Fragment>;

  const FragmentStyled = styled.div`
    .fondo-black-transparent {
      background-color: rgba(0, 0, 0, 0.5);
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 3;
    }
  `;

  if (!active) {
    Component = (props) => (
      <FragmentStyled>
        <div className="fondo-black-transparent">
          <div
            style={{
              marginTop: "10%",
              padding: "3rem 30rem 1rem 30rem",
            }}
          >
            <CardPurple>
              <h1>Tienes que activar tu cuenta</h1>
              {error.state ? <ErrorMessage>{error.msg}</ErrorMessage> : null}
              <Tittle>
                Antes de empezar, necesitamos que actives tu cuenta!
              </Tittle>

              <h4>{userInformation.name}</h4>
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
            </CardPurple>
          </div>
        </div>
        <div>{props.children}</div>
      </FragmentStyled>
    );
  }

  return [Component];
};

export default useActive;
