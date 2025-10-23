import React from "react";
import Button from "../Button/Button";
import GithubIcon from "../Icones/GithubIcon";
import LinkedInIcon from "../Icones/Linkedinicon";
import LocationIcon from "../Icones/LocationIcon";
import CheckIcon from "../Icones/CheckIcon";

export default function Hero() {
  return (
    <section className="text-center md:text-start space-y-4">
      <div className="flex  flex-col md:flex-row items-center justify-center space-y-8 md:space-x-8">
        <div className="md:w-1/3 space-y-6">
          <h1 className="text-4xl md:text-5xl font-light uppercase">
            <span className="text-acento-primario">Jessica</span> Vieira
          </h1>
          <p className="text-balance">
            Sou desenvolvedora Front-end em início de carreira, focada em
            transformar ideias em interfaces simples, bonitas e intuitivas.
          </p>
          <p className="text-balance">
            Trabalho com <b>HTML5</b>, <b>CSS3</b> e <b>JavaScript</b>, e venho
            aperfeiçoando meus projetos com <b>React</b> e <b>Tailwind CSS</b>.
          </p>
          <p className="text-balance">
            Utilizo <b>Vite</b> e <b>Git</b> no dia a dia e também tenho
            experiência com <b>WordPress</b> e <b>Elementor</b>, o que me ajuda
            a criar soluções completas para web.
          </p>
          <p className="text-balance">
            Busco uma oportunidade para crescer com uma equipe que
            valorize aprendizado, colaboração e boas experiências de usuário.
          </p>
          <div className="space-x-4 text-sm">
            <span className="inline-flex items-center gap-1">
              <LocationIcon /> São Paulo/SP
            </span>
            <span className="inline-flex items-center gap-1">
              <CheckIcon /> Disponível para trabalho
            </span>
          </div>
          <Button><a href="#">Baixar Curriculo</a></Button>
          <div className="flex space-x-4 justify-center md:justify-start">
            <GithubIcon href="https://github.com/jessicavieiradev" />
            <LinkedInIcon href="https://www.linkedin.com/in/jessica-vieira-ba6306215" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:grid md:grid-cols-2 gap-4">
          <img
            src="../../../public/images/HTML5.png"
            className="h-12 w-12 md:h-24 md:w-24 rounded-lg"
          />
          <img
            src="../../../public/images/CSS3.png"
            className="h-12 w-12 md:h-24 md:w-24 rounded-lg md:mt-12"
          />
          <img
            src="../../../public/images/JavaScript.png"
            className="h-12 w-12 md:h-24 md:w-24 rounded-lg"
          />
          <img
            src="../../../public/images/TailwindCSS.png"
            className="h-12 w-12 md:h-24 md:w-24 rounded-lg md:mt-12"
          />
          <img
            src="../../../public/images/React.png"
            className="h-12 w-12 md:h-24 md:w-24 rounded-lg "
          />
        </div>
      </div>
      <div className="justify-self-center uppercase text-md md:text-2xl text-acento-primario">
        &lt; desenvolvimento front-end /&gt;
      </div>
    </section>
  );
}
