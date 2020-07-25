import React, { useState, Fragment } from "react";
import { CardPurple } from "../../styled-components/card/card";
import moment from "moment";
import Tittle from "../Tilttle/Tittle";
import MoreInfoDate from "../MoreInfoDate";
import { Colors } from "../../constants/Colors";
import ButtonSmall from "../Button/ButtonSmall";
import styled from "@emotion/styled";
import Link from "next/link";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    margin-top: 2rem;
    width: 45%;
  }
`;

const exampleDates = [
  {
    _id: "1",
    clientName: "Alejandro Andrade",
    clientId: "1",
    doctorName: "Alonso Vilchis",
    doctorId: "2",
    active: true,
    date: moment().format("MMMM Do YYYY, h:mm:ss a"),
    recepy: {
      medicine: [
        {
          nameMedicine: "Clorfenamina",
          timesPerDay: "Cada 8 Horas",
        },
        {
          nameMedicine: "Iboprufeon",
          timesPerDay: "Cada 12 Horas",
        },
        {
          nameMedicine: "Dualgos",
          timesPerDay: "Cada que tenga fiebre",
        },
      ],
      prescription: {
        symptoms: [
          "Nariz Tapada",
          "Ardor de garganta",
          "Paciente tiene temperatura",
        ],
        description:
          "Se reconocen sintomas de gripa para lo que se ocupan un cuidado intensivo y tomar sus medicinas para una mejora",
      },
      endTreatment: moment().add(1, "weeks"),
    },
  },
  {
    _id: "2",
    clientName: "Alejandro Andrade",
    clientId: "1",
    doctorName: "Alonso Vilchis",
    doctorId: "2",
    active: false,
    date: moment().format("MMMM Do YYYY, h:mm:ss a"),
    recepy: {
      medicine: [
        {
          nameMedicine: "Clorfenamina",
          timesPerDay: "Cada 8 Horas",
        },
        {
          nameMedicine: "Iboprufeon",
          timesPerDay: "Cada 12 Horas",
        },
        {
          nameMedicine: "Dualgos",
          timesPerDay: "Cada que tenga fiebre",
        },
      ],
      prescription: {
        symptoms: [
          "Nariz Tapada",
          "Ardor de garganta",
          "Paciente tiene temperatura",
        ],
        description:
          "Se reconocen sintomas de gripa para lo que se ocupan un cuidado intensivo y tomar sus medicinas para una mejora",
      },
      endTreatment: moment().add(1, "weeks"),
    },
  },
];

const Dates = () => {
  const [showMore, setShowmore] = useState({
    state: false,
    position: -1,
  });

  return (
    <div className="container">
      <div className="row">
        {exampleDates.map((item, i) => (
          <div className="col-md-12 col-lg-6 mt-5">
            <CardPurple>
              <Tittle color="black">Cita {i + 1}</Tittle>
              {item.active ? (
                <h5 style={{ color: "green", marginBottom: "1.5rem" }}>
                  Activa
                </h5>
              ) : (
                <h5 style={{ color: "red", marginBottom: "1.5rem" }}>
                  Inactiva
                </h5>
              )}
              <h3>Atendido por:</h3>
              <p>{item.doctorName}</p>
              <h3>Fecha:</h3>
              <p>{item.date}</p>
              {showMore.state && showMore.position === i ? (
                <Fragment>
                  <MoreInfoDate
                    recepy={item.recepy}
                    showMore={showMore}
                    index={i + 1}
                  />
                  <Link href="/app/recepy/[id]" as={`/app/recepy/${item._id}`}>
                    <a className="link">Ver Receta</a>
                  </Link>
                </Fragment>
              ) : null}
              <ButtonContainer>
                <ButtonSmall
                  color={{ font: "white", main: Colors.primary.hexa }}
                  clickfunc={() =>
                    setShowmore({
                      state: !showMore.state,
                      position: i,
                    })
                  }
                >
                  {showMore.state && showMore.position === i
                    ? "Menos"
                    : "Mas Informacion"}
                </ButtonSmall>
                <ButtonSmall
                  color={{ font: "white", main: Colors.secondaryDark.rgb }}
                >
                  Olvidar
                </ButtonSmall>
              </ButtonContainer>
            </CardPurple>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dates;
