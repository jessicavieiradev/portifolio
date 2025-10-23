import React from "react";
import MenuBarIcon from "../Icones/MenuBarIcon";
import MenuCloseIcon from "../Icones/MenuCloseIcon";
import GithubIcon from "../Icones/GithubIcon";
import LinkedInIcon from "../Icones/Linkedinicon";

export default function MenuMobile() {
  const [isOpen, setIsOpen] = React.useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="relative" onClick={toggleMenu}>
      {isOpen ? <MenuCloseIcon /> : <MenuBarIcon />}
      <div>
        {isOpen && (
          <nav className="absolute top-8 right-2 bg-white border border-black/70 shadow-lg rounded-md p-8">
            <ul className="flex flex-col uppercase text-sm space-y-4">
              <li>
                <a href="">Projetos</a>
              </li>
              <li>
                <a
                  href="/curriculo/JessicaVieiraFrontend.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Baixar Curriculo
                </a>
              </li>
              <li>
                <a href="">Contato</a>
              </li>
              <li>
                <div className="flex space-x-2">
                  <GithubIcon />
                  <LinkedInIcon />
                </div>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
