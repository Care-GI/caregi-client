import React, { useState } from "react";

import Header from "../components/Header/Header";
import Screen from "../components/ScreenC/Screen";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";
import StepOne from "./RegisterSteps/StepOne";

const Register = () => {
  // Context

  // state
  //! manipluador de los pasos
  const [step, setStep] = useState(1);

  let content;

  if (step === 1) {
    content = <StepOne setStep={setStep} />;
  } else if (step === 2) {
    content = <h1>Pasando al paso 2</h1>;
  }

  return (
    <Screen color={Colors.primary.hexa} extraSize={1}>
      <Header />
      <h1
        style={{
          color: "#fff",
          fontFamily: Fonts.Title,
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        Paso {step}
      </h1>
      {content}
    </Screen>
  );
};

export default Register;
