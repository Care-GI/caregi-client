import React from "react";
import Layout from "@layout/Layout";
import { CardPurple } from "@styled-components/card/card";
import Title from "@components/Title/Title";
import { ColorsHexa } from "@constants/Colors";
import { ScreenSecondaryLight } from "@styled-components/screen/screen";
import IconForm from "@components/IconForm/IconForm";

const username = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout navActive={true}>
      <ScreenSecondaryLight>
        <div className="container">
          <div style={{ padding: "0rem 5rem" }}>
            <CardPurple className="mt-5">
              <form onSubmit={handleSubmit}>
                <Title color={ColorsHexa.primary} size={"2rem"}>
                  <h2>Te recordamos cual es tu usuario</h2>
                </Title>
                <p className="mt-4">
                  De esa manera podras inciar sesion si problemas.
                </p>
                <h3>Ingresa tu correo</h3>
                <div className="mt-5">
                  <IconForm
                    type="text"
                    placeholder="Ingresa tu correo"
                    iconClass="fas fa-paper-plane"
                    onChange={() => {
                      console.log("funcion change");
                    }}
                    name="email"
                  />
                  <button
                    className="btn btn-lg btn-primary"
                    type="submit"
                    name="button-submit"
                  >
                    Recordarme username
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

export default username;
