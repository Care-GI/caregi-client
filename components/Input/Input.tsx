import React from "react";
import { Fonts } from "@constants/Fonts";

export interface InputProps {
  name: string;
  placeholder?: string;
  value?: string | number;
  type: string;
  max?: number | string;
  onChange?: any | Function;
  defaultValue?: string;
}

const Input: React.SFC<InputProps> = ({
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
