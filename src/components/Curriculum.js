import React from 'react';

const Curriculum = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Currículum</h1>
      
      {/* Vista previa del PDF */}
      <iframe 
        src={`${process.env.PUBLIC_URL}/CV Beatriz Palomo (3).pdf`} 
        style={{width: '100%', height: '500px', border: 'none'}} 
        title="Vista previa del currículum">
      </iframe>
      
      {/* Enlace de descarga */}
      <div style={{marginTop: '20px'}}>
        <a href={`${process.env.PUBLIC_URL}/CV Beatriz Palomo (3).pdf`} download="CV-Beatriz-Palomo.pdf" style={{textDecoration: 'none', color: 'blue'}}>
          Descárgatelo aquí
        </a>
      </div>
    </div>
  );
}

export default Curriculum;
