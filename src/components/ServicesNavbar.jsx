import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Services.css'

export function Services({ onItemClick }) {
    const [services, setServices] = useState(false);

    return (
        <div className='services-container'>
            <p className="services-title" onClick={() => { setServices(!services) }}>Servicios{services ? '🔺' : '🔻'}</p>
            {services && (
                <ul className="services-menu">
                    <li className="services-item">
                        <Link
                            to="/CardProductsList?category=Masajes"
                            onClick={() => { setServices(false); onItemClick(); }}
                        >
                            Masajes
                        </Link>
                    </li>
                    <li className="services-item">
                        <Link
                            to="/CardProductsList?category=Rehabilitación"
                            onClick={() => setServices(false)}
                        >
                            Rehabilitación
                        </Link>
                    </li>
                    <li className="services-item">
                        <Link
                            to="/CardProductsList?category=Ejercicios Terapéuticos"
                            onClick={() => setServices(false)}
                        >
                            Ejercicios Terapéuticos
                        </Link>
                    </li>
                    <li className="services-item">
                        <Link
                            to="/CardProductsList?category=Terapias Especializadas"
                            onClick={() => setServices(false)}
                        >
                            Terapias Especializadas
                        </Link>
                    </li>
                    <li className="services-item">
                        <Link
                            to="/CardProductsList?category=Terapias Instrumentales"
                            onClick={() => setServices(false)}
                        >
                            Terapias Instrumentales
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
}