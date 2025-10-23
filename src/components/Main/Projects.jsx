import React from "react";
import Title from "../Title/Title";
import Cards from "../Cards/Cards";
import { projects } from "../../data/projetctsData";

const Projects = () => {
  return (
    <section id="projetos" className="container mx-auto mt-12 md:mt-32 flex flex-col space-y-4 md:space-y-8 items-center">
      <Title>Projetos</Title>
      <div className="flex gap-8 flex-wrap justify-center">
        {projects.map((projetc) => (
          <Cards {...projetc}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
