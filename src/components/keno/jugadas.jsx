import React, { useState, useEffect, useRef, useContext } from 'react';

function Jugadas ({ jugadas, setJugadas }) {

    const eliminarJugada = (index) => {
        setJugadas(jugadas.filter((_, i) => i !== index));
    };

    const limpiarJugadas = () => {
        setJugadas([]); // Vacía el estado jugadas
    };

    const total = jugadas.reduce((sum, jugada) => sum + Number(jugada.monto), 0);
    
    return (  <>
  
    {jugadas.length > 0 && (
        <div className="d-flex justify-content-end">
            <button
                type="button"
                onClick={limpiarJugadas}
                className="btn btn-sm btn-danger mb-2"
            >
                <i className="fa-solid fa-trash"></i> Todo ({jugadas.length})
            </button>
        </div>
    )}
    <table className="table table-sm table-striped">                    
                            <thead>
                                
                            <tr>
                                <th>Jugada</th>
                                <th className="text-end">Monto</th>
                            </tr>
                            </thead>
                            <tbody>                  
                            { 
                                jugadas.map((jugada, index)=>{
                                return (<tr key={ index }>  
                                        <td>
                                            <button type="button" onClick={()=>eliminarJugada(index)} className="btn btn-danger btn-sm me-2"><i className="fa-sharp-duotone fa-solid fa-trash"></i></button> 
                                            {Array.isArray(jugada.jugada)
                                                ? jugada.jugada
                                                    .slice()
                                                    .sort((a, b) => a - b)
                                                    .map((num, i) => (
                                                        <span key={i} className="badge bg-success me-1">
                                                        {String(num).padStart(2, "0")}
                                                        </span>
                                                    ))
                                                : jugada.jugada}
                                        </td>
                                        <td className="text-end"> 
                                            {Number(jugada.monto).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </td>
                                        </tr>)
                                })
                            }
                            </tbody>
                            <tfoot>
        <tr>
            <th>
                Total
            </th>
            <th className="text-end">
            {total.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </th>
        </tr>
    </tfoot>
                        </table>
    </>);
}

export default Jugadas;