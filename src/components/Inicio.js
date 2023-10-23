import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div className='home'>
      <h1>Hola, soy <strong>Beatriz Palomo</strong>, Desarrolladora Web .... ofrezco mis servicios de <strong>programación y desarrollo</strong> en todo tipo de proyectos web.</h1>
      <h2>Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y relevancia en internet. <Link to="/contacto">Contacta conmigo.</Link></h2> 
    
      <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>
        <div className='works'>

        </div>
      </section>
    </div>
  )
}

export default Inicio
