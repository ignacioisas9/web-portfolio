import React, { useState } from "react";
import "./Contact.css";
import Phone from "../../assets/Home/phone.png";
import Mail from "../../assets/Home/mail.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_f3m6d92",
        "template_2tbbw76",
        formRef.current,
        "YKsjbgQZkq4IxrmOK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Nos pongamos en contacto</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="phone number" className="c-icon" />
              +54 9 381 5806427
            </div>
            <div className="c-info-item">
              <img src={Mail} alt="mail" className="c-icon" />
              ignacioisas8@gmail.com
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>¿Cuál es tu historia?</b> Contáctate conmigo. Siempre estoy
            dispuesto a escuchar propuestas.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
          <div className="c-form-wrapper">
            <input type="text" placeholder="Nombre" name="user_name" />
            <br />
            <input type="text" placeholder="Título" name="user_subject" />
            <br />
            <input type="text" placeholder="E-mail" name="user_email" />
            <br />
            <textarea rows="5" placeholder="Mensaje" name="message" />
            <button>Enviar</button>
          </div>
            
            {done && alert("¡Gracias! Su correo ha sido enviado")} 
            {/* Mensaje aparece dos veces */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
