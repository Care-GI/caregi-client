import React, { useState, useContext } from "react";
import Tittle from "../../components/Tilttle/Tittle";
import { Colors } from "../../constants/Colors";
import Axios from "axios";

import IconForm from "../../components/IconForm/IconForm";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { FormRegisterContext } from "../../context/FormRegisterContext";
import { proxy } from "../../constants/proxy";

const StepThree = () => {
  const [acountInf, setAcountInfo] = useState({
    username: "",
    cellphone: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState({ state: false, msg: "" });

  const { dataRegister, setDataRegister } = useContext(FormRegisterContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAcountInfo({ ...acountInf, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // validar informacion
    for (const prop in acountInf) {
      if (acountInf[prop].trim() === "") {
        setError({ state: true, msg: "Faltan algunos campos por rellenar" });
        return;
      }
    }
    if (acountInf.password !== acountInf.confirm) {
      setError({ state: true, msg: "Woups! Las Contraseñas no concuerdan" });
      return;
    } else if (acountInf.password.length < 5) {
      setError({ state: true, msg: "La contraseña es muy corta" });
      return;
    } else if (
      acountInf.cellphone.length !== 10 ||
      acountInf.cellphone.includes(".")
    ) {
      setError({
        state: true,
        msg: "Ups! Tú celular no cuenta con los requisitos",
      });
      return;
    }

    setError(false);
    // setear context
    setDataRegister({
      ...dataRegister,
      ...{
        basicInformation: {
          ...dataRegister.basicInformation,
          ...acountInf,
        },
      },
    });

    const fetchLogin = async () => {
      const response = await Axios({
        method: "POST",
        url: `${proxy}/api/auth/client/register`,
        data: dataRegister,
      });
      if (response.status === 208) {
        setError({ state: false, msg: response.data.response });
      } else if (response.status === 205 || response.status === 404) {
        setError({ state: false, msg: "Ups ocurrion un error con la pagina" });
      } else if (response.status === 200) {
        alert("todo salio bien");
      }
      console.log(response);
    };

    fetchLogin();
  };

  return (
    <>
      {error.state ? <ErrorMessage>{error.msg}</ErrorMessage> : null}
      <div className="contianer">
        <div
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
          <Tittle>Informacion de Usuario</Tittle>
          <form onSubmit={handleSubmit}>
            <IconForm
              iconClass="fas fa-envelope"
              placeholder="Correo Electronico"
              name="email"
              type="email"
              onChange={handleChange}
            />
            <IconForm
              iconClass="fas fa-user"
              placeholder="Nombre de usuario"
              name="username"
              type="text"
              onChange={handleChange}
              maxLength="15"
            />
            <IconForm
              iconClass="fas fa-phone-alt"
              placeholder="Celular"
              name="cellphone"
              type="tel"
              maxLength="10"
              onChange={handleChange}
            />
            <IconForm
              iconClass="fas fa-key"
              placeholder="Contraseña"
              name="password"
              type="password"
              onChange={handleChange}
            />
            <IconForm
              iconClass="fas fa-passport"
              placeholder="Confirma Contraseña"
              name="confirm"
              type="password"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary btn-block">
              Crear cuenta
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default StepThree;
