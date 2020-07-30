import React from "react";
import Layout from "../../layout/Layout";
import { CardPurple } from "../../styled-components/card/card";
import Tittle from "../../components/Tilttle/Tittle";
import { Colors } from "../../constants/Colors";
import { ScreenSecondaryLight } from "../../styled-components/screen/screen";
import InputForm from "../../components/IconForm/IconForm";
import IconForm from "../../components/IconForm/IconForm";
import Button from "../../components/Button/Button";

const emailRecovery = () => {
  return (
    <Layout>
      <ScreenSecondaryLight>
        <div className="container">
          <div style={{ padding: "2rem" }}>
            <CardPurple className="mt-5">
              <form>
                <Tittle color={Colors.primary.hexa}>
                  <h2>Restaurar Password</h2>
                </Tittle>
                <p className="mt-4">Necesitamos tu correo.</p>
                <p>Te mandaremos un codigo de restauracion.</p>
                <h3>Te mandaremos un correo para restablecer</h3>
                <div style={{ padding: "0 8rem", marginTop: "3rem" }}>
                  <IconForm
                    placeholder="Ingresa tu correo"
                    iconClass="fas fa-paper-plane"
                  />
                </div>
                <Button color={{ font: "black", main: "red", hover: "purple" }}>
                  Mandar Codigo
                </Button>
              </form>
            </CardPurple>
          </div>
        </div>
      </ScreenSecondaryLight>
    </Layout>
  );
};

export default emailRecovery;
