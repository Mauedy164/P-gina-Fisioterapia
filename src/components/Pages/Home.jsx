
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../styles/Home.css';


import carousel1 from '../../images/carousel-1.jpg';
import carousel2 from '../../images/carousel-2.jpg';
import carousel3 from '../../images/carousel-3.jpg';

const HomePage = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="home-container">
    
      <section className="carousel-section">
        <Slider {...carouselSettings}>
          <div className="carousel-item">
            <img src={carousel1} alt="Terapia manual" />
            <div className="carousel-caption">
              <h2>Bienvenido a Fisioterapia Integral</h2>
              <p>Recupera tu movilidad y calidad de vida</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel2} alt="Equipo profesional" />
            <div className="carousel-caption">
              <h2>Profesionales Certificados</h2>
              <p>Técnicas modernas y equipos de última generación</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel3} alt="Instalaciones" />
            <div className="carousel-caption">
              <h2>Instalaciones Modernas</h2>
              <p>Ambientes diseñados para tu comodidad y recuperación</p>
            </div>
          </div>
        </Slider>
      </section>

     
      <section className="featured-services">
        <h2>Nuestros Servicios Destacados</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Rehabilitación Física</h3>
            <p>Recuperación de lesiones y cirugías</p>
            <Link to="/CardProductsList?category=Rehabilitación" className="service-link">
              Ver más
            </Link>
          </div>
          <div className="service-card">
            <h3>Terapias Especializadas</h3>
            <p>Técnicas avanzadas para tu bienestar</p>
            <Link to="/CardProductsList?category=Terapias Especializadas" className="service-link">
              Ver más
            </Link>
          </div>
          <div className="service-card">
            <h3>Masajes Terapéuticos</h3>
            <p>Alivio del dolor y relajación muscular</p>
            <Link to="/CardProductsList?category=Masajes" className="service-link">
              Ver más
            </Link>
          </div>
        </div>
      </section>

     
      <section className="benefits-section">
        <h2>¿Por qué elegirnos?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Profesionales Certificados</h3>
            <p>Equipo de fisioterapeutas con amplia experiencia y certificaciones nacionales</p>
          </div>
          <div className="benefit-card">
            <h3>Tecnología de Punta</h3>
            <p>Equipos modernos y técnicas basadas en la última evidencia científica</p>
          </div>
          <div className="benefit-card">
            <h3>Enfoque Personalizado</h3>
            <p>Planes de tratamiento individualizados según tus necesidades específicas</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;