import React from 'react';

const Contacto = () => {
  return (
    <div className='contact-container'>
      <h1 className='heading'>Contacto</h1>
      <div className='form-container'>
        <form className='contact' action='mailto:bea.palomo.delpozo@gmail.com' method='post' enctype='text/plain'>
          <input type='text' placeholder='Nombre' name='nombre' required></input>
          <input type='text' placeholder='Apellidos' name='apellidos' required></input>
          <input type='email' placeholder='Email' name='email' required></input>
          <textarea placeholder='Motivo de contacto' name='motivo' required></textarea>
          <input type='submit' value='Enviar'></input>
        </form>
      <img src='/images/chicaForm.png'/>
      </div>
    </div>
  )
}

export default Contacto;
