import React, { useEffect, useState } from "react";

import Header from "../components/Header/Header";
import Screen from "../components/ScreenC/Screen";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";
import StepOne from "./RegisterSteps/StepOne";
import StepTwo from "./RegisterSteps/StepTwo";
import StepThree from "./RegisterSteps/SetpThree";
import StepConfim from "./RegisterSteps/StepConfirm";

const Register = () => {
  // state
  //! manipluador de los pasos
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculatePerProgress = () => {
      const totalSteps = 3;
      const newValue = (step * 100) / totalSteps;
      setProgress(newValue);
    };
    calculatePerProgress();
  }, [step]);

  // funcion para cambiar el step actual
  const nextStep = () => {
    setStep(step + 1);
  };

  let content;

  if (step === 0) {
    content = <StepOne nextStep={nextStep} />;
  } else if (step === 1) {
    content = <StepTwo nextStep={nextStep} />;
  } else if (step === 2) {
    content = <StepThree />;
  } else if (step === 3) {
    content = <StepConfim />;
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
        Cuenta Nueva
      </h1>
      <div className="container">
        <div className="col-md-4 m-auto">
          <div className="progress mb-5">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: progress + "%" }}
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      {content}
    </Screen>
  );
};

export default Register;
