import React, { useContext, useState } from "react";
import Axios from "axios";
// axios client
import ClientAxios from "../../config/axios";
import Tittle from "../../components/Tilttle/Tittle";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { Colors } from "../../constants/Colors";
import { proxy } from "../../constants/proxy";
import IconForm from "../../components/IconForm/IconForm";
import { Fonts } from "../../constants/Fonts";
import { FormRegisterContext } from "../../context/FormRegisterContext";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Container = styled.div`
  background-color: white;
  padding: 2rem;
  border-width: 1rem;
  border-radius: 2rem;
  border-style: groove;
  border-color: ${Colors.secondaryDark.rgb};

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

const StepConfim = () => {
  const { dataRegister } = useContext(FormRegisterContext);
  const { name } = dataRegister.basicInformation;

  const [code, setCode] = useState("");
  // eslint-disable-next-line
  const [congrats, setCongrats] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("careToken"));
  const [error, setError] = useState({ state: false, msg: "" });
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // validar el codigo
    if (code.trim("") === "") {
      setError({ state: true, msg: "Ingresa tu código" });
      return;
    }

    const fetchConfirm = async () => {
      const response = await Axios({
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        url: `${proxy}/api/client/validate/${code}`,
      });
      console.log(response);
      if (response.status === 208) {
        setError({ state: true, msg: response.data.msg });
      } else if (response.status === 200) {
        setRedirect(true);
      }
    };

    setError({ state: false, msg: "" });
    fetchConfirm();
  };

  const handleSendEmail = () => {
    const fetchMail = async () => {
      try {
        const axios = ClientAxios(token);
        const response = await axios.put(`${proxy}/api/client/validate/send`);
        console.log(response);
      } catch (error) {
        setError({
          state: true,
          msg: "No se pudo mandar el codigo, algo salio mal",
        });
      }
    };

    fetchMail();
  };

  if (redirect) {
    setCongrats(true);

    setTimeout(() => {
      router.push("/app-home");
      setCongrats(false);
    });
  }

  return (
    <>
      {congrats && <h1>FELICIDADES CUENTA ACTIVADA</h1>}
      {error.state ? <ErrorMessage>{error.msg}</ErrorMessage> : null}
      <Container
        className="col-lg-4 col-md-4 m-auto"
        style={{ textAlign: "center" }}
      >
        <Tittle>Felicidades! Cuenta creada con exito</Tittle>

        <h4>{name}</h4>
        <p>
          Te damos la bienvenidad a la App, ahora nos toca cuidar de tu salud.
        </p>
        <h5>Enviamos un correo con el código de activación de tu cuenta.</h5>
        <form className="mt-4" onSubmit={handleSubmit}>
          <IconForm
            type="number"
            iconClass="fas fa-ticket-alt"
            placeholder="Código"
            max="99999"
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
          <a
            style={{
              fontFamily: Fonts.Body,
              cursor: "pointer",
            }}
            onClick={handleSendEmail}
          >
            No recibiste el código, enviar nuevamente
          </a>
          <button className="btn btn-primary btn-block mt-4">
            Activar cuenta
          </button>
        </form>
      </Container>
    </>
  );
};

export default StepConfim;
