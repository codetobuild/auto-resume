import React from "react";
import "../../../styles/resumeForm.css";

const Button = (props) => {
  const { type, btnText, key, handleClick, className } = props;
  return (
    <div className="saveBtnWrapper">
      <button
        onClick={handleClick}
        className={className}
        type={type || "button"}>
        {btnText}
      </button>
    </div>
  );
};

export default Button;
