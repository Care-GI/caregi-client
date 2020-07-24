// funcionalidad de autenticacion y el index router
import React from "react";
import _useAuth from "../../hooks/useAuth";
import LayoutApp from "../../layout/LayoutApp";

const Main = ({ history }) => {
  return (
    <LayoutApp>
      <h1>Bienvenido al home</h1>
    </LayoutApp>
  );
};

export default Main;
