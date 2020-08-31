import React, { Fragment } from "react";

export interface MoreInfoDateProps {
  recepy: TRecepy;
}

const MoreInfoDate: React.SFC<MoreInfoDateProps> = ({ recepy }) => {
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
