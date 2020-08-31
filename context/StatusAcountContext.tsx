import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

import { proxy } from "../constants/proxy";

export const StatusAcountContext = createContext(undefined);

const StatusAcountProvider = (props) => {
  const [acountActive, setAcountActive] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    const fecthUpdate = async () => {
      const response = await Axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        url: `${proxy}/api/client/validate/status`,
      });

      setAcountActive(response.data.acountActive);
    };

    if (verify) {
      alert("verificando stauts");
      setVerify(false);
      fecthUpdate();
    }
  }, [token, setAcountActive, verify]);

  return (
    <StatusAcountContext.Provider
      value={{ setAcountActive, acountActive, setToken, token, setVerify }}
    >
      {props.children}
    </StatusAcountContext.Provider>
  );
};

export default StatusAcountProvider;
