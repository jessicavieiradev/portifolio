import React from "react";

const TextArea = ({...props}) => {
  return (
    <div className="relative w-full max-w-sm">
      <div className="absolute inset-0 bg-acento-primario rounded-lg transform translate-x-1 translate-y-1"></div>
      <textarea
        className="border border-texto-principal rounded-md p-2 w-full shadow-lg shadow-acento-primario z-10 relative bg-white"
              {...props}
            ></textarea>
    </div>
  );
};

export default TextArea;