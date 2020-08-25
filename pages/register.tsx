import React, { useEffect, useState } from "react";

import FormRegisterProvider from "../context/FormRegisterContext";
import Screen from "../components/ScreenC/Screen";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";

// Pasos del register
import StepOne from "../components/RegisterSteps/StepOne";
import StepTwo from "../components/RegisterSteps/StepTwo";
import StepThree from "../components/RegisterSteps/StepThree";
import Loading from "../components/Loading/Loading";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/actions/appStatusActions";
import Layout from "../layout/Layout";
import { useRouter } from "next/router";

const Register = () => {
  // state
  //! manipluador de los pasos
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  // redux
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.appStatus);

  useEffect(() => {
    const calculatePerProgress = () => {
      const totalSteps = 3;
      const newValue = (step * 100) / totalSteps;
      setProgress(newValue);
    };
    calculatePerProgress();
  }, [step]);

  // funcion para cambiar el step actual
  const nextStep = (ctime = 3000) => {
    dispatch(setLoading(true));
    setStep(step + 1);
    setTimeout(() => {
      dispatch(setLoading(false));
    }, ctime);
  };

  let content;
  let loadingScreen;

  if (step === 0) {
    content = <StepOne nextStep={() => nextStep(1000)} />;
  } else if (step === 1) {
    content = <StepTwo nextStep={nextStep} />;
  } else if (step === 2) {
    content = <StepThree nextStep={nextStep} />;
  } else if (step === 3) {
    router.push("/app/home");
  }

  if (loading) {
    loadingScreen = <Loading />;
  }

  return (
    <>
      <FormRegisterProvider>
        <Layout>
          {!loading ? (
            <Screen color={Colors.primary.hexa} extraSize={1}>
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
                      aria-aluemax="100"
                    ></div>
                  </div>
                </div>
              </div>
              {content}
            </Screen>
          ) : (
            <>{loadingScreen}</>
          )}
        </Layout>
      </FormRegisterProvider>
    </>
  );
};

export default Register;
