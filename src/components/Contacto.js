import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contacto.css';

const Contacto = () => {
  const form = useRef();
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

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
      <div className='datos'>
        <div onClick={() => setShowPhone(!showPhone)}>
          <h2>📞 Teléfono</h2>
          {showPhone && <p>606 70 12 67</p>}
        </div>
        <div onClick={() => setShowEmail(!showEmail)}>
          <h2>📧 Correo electrónico</h2>
          {showEmail && <p>bea.palomo.delpozo@gmail.com</p>}
        </div>
      </div>
      <div className='form-option'>
        <p className='contact-direct'>Si prefieres, puedes escribirme directamente desde el siguiente formulario:</p>
        <div className='form-container'>
          <form className='contact' ref={form} onSubmit={sendEmail}>
            <input type='text' placeholder='Nombre' name='nombre' required />
            <input type='text' placeholder='Apellidos' name='apellidos' required />
            <input type='email' placeholder='Email' name='email' required />
            <textarea placeholder='Motivo de contacto' name='motivo' required />
            <input className='formButton' type='submit' value='Enviar' />
          </form>
          <img className='contact-image' src='/images/chicaForm.png' />
        </div>
      </div>
    </div>
  );
}

export default Contacto;
