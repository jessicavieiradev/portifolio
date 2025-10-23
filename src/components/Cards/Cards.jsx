import React from "react";
import Button from "../Button/Button";

const Cards = ({ title, description, imageUrl, demoLink, githubLink }) => {
  return (
    <div className="flex flex-col justify-between p-4 max-w-80 border border-texto-principal rounded-md space-y-4">
      <h3 className="font-semibold uppercase text-center">{title}</h3>
      <p className="text-balance text-center">{description}</p>

      <div className="flex flex-col gap-4">
        <div className="block w-full min-h-30 rounded-md bg-amber-700">
          <img
            className="object-contain rounded-md"
            src={imageUrl}
            alt={title}
          />
        </div>
        <Button>
          <a href={demoLink}>Ver Projeto</a>
        </Button>
        <Button>
          <a href={githubLink}>Código</a>
        </Button>
      </div>
    </div>
  );
};

export default Cards;
