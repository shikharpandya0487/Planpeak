import clsx from "clsx";
import React from "react";


// clsx is a utility function that helps conditionally join class names together in an elegant way. 
// It simplifies dynamic class handling in React components.


const Button = ({ icon, className, label, type, onClick = () => {} }) => {
  return (
    <button
      type={type || "button"}
      className={clsx("px-3 py-2 outline-none", className)}
      onClick={onClick}
    >
      <span>{label}</span>
      {icon && icon}
    </button>
  );
};

export default Button;