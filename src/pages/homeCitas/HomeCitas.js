import React from 'react'
import './HomeCitas.css'
import { useState } from 'react';

export const HomeCitas = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const distritos = [
        { nombre: "Ate", hospital: "Hospital II Vitarte" },
        { nombre: "Barranco", hospital: "Policlínico Barranco" },
        { nombre: "Breña", hospital: "Policlínico Breña" },
        { nombre: "Carabayllo", hospital: "Hospital I Marino Molina Scippa" },
        { nombre: "Chorrillos", hospital: "Policlínico Juan Jose Rodriguez Lazo" },
        { nombre: "Comas", hospital: "Hospital I Marino Molina Scippa" },
        { nombre: "El Agustino", hospital: "Policlínico El Agustino" },
        { nombre: "Independencia", hospital: "Hospital I Independencia" },
        { nombre: "Jesús María", hospital: "Hospital Nacional Edgardo Rebagliati Martins" },
        { nombre: "La Molina", hospital: "Hospital I Carlos Alcántara Butterfield" },
        { nombre: "La Victoria", hospital: "Hospital Nacional Guillermo Almenara Irigoyen" },
        { nombre: "Lince", hospital: "Policlínico Lince" },
        { nombre: "Los Olivos", hospital: "Policlínico Los Olivos" },
        { nombre: "Lurigancho (Chosica)", hospital: "Policlínico Chosica" },
        { nombre: "Lurin", hospital: "Centro de Atención Primaria II Lurín" },
        { nombre: "Magdalena del Mar", hospital: "Policlínico Magdalena del Mar" },
        { nombre: "Miraflores", hospital: "Hospital III Suárez Angamos" },
        { nombre: "Pueblo Libre", hospital: "Policlínico Pueblo Libre" },
        { nombre: "Puente Piedra", hospital: "Centro de Atención Primaria III Puente Piedra" },
        { nombre: "Rimac", hospital: "Policlínico Francisco Pizarro" },
        { nombre: "San Borja", hospital: "Policlínico San Borja" },
        { nombre: "San Isidro", hospital: "Centro de Atención Primaria III San Isidro" },
        { nombre: "San Juan de Lurigancho", hospital: "Hospital I Marco Aurelio Díaz Ufano" },
        { nombre: "San Juan de Miraflores", hospital: "Policlínico San Juan de Miraflores" },
        { nombre: "San Luis", hospital: "Policlínico de Complejidad Creciente San Luis" },
        { nombre: "San Martín de Porres", hospital: "Policlínico San Martín de Porres" },
        { nombre: "San Miguel", hospital: "Hospital I Octavio Mongrut Muñoz" },
        { nombre: "Santa Anita", hospital: "Policlínico Santa Anita" },
        { nombre: "Santiago de Surco", hospital: "Policlínico Próceres" },
        { nombre: "Surquillo", hospital: "Policlínico Surquillo" },
        { nombre: "Villa El Salvador", hospital: "Hospital I Uldarico Rocca Fernández" },
        { nombre: "Villa María del Triunfo", hospital: "Hospital Guillermo Kaelin de la Fuente" }
    ];

    const filteredDistritos = distritos.filter(distrito =>
        distrito.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="HomeCitas-container py-5">
            <div className="HomeCitas-header">SELECCIONE SU DISTRITO PARA RESERVAR SU CITA</div>

            <input
                type="text"
                className="HomeCitas-search-bar mb-5"
                placeholder="Buscar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="row g-4">
                {filteredDistritos.map((distrito, index) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                        <div className="HomeCitas-card-custom h-100">
                            <strong>{distrito.nombre}</strong>
                            {distrito.hospital && <br />}
                            {distrito.hospital}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
