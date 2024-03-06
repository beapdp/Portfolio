import { useRef } from 'react';
import React from 'react';
import emailjs from 'emailjs-com';
import '../styles/contacto.css';

const Contacto = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5day32v', 'template_kqk9c8b', form.current, 'zCMtT8JT-WOg2J1xg')
      .then((result) => {
          console.log(result.text);
          alert('Mensaje enviado con éxito!');
      }, (error) => {
          console.log(error.text);
          alert('Error al enviar el mensaje, inténtalo de nuevo.');
      });
  };


  return (
    <div className='contact-container'>
      <h1 className='heading'>Contacto</h1>
      <div className='form-container'>
        <form className='contact' ref={form} onSubmit={sendEmail}>
          <input type='text' placeholder='Nombre' name='nombre' required></input>
          <input type='text' placeholder='Apellidos' name='apellidos' required></input>
          <input type='email' placeholder='Email' name='email' required></input>
          <textarea placeholder='Motivo de contacto' name='motivo' required></textarea>
          <input className='formButton' type='submit' value='Enviar'></input>
        </form>
      <img src='/images/chicaForm.png'/>
      </div>
    </div>
  )
}

export default Contacto;
