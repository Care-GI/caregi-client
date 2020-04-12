import React from "react";
import Tittle from "../components/Tilttle/Tittle";
import Axios from "axios";
import { proxy } from "../constants/proxy";
const Test = () => {
  const onclick = () => {
    const fetchLogin = async () => {
      const response = await Axios({
        method: "POST",
        url: `${proxy}/testing/hola`,
      });
      console.log(response);
    };

    fetchLogin();
  };

  return (
    <>
      <Tittle>Probando componentes</Tittle>
      <button onClick={onclick}>Presioname</button>
    </>
  );
};

export default Test;
