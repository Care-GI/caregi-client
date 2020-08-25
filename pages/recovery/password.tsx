import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { CardPurple } from "../../styled-components/card/card";
import Title from "../../components/Title/Title";
import { Colors } from "../../constants/Colors";
import { ScreenSecondaryLight } from "../../styled-components/screen/screen";
import IconForm from "../../components/IconForm/IconForm";

const emailRecovery = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const sendEmailRestore = () => {
      setStep(1);
    };

    sendEmailRestore();
  };

  return (
    <Layout>
      <ScreenSecondaryLight>
        <div className="container">
          <div style={{ padding: "0rem 5rem" }}>
            <CardPurple className="mt-5">
              <form onSubmit={handleSubmit}>
                <Title color={Colors.primary.hexa} size={"2rem"}>
                  <h2>
                    {step === 0
                      ? "Restaurar Password"
                      : "A un paso de recuperar tu contrasena"}
                  </h2>
                </Title>
                <p className="mt-4">
                  {step === 0
                    ? "Para restablecer tu contrasena necesitamos tu correo."
                    : "Listo! Mandamos el correo"}
                </p>
                <h3>
                  {step === 0
                    ? "Te mandaremos un correo para restablecer"
                    : "El correo ya fue enviado"}
                </h3>
                <div style={{ padding: "0 8rem", marginTop: "3rem" }}>
                  {step === 0 ? (
                    <IconForm
                      placeholder="Ingresa tu correo"
                      iconClass="fas fa-paper-plane"
                      name="email"
                      onChange={() => {
                        console.log("email Change");
                      }}
                    />
                  ) : (
                    <div>
                      <IconForm
                        placeholder="Ingresa Contrasena"
                        iconClass="fas fa-key"
                        name="password"
                        onChange={() => console.log("pasword handle change")}
                      />
                      <IconForm
                        placeholder="Confirma Contrasena"
                        iconClass="fas fa-key"
                        name="passwordConfirm"
                        onChange={() => console.log("conf password HC")}
                      />
                      <IconForm
                        placeholder="Codigo de confirmacion"
                        iconClass="fas fa-shield-alt"
                        name="code"
                        onChange={() => console.log("Vcode HC")}
                      />
                    </div>
                  )}
                </div>
                <div className="mt-5">
                  <button
                    className="btn btn-lg btn-primary"
                    type="submit"
                    name="button-submit"
                  >
                    {step === 0 ? "Mandar Codigo" : "Confirmar"}
                  </button>
                </div>
              </form>
            </CardPurple>
          </div>
        </div>
      </ScreenSecondaryLight>
    </Layout>
  );
};

export default emailRecovery;
