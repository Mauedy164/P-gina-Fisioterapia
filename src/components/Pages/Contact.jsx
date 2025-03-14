import React from 'react';
import '../../styles/Contact.css';

export function Contact() {
  return (
    <div className="contact-container">
      <h1>Contáctanos</h1>
      <div className="contact-info">
        <p>Si tienes alguna pregunta o deseas agendar una cita, puedes contactarnos a través de los siguientes medios:</p>
        <div className="contact-links">
          <a href="https://wa.me/5586698933" target="_blank" rel="noopener noreferrer">
            WhatsApp 1: +55 8669 8933
          </a>
          <a href="https://wa.me/5530771815" target="_blank" rel="noopener noreferrer">
            WhatsApp 2: +55 3077 1815
          </a>
          <a href="mailto:fisioterapiasMarceloMonica@fisioterapia.com">
            Correo Electrónico: fisioterapiasMarceloMonica@fisioterapia.com
          </a>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d328.51679579614444!2d-99.14042891941999!3d19.697947996699195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f4deabb1139d%3A0xafd934fde8fe55f7!2sCalle%20Ayuntamiento%2064%2C%20Educacion%2C%2054883%20Melchor%20Ocampo%2C%20M%C3%A9x.!5e1!3m2!1ses-419!2smx!4v1741919329169!5m2!1ses-419!2smx"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación"
        ></iframe>
      </div>
    </div>
  );
}