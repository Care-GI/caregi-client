import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import Tittle from "../../components/Tilttle/Tittle";
import { Fonts } from "../../constants/Fonts";
import { Colors } from "../../constants/Colors";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { FormRegisterContext } from "../../context/FormRegisterContext";

//Hooks
import useModal from "../../hooks/useModal";

//! Styled components

const TextBody = styled.p`
  /* ... */
  font-family: ${Fonts.Body};
  text-align: center;
  color: ${Colors.primary.hexa};
  font-size: 1.2rem;
`;

const IconQuestionContainer = styled.div`
  /* ... */
  color: ${Colors.secondaryLigth.hexa};
  :hover {
    cursor: pointer;
  }
`;

const StepOne = ({ nextStep, setLoading }) => {
  //state
  const [idPharm, setIdPharm] = useState("");
  const [error, setError] = useState(false);

  // hooks
  const [open, Modal, setOpen] = useModal(false);

  // Context
  const { setDataRegister, dataRegister } = useContext(FormRegisterContext);

  // handleChange
  const handleChange = (e) => {
    const { value } = e.target;
    setIdPharm(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (idPharm.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    // setting idPharm in global state
    setDataRegister({
      ...dataRegister,
      ...{
        adressInformation: {
          ...dataRegister.adressInformation,
          IdPharm: idPharm,
        },
      },
    });

    // nextStep
    nextStep();
  };

  return (
    <>
      {open ? (
        <Modal>
          <div className="mt-5">
            <Tittle color="purple">
              <h2>Ayudanos a crecer</h2>
            </Tittle>
            <TextBody>
              De momento no tenemos tanto alcance somos una pequeña{" "}
              <strong>Start Up.</strong>
              <br />
              Estamos abiertos a sugerencias.
              <br />
              <a href="/suggest-panel">Panel de Sugerencias</a>
            </TextBody>
            <img
              style={{ display: "block", margin: "auto" }}
              src="../../images/MedicalHeart.PNG"
              alt="Img Medical Heart"
            />
          </div>
        </Modal>
      ) : null}
      <div className="contianer">
        <div className="row">
          <div className="col-12">
            <Tittle color="#fff">
              <h2>Checa Disponibilidad en tu zona</h2>
            </Tittle>

            <IconQuestionContainer
              onClick={() => {
                setOpen(true);
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontFamily: Fonts.Body,
                  color: "#fff",
                }}
              >
                No encontraste tu localidad {""}
                <i className="fas fa-question-circle fa-2x" />
              </p>
            </IconQuestionContainer>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 m-auto">
            {error ? (
              <ErrorMessage>
                Ups! Rellena todos los campos, Porfavor
              </ErrorMessage>
            ) : null}
            <form className="form-group p-4" onSubmit={handleSubmit}>
              <select
                className="form-control"
                style={{ fontFamily: Fonts.Body, borderRadius: "2rem" }}
                name="idPharm"
                onChange={handleChange}
                value={idPharm}
              >
                <option value="">-- Selecciona tu Fraccionamiento --</option>
                <option value="0001-BO-ME">Bonanza, Metepec</option>
                <option value="0002-FO-ME">Foresta, Metepec</option>
              </select>
              <button
                className="btn btn-primary btn-block mt-3"
                style={{ fontFamily: Fonts.Body }}
                type="submit"
              >
                Siguiente
              </button>
              <img
                className="mt-5"
                src="svg/undraw_current_location_rypt.svg"
                style={{
                  width: "30rem",
                  display: "block",
                  margin: "auto",
                }}
                alt="Google Maps Img"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepOne;
