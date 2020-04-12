import React from "react";
import { Fonts } from "../../constants/Fonts";

const Input = ({
  name,
  placeholder,
  value,
  type,
  max,
  onChange,
  defaultValue,
}) => {
  return (
    <>
      <input
        className="form-control"
        type={type}
        style={{
          marginTop: "2rem",
          borderRadius: "2rem",
          textAlign: "center",
          fontFamily: Fonts.Body,
        }}
        name={name}
        placeholder={placeholder}
        max={max}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default Input;
