import React, { useEffect, useState } from 'react';
import { evento } from "./js/scripts.js";

const Contador = ({ sorteo, setSorteo, setJugadas }) => {
    const [tiempo, setTiempo] = useState(sorteo.segundos || 0); // Inicializa con carrera.segundos
    const [mostrarOverlay, setMostrarOverlay] = useState(false); // Estado para mostrar el overlay

    useEffect(() => {
        // Reinicia el tiempo si cambia carrera.segundos
        setTiempo(sorteo.segundos || 0);
        

        setMostrarOverlay(false); // Asegúrate de ocultar el overlay si se reinicia el tiempo
    }, [sorteo.segundos]);

    useEffect(() => {
        if (tiempo === 0) {
            setMostrarOverlay(true); // Muestra el overlay cuando el tiempo llega a cero

            // Ejecuta la función `evento` 10 segundos después
            const timeout = setTimeout(() => {
                evento(setSorteo); // Llama a la función `evento` con `setCarrera` como parámetro
                setMostrarOverlay(false); // Oculta el overlay después de ejecutar el evento
                setJugadas([]); // Limpia las jugadas
            }, 10000);

            return () => clearTimeout(timeout); // Limpia el timeout si el componente se desmonta
        }

        const intervalo = setInterval(() => {
            setTiempo((prevTiempo) => Math.max(prevTiempo - 1, 0)); // Evita valores negativos
        }, 1000);

        return () => clearInterval(intervalo);
    }, [tiempo, setSorteo]);

    const formatearTiempo = (segundos) => {
        const horas = String(Math.floor(segundos / 3600)).padStart(2, '0');
        const minutos = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
        const segundosRestantes = String(segundos % 60).padStart(2, '0');
        return `${minutos}:${segundosRestantes}`;
    };

    return (
        <div>
            <div className="fs-4">
                Sorteo#: <span className="fw-bold">{sorteo.idsorteo}</span> inicia en <span className="fw-bold">{formatearTiempo(tiempo)}</span>
            </div>

            {/* Renderiza el overlay solo si mostrarOverlay es true */}
            {mostrarOverlay && (
                <div style={overlayStyles}>
                    <div style={mensajeStyles}>Sorteo en ejecución</div>
                </div>
            )}
        </div>
    );
};

// Estilos para el overlay
const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fondo negro con 50% de transparencia
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Asegura que esté por encima de otros elementos
};

// Estilos para el mensaje
const mensajeStyles = {
    color: 'white',
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
};

export default Contador;