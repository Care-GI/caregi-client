import React from "react";
import Layout from "../../layout/Layout";
import { CardPurple } from "../../styled-components/card/card";
import Tittle from "../../components/Tilttle/Tittle";
import { Colors } from "../../constants/Colors";
import { ScreenSecondaryLight } from "../../styled-components/screen/screen";
import IconForm from "../../components/IconForm/IconForm";

const username = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout navActive="true">
      <ScreenSecondaryLight>
        <div className="container">
          <div style={{ padding: "0rem 5rem" }}>
            <CardPurple className="mt-5">
              <form onSubmit={handleSubmit}>
                <Tittle color={Colors.primary.hexa}>
                  <h2>Te recordamos cual es tu usuario</h2>
                </Tittle>
                <p className="mt-4">
                  De esa manera podras inciar sesion si problemas.
                </p>
                <h3>Ingresa tu correo</h3>
                <div className="mt-5">
                  <IconForm
                    placeholder="Ingresa tu correo"
                    iconClass="fas fa-paper-plane"
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
