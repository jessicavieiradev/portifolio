import React, { useState } from "react";
import Input from "../Input/Input";
import TextArea from "../Input/TextArea";
import Button from "../Button/Button";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_EMAIL_API_KEY,
          subject: "Nova mensagem do portfólio!",
          from_name: formData.name,
          replyto: formData.email,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Falha ao enviar. Por favor, tente novamente.");
      }
    } catch (error) {
      alert("um erro ocorreu. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="w-full md:w-1/2 flex flex-col items-center space-y-4"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Seu Nome"
      />

      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Seu Email"
      />

      <TextArea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows="5"
        placeholder="Mensagem"
      />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Mandar Email"}
      </Button>
    </form>
  );
}

export default Form;
