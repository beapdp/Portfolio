import React from 'react'

const Contacto = () => {
  return (
    <div>
      <h1 className='heading'>Contacto</h1>

      <form className='contact' action='mailto:bea.palomo.delpozo@gmail.com'>
        <input type='text' placeholder='Nombre'></input>
        <input type='text' placeholder='Apellidos'></input>
        <input type='text' placeholder='Email'></input>
        <textarea placeholder='Motivo de contacto'></textarea>
        <input type='submit' placeholder='Enviar'></input>

      </form>
    </div>
  )
}

export default Contacto
