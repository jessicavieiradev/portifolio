import React from "react";

const Input = ({ ...props}) => {
  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute inset-0 bg-acento-primario rounded-lg transform translate-x-1 translate-y-1"></div>
      <input
        {...props}
        className="border border-texto-principal rounded-md p-2 w-full  z-10 relative bg-white"
        
      />
    </div>  
  );
};

export default Input;
