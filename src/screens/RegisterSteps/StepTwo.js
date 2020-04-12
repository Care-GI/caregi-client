import React, { useContext, useState } from "react";
import Tittle from "../../components/Tilttle/Tittle";
import { Colors } from "../../constants/Colors";
import Input from "../../components/Input/Input";
import moment from "moment";

//Hooks
import useSelect from "../../hooks/useSelect";

//helpers
import { optionsUbication } from "../../lib/helpers";

//COntext
import { FormRegisterContext } from "../../context/FormRegisterContext";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const selectOptions = [
  { name: "gender", title: "Masculino", value: "MASCULINO" },
  { name: "gender", title: "Femenino", value: "FEMENINO" },
];

const StepTwo = ({ nextStep }) => {
  // context
  const { dataRegister, setDataRegister } = useContext(FormRegisterContext);

  // estado para la ubicacion
  const [adressInformation, setAdressInformation] = useState({
    street: "",
    number: "",
    private: "",
    references: "",
  });

  const [basicInformation, setBasicInformation] = useState({
    name: "",
    lastname: "",
    gender: "",
    byear: "",
    age: 0,
  });

  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");

  // Id de la farmacia
  const { IdPharm } = dataRegister.adressInformation;

  //HOOKS
  const [Select] = useSelect(selectOptions);

  // handle

  const handleChangeAdress = (e) => {
    const { name, value } = e.target;
    setAdressInformation({ ...adressInformation, [name]: value });
  };

  const handleChangeBasic = (e) => {
    const { name, value } = e.target;
    setBasicInformation({ ...basicInformation, [name]: value });
  };

  const handleYearChange = (e) => {
    const { name, value } = e.target;

    const byear = value.split("-");
    const age = moment(`${byear[0]}${byear[1]}${byear[2]}`, "YYYYMMDD")
      .fromNow()
      .split(" ");
    setBasicInformation({
      ...basicInformation,
      [name]: value,
      age: parseInt(age[0]),
    });
    //setBasicInformation({ ...basicInformation, age: parseInt(age[0]) });
  };

  const handleClick = () => {
    // validar informacion
    const num = "0123456789";

    //! Validando la informacion de adress
    for (const prop in adressInformation) {
      // validando que no este vacio
      if (adressInformation[prop].trim() === "") {
        setError(true);
        setMessageError("Por favor, rellena todos los campos");
        return;
        // validando que sea numero
      } else if (
        prop === "number" &&
        num.indexOf(adressInformation[prop].charAt(0), 0) === -1
      ) {
        setError(true);
        setMessageError("Tu ubicación necesita empezar con número");
        return;
        // validando que no exceda el numero de char
      } else if (adressInformation[prop].length > 25 && prop !== "references") {
        setError(true);
        setMessageError(
          "Tu informacion no cumple con los requisitos, demasiado larga"
        );
        return;
      }
    }

    //! Validando la informacion de basic

    for (const prop in basicInformation) {
      if (prop !== "age" && basicInformation[prop].trim() === "") {
        setError(true);
        setMessageError("Por favor, rellena todos los campos");
        return;
      } else if (prop === "age" && basicInformation[prop] < 18) {
        setError(true);
        setMessageError("Lo lamento, No cumples con la edad requerida");
        return;
      } else if (prop !== "age" && basicInformation[prop].length > 20) {
        setError(true);
        setMessageError(
          "Lo lamento, Algo de tu informacion personal debe ser muy largo"
        );
        return;
      }
    }

    // setear el context
    setError(false);
    setDataRegister({
      ...dataRegister,
      ...{
        adressInformation: {
          ...dataRegister.adressInformation,
          ...adressInformation,
        },
        basicInformation: {
          ...dataRegister.basicInformation,
          ...basicInformation,
        },
      },
    });
    //setear el next
    nextStep();
  };

  return (
    <>
      {error ? <ErrorMessage>{messageError}</ErrorMessage> : null}
      <div
        className="container"
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "2rem",
          borderWidth: "1rem",
          borderStyle: "groove",
          borderColor: Colors.secondaryLigth.hexa,
        }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Tittle>Datos</Tittle>
            <form>
              <Input
                type="text"
                name="name"
                placeholder="Ingresa tu Nombre"
                value={basicInformation.name}
                onChange={handleChangeBasic}
              />
              <Input
                type="text"
                name="lastname"
                placeholder="Ingresa tus Apellidos"
                value={basicInformation.lastname}
                onChange={handleChangeBasic}
              />
              <Input
                type="date"
                name="byear"
                max="2002-01-01"
                value={basicInformation.byear}
                onChange={handleYearChange}
              />
              <Select
                onChange={handleChangeBasic}
                name="gender"
                value={basicInformation.gender}
              />
            </form>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <Tittle>Ubicación</Tittle>
            <form>
              <Input
                type="text"
                name="idPharm"
                defaultValue={optionsUbication(IdPharm)}
              />

              <Input
                type="text"
                name="street"
                placeholder="Calle"
                value={adressInformation.street}
                onChange={handleChangeAdress}
              />
              <Input
                type="text"
                name="number"
                placeholder="Número"
                value={adressInformation.number}
                onChange={handleChangeAdress}
              />
              <Input
                type="text"
                name="private"
                placeholder="Privada"
                value={adressInformation.private}
                onChange={handleChangeAdress}
              />
              <Input
                type="text"
                name="references"
                placeholder="Referencias"
                value={adressInformation.references}
                onChange={handleChangeAdress}
              />
            </form>
          </div>
          <div className="col-lg-4 m-auto">
            <button
              className="btn btn-primary btn-block mt-4"
              style={{ borderRadius: "2rem" }}
              type="button"
              onClick={handleClick}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
