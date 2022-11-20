import React from "react";

const Button = (props) => {
  const { name, children } = props;
  return (
    <button className="button_one">
      {name && <i className={`fa fa-solid fa-${name}`}></i>}
      {children}
    </button>
  );
};

export default Button;
