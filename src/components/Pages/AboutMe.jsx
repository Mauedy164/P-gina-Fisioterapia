import React from 'react';
import '../../styles/AboutMe.css';
import marcelo from '../../images/marcelo.jpg'; 
import monica from '../../images/monica.jpg'; 

export function AboutMe() {
  return (
    <div className="about-me-container">
      <h1>Acerca de Nosotros</h1>
      <div className="therapist-card">
        <img src={marcelo} alt="Marcelo García" className="therapist-image" />
        <div className="therapist-info">
          <h2>Marcelo García</h2>
          <p>Cédula: A-44529</p>
          <p>Terapia física y rehabilitación</p>
        </div>
      </div>
      <div className="therapist-card">
        <img src={monica} alt="Mónica Barrera" className="therapist-image" />
        <div className="therapist-info">
          <h2>Mónica Barrera</h2>
          <p>Cédula: A-55254</p>
          <p>Terapia física y rehabilitación</p>
        </div>
      </div>
      <p className="verification-link">
        Puedes consultar sus cédulas en el siguiente enlace:{' '}
        <a href="https://renadep.com/renadep_r/index.php/bd/" target="_blank" rel="noopener noreferrer">
          https://renadep.com/renadep_r/index.php/bd/
        </a>
      </p>
    </div>
  );
}