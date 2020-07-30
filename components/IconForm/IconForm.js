import React from "react";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";

const IconForm = ({
  iconClass,
  type,
  placeholder,
  onChange,
  value,
  name,
  maxLength,
}) => {
  return (
    <>
      <div className="input-group mb-4">
        <div className="input-group-prepend">
          <div
            className="input-group-text"
            style={{ backgroundColor: Colors.primary.hexa }}
          >
            <i className={iconClass} style={{ color: "#fff" }}></i>
          </div>
        </div>
        <input
          style={{ fontFamily: Fonts.Body }}
          type={type}
          className="form-control"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
          maxLength={maxLength}
          autoFocus
        />
      </div>
    </>
  );
};

export default IconForm;
