import React from 'react';
import {Routes, Route, BrowserRouter, NavLink, Navigate}   from "react-router-dom";
import Inicio from "../components/Inicio";
import Portafolio from "../components/Portafolio";
import Servicios from "../components/Servicios";
import Curriculum from "../components/Curriculum";
import Contacto from "../components/Contacto";
import HeaderNav from '../components/layout/HeaderNav';
import Footer from '../components/layout/Footer';
import Project from '../components/Project';


const MisRutas = () => {
  return (
    <BrowserRouter>
        {/*HEADER Y NAVEGACIÓN*/}
        <HeaderNav/>
        {/*CONTENIDO CENTRAL*/}
        <section className='content'>
          <Routes>
              <Route path='/' element={<Navigate to="/inicio" />}/>
              <Route path='/inicio' element={<Inicio/>}/>
              <Route path='/portafolio' element={<Portafolio/>}/>
              <Route path='/servicios' element={<Servicios/>}/>
              <Route path='/curriculum' element={<Curriculum/>}/>
              <Route path='/contacto' element={<Contacto/>}/>
              <Route path='/proyecto/:id' element={<Project/>}/>
              <Route path='*' element={<h1 className='heading'>Error 404</h1>}/>
          </Routes>
        </section>
        {/*PIE DE PÁGINA*/}
        <Footer/>
    </BrowserRouter>
  )
}

export default MisRutas
