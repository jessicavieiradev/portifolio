import React from "react";
import Title from "../Title/Title";
import Button from "../Button/Button";
import Input from "../Input/Input";
import TextArea from "../Input/TextArea";
import ChatIcon from "../Icones/ChatIcon";
import WhatsappIcon from "../Icones/WhatsappIcon";
import Form from "../Form/Form";

const Contato = () => {
  return (
    <section id="contato" className="container mx-auto mt-12 md:mt-32 flex flex-col space-y-4 md:space-y-8 ">
      <Title>Contato</Title>
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-8">
        <div className="flex w-full md:w-1/2 text-center md:text-end ">
          <div className="flex flex-col md:items-end space-y-4 md:space-y-8">
            <h3 className="text-2xl">
              <ChatIcon />
              <span className="text-acento-primario"> Vamos</span> conversar?
            </h3>
            <p className="text-balance">
              Me envie uma mensagem para discutirmos sobre oportunidades,
              projetos ou qualquer dúvida que você tenha!
            </p>
            <p className="text-balance">
              Abaixo está o link para contato pelo WhatsApp, ou se preferir pode me mandar um email com uma mensagem através do formulário.
            </p>
            <p className="text-balance"></p>
            <Button ><a className="inline-flex items-center gap-1" href="https://api.whatsapp.com/send?phone=5511945572303">Entrar em Contato <WhatsappIcon/> </a></Button>
          </div>
        </div>
        <Form/>
        {/* <form className="w-full md:w-1/2 flex flex-col items-center space-y-4">
          <Input name="name" type="text" placeholder="Seu Nome" />
          <Input name="email" type="email" placeholder="Seu Email" />
          <TextArea
            name="message"
            id="message"
            cols="20"
            rows="4"
            placeholder="Mensagem"
          />
          <Button type="submit">Enviar Mensagem</Button>
        </form> */}
      </div>
    </section>
  );
};

export default Contato;
