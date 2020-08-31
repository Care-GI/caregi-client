import React, { createContext, useState } from "react";

export const FormRegisterContext = createContext(undefined);

const FormRegisterProvider = (props) => {
  // estado del context
  const [dataRegister, setDataRegister] = useState({
    basicInformation: {
      name: "",
      lastname: "",
      username: "",
      cellphone: "",
      email: "",
      password: "",
      gender: "",
      byear: "",
      age: 0,
    },
    adressInformation: {
      street: "",
      number: "",
      IdPharm: "",
      references: "",
    },
  });

  return (
    <FormRegisterContext.Provider value={{ dataRegister, setDataRegister }}>
      {props.children}
    </FormRegisterContext.Provider>
  );
};

export default FormRegisterProvider;
