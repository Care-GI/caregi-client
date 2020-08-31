import React from "react";
import { Fonts } from "@constants/Fonts";

const useModal = (options) => {
  let Component = ({ onChange, name, value }) => (
    <>
      <select
        className="form-control mt-4"
        style={{
          borderRadius: "2rem",
          textAlign: "center",
          fontFamily: Fonts.Body,
        }}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">-- Selecciona un sexo --</option>
        {options.map((item) => (
          <option /* name={item.name}*/ value={item.value} key={Math.random()}>
            {item.title}
          </option>
        ))}
      </select>
    </>
  );

  return [Component];
};

export default useModal;
