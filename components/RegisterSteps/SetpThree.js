import React, { useState, useContext } from "react";
import Tittle from "../../components/Tilttle/Tittle";
import { Colors } from "../../constants/Colors";
import Axios from "axios";

import IconForm from "../../components/IconForm/IconForm";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { FormRegisterContext } from "../../context/FormRegisterContext";
import { proxy } from "../../constants/proxy";
import { useDispatch, useSelector } from "react-redux";
import { showError, quitError } from "../../redux/actions/appStatusActions";

const StepThree = ({ nextStep }) => {
  // redux
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.appStatus);

  const [acountInf, setAcountInfo] = useState({
    username: "",
    cellphone: "",
    email: "",
    password: "",
    confirm: "",
  });

  const { dataRegister, setDataRegister } = useContext(FormRegisterContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAcountInfo({ ...acountInf, [name]: value });
    setDataRegister({
      ...dataRegister,
      ...{
        basicInformation: {
          ...dataRegister.basicInformation,
          [name]: value,
        },
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // validar informacion
    for (const prop in acountInf) {
      if (acountInf[prop].trim() === "") {
        dispatch(showError("Faltan algunos campos por rellenar"));
        return;
      }
    }
    if (acountInf.password !== acountInf.confirm) {
      dispatch(showError("Woups! Las Contraseñas no concuerdan"));
      return;
    } else if (acountInf.password.length < 5) {
      dispatch(showError("La contraseña es demasiada corta"));
      return;
    } else if (acountInf.cellphone.length !== 10) {
      dispatch(showError("Ups! Tú celular no cuenta con los requisitos"));

      return;
    }

    dispatch(quitError());
    // setear context

    const fetchLogin = async () => {
      try {
        const response = await Axios({
          method: "POST",
          url: `${proxy}/api/auth/client/register`,
          data: dataRegister,
        });

        console.log(response);
        //nextStep();

        //! handle response

        switch (response.status) {
          case 208:
            dispatch(showError(response.data.response));
            return;
          case 200:
            dispatch(quitError());
            localStorage.setItem("careToken", response.data.token);
            nextStep();
            return;
        }
      } catch (error) {
        console.log(error);
        dispatch(showError("Ocurrio algun error"));
      }
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
              type="number"
              max="9999999999"
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
