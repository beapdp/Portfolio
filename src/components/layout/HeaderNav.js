import React from 'react';
import { NavLink } from 'react-router-dom';



const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
        <img src="/images/chicaPc.png" alt="Descripción de la imagen" />
            <h3>Beatriz Palomo del POzo</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio" className={({isActive})=> isActive ? "active" : ""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/portafolio">Portafolio</NavLink>
                </li>
                <li>
                    <NavLink to="/servicios">Servicios</NavLink>
                </li>
                <li>
                    <NavLink to="/curriculum">Currículum</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto">Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderNav
