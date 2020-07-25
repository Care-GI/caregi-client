import React, { Fragment, useState } from "react";

const MoreInfoDate = ({ recepy, index, showMore }) => {
  return (
    <Fragment>
      <h3>Diagnostico:</h3>
      <p>{recepy.prescription.description}</p>
      <h3>Sintomas:</h3>
      <ul>
        {recepy.prescription.symptoms.map((singleObservation, index) => (
          <li key={index}>{singleObservation}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default MoreInfoDate;
