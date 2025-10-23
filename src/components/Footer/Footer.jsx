import React from "react";
import GithubIcon from "../Icones/GithubIcon";
import LinkedInIcon from "../Icones/Linkedinicon";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto mt-32 flex justify-evenly p-4">
        <p className="text-sm">
          © 2025 <span className="font-semibold">Jessica Vieira</span>. Todos os
          direitos reservados.
        </p>
        <div className="flex space-x-2">
          <GithubIcon href="https://github.com/jessicavieiradev" />
          <LinkedInIcon href="https://www.linkedin.com/in/jessica-vieira-ba6306215" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
