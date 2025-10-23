import React from "react";
import GithubIcon from "../Icones/GithubIcon";
import LinkedInIcon from "../Icones/Linkedinicon";
import MenuMobile from "./MenuMobile";

export default function Header() {
  return (
    <header className="container mx-auto px-4 flex items-center justify-between fixed top-0 right-0 left-0 bg-fundo-principal z-1000">
      <div className="text-xl">
        <a href="/">
          <span className="text-acento-primario">J</span>V
        </a>
      </div>
      <nav
        className="hidden sm:block"
        aria-label="Menu principal das seções do site"
      >
        <ul className="flex uppercase text-sm text-acento-primario ">
          <li className="p-4 hover:text-texto-principal">
            <a href="#projetos">Projetos</a>
          </li>
          <li className="p-4 hover:text-texto-principal">
            <a href="/curriculo/JessicaVieiraFrontend.pdf" target="_blank" rel="noopener noreferrer">
              Baixar Curriculo
            </a>
          </li>
          <li className="p-4 hover:text-texto-principal">
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
      <div className="block sm:hidden">
        <MenuMobile />
      </div>
      <div className="hidden sm:flex justify-self-end space-x-2">
        <GithubIcon href="https://github.com/jessicavieiradev" />
        <LinkedInIcon href="https://www.linkedin.com/in/jessica-vieira-ba6306215" />
      </div>
    </header>
  );
}
