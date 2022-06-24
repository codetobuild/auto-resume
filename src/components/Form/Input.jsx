import React from "react";
const TEXT = "TEXT";
const NUMBER = "NUMBER";
const DATE = "DATE";
const EMAIL = "EMAIL";
const PASSWORD = "PASSWORD";

const Input = (props) => {
  const { type, key, handleChange, placeholder, value, name, className } =
    props;
  const currInputType = type.trim().toUpperCase();
  switch (currInputType) {
    case TEXT:
      return (
        <input
          type="text"
          onChange={handleChange}
          value={value}
          name={name}
          id={name}
          className={className}
          placeholder={placeholder}
        />
      );
    case NUMBER:
      return (
        <input
          type="number"
          onChange={handleChange}
          value={value}
          name={name}
          id={name}
          className={className}
          placeholder={placeholder}
        />
      );
    case DATE:
      return (
        <input
          type="date"
          onChange={handleChange}
          value={value}
          name={name}
          id={name}
          className={className}
          placeholder={placeholder}
        />
      );
    case EMAIL:
      return (
        <input
          type="email"
          onChange={handleChange}
          value={value}
          name={name}
          id={name}
          className={className}
          placeholder={placeholder}
        />
      );
    case PASSWORD:
      return (
        <input
          type="email"
          onChange={handleChange}
          value={value}
          name={name}
          id={name}
          className={className}
          placeholder={placeholder}
        />
      );
  }
  return <div></div>;
};

export default Input;
