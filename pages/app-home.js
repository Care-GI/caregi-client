// funcionalidad de autenticacion y el index router
import React from "react";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header/Header";

const Main = ({ history }) => {
  const [token, Provider] = useAuth();

  return (
    <Provider>
      <Header />
      <h1>Router de la app</h1>
    </Provider>
  );
};

export default Main;
