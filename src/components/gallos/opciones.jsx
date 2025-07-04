import React from 'react';
import { useEffect, useState, useContext } from "react";
import MontoApuesta from '../montoApuesta.jsx';

function Opciones({jugadas, setJugadas,pagos, combate})
{

    const[monto, setMonto] = useState("");
    const agregarJugada = (codJugada, jugada, logro) => {
        
        const montoInput = Number(monto);
  
        // Validar que el monto sea un número positivo
        if (!montoInput || isNaN(montoInput) || Number(montoInput) <= 0) {
            swal("Por favor","Ingrese un monto válido mayor a 0.","error");
            return;
        }
        
        
        const codigo = codJugada;
    
        // Verificar si la jugada ya existe
        const jugadaExistente = jugadas.find((jugada) => jugada.codigo === codigo);
    
        if (jugadaExistente) {
            // Si la jugada ya existe, sumar el monto            
            const jugadasActualizadas = jugadas.map((jugada) =>
                jugada.codigo === codigo
                    ? { ...jugada, monto: jugada.monto + montoInput }
                    : jugada
            );
            setJugadas(jugadasActualizadas);
        } else {
            // Si no existe, agregar una nueva jugada
            const nuevaJugada = {
                codigo: codigo, // Generar un código único                    
                jugada: jugada,
                logro: logro,                
                monto: montoInput,
            };
            setJugadas([...jugadas, nuevaJugada]);
        }

        
    };

    
    

    return (<>
        <div className="row">
            <div className="col">
                <MontoApuesta monto={monto} setMonto={setMonto}/>                
            </div>
        </div>

        <table className="table table-striped table-sm" width="100%">
            <thead>
                <tr>
                    <th>Jugada</th>
                    <th className="text-center">Rojo</th>
                    <th className="text-center">Empate</th>
                    <th className="text-center">Azul</th>
                </tr>   
            </thead>
            <tbody>
            <tr>
                <th className="fs-3">Ganador del Combate</th>
                <td><button type="button" onClick={()=> agregarJugada("ROJO","ROJO",combate.rojo)}  className="me-1 btn btn-lg bg-danger text-white w-100 fs-3 "><span className="badge text-bg-light">{combate.rojo}</span></button></td>
                <td><button type="button" onClick={()=> agregarJugada("EMPATE","EMPATE",combate.empate)}  className="me-1 btn btn-lg bg-success text-white w-100 fs-3"><span className="badge text-bg-light">{combate.empate}</span></button></td>
                <td><button type="button" onClick={()=> agregarJugada("AZUL","AZUL",combate.azul)}  className="me-1 btn btn-lg bg-primary text-white w-100 fs-3"><span className="badge text-bg-light">{combate.azul}</span></button></td>
            </tr>
            <tr>
                <th className="fs-3">Gana en Sector #1</th>
                <td><button type="button" onClick={()=> agregarJugada("ROJO#S1","ROJO#S1",combate.rojo_s1)}  className="me-1 btn btn-lg bg-danger text-white w-100 fs-3 "><span className="badge text-bg-light">{combate.rojo_s1}</span></button></td>
                <td><button type="button" onClick={()=> agregarJugada("EMPATE#S1","EMPATE#S1",combate.empate_s1)}  className="me-1 btn btn-lg bg-success text-white w-100 fs-3"><span className="badge text-bg-light">{combate.empate_s1}</span></button></td>
                <td><button type="button" onClick={()=> agregarJugada("AZUL#S1","AZUL#S1",combate.azul_s1)}  className="me-1 btn btn-lg bg-primary text-white w-100 fs-3"><span className="badge text-bg-light">{combate.azul_s1}</span></button></td>
            </tr>
            <tr>
                <th className="fs-3">Gana en Sector #2</th>
                <td><button type="button" onClick={()=> agregarJugada("ROJO#S2","ROJO#S2",combate.rojo_s2)}  className="me-1 btn btn-lg bg-danger text-white w-100 fs-3 "><span className="badge text-bg-light">{combate.rojo_s2}</span></button></td>
                <td><button type="button" onClick={()=> agregarJugada("EMPATE#S2","EMPATE#S2",combate.empate_s2)}  className="me-1 btn btn-lg bg-success text-white w-100 fs-3"><span className="badge text-bg-light">{combate.empate_s2}</span></button></td>
                <td><button type="button" onClick={()=> agregarJugada("AZUL#S2","AZUL#S2",combate.azul_s2)}  className="me-1 btn btn-lg bg-primary text-white w-100 fs-3"><span className="badge text-bg-light">{combate.azul_s2}</span></button></td>
            </tr>
            <tr>
                <th className="fs-3">Gana en Sector #3</th>
                <td><button type="button" onClick={()=> agregarJugada("ROJO#S3","ROJO#S3",combate.rojo_s3)}  className="me-1 btn btn-lg bg-danger text-white w-100 fs-3 "><span className="badge text-bg-light">{combate.rojo_s3}</span></button></td>
                <td><button type="button" onClick={()=> agregarJugada("EMPATE#S3","EMPATE#S3",combate.empate_s3)}  className="me-1 btn btn-lg bg-success text-white w-100 fs-3"><span className="badge text-bg-light">{combate.empate_s3}</span></button></td>
                <td><button type="button" onClick={()=> agregarJugada("AZUL#S3","AZUL#S3",combate.azul_s3)}  className="me-1 btn btn-lg bg-primary text-white w-100 fs-3"><span className="badge text-bg-light">{combate.azul_s3}</span></button></td>
            </tr>
            <tr>
                <th className="fs-3">Gana en Sector #4</th>
                <td><button type="button" onClick={()=> agregarJugada("ROJO#S4","ROJO#S4",combate.rojo_s4)}  className="me-1 btn btn-lg bg-danger text-white w-100 fs-3 "><span className="badge text-bg-light">{combate.rojo_s4}</span></button></td>
                <td><button type="button" onClick={()=> agregarJugada("EMPATE","EMPATE#S4",combate.empate_s4)}  className="me-1 btn btn-lg bg-success text-white w-100 fs-3"><span className="badge text-bg-light">{combate.empate_s4}</span></button></td>
                <td><button type="button" onClick={()=> agregarJugada("AZUL#S4","AZUL#S4",combate.azul_s4)}  className="me-1 btn btn-lg bg-primary text-white w-100 fs-3"><span className="badge text-bg-light">{combate.azul_s4}</span></button></td>
            </tr>
            <tr>
                <th className="fs-3">Finaliza en:</th>
                <td colSpan={3} >
                    <button type="button" onClick={()=> agregarJugada("#S1","#S1",combate.s1)}  className="col-lg-3 btn btn-lg btn-outline-primary fs-3 ">#S1<span className="badge text-bg-light">{combate.s1}</span></button>    
                    <button type="button" onClick={()=> agregarJugada("#S2","#S2",combate.s2)}  className="col-lg-3 btn btn-lg btn-outline-primary fs-3 ">#S2<span className="badge text-bg-light">{combate.s2}</span></button>
                    <button type="button" onClick={()=> agregarJugada("#S3","#S3",combate.s3)}  className="col-lg-3 btn btn-lg btn-outline-primary fs-3 ">#S3<span className="badge text-bg-light">{combate.s3}</span></button>
                    <button type="button" onClick={()=> agregarJugada("#S4","#S4",combate.s4)}  className="col-lg-3 btn btn-lg btn-outline-primary fs-3 ">#S4<span className="badge text-bg-light">{combate.s4}</span></button>
                </td>
            </tr>
            </tbody>

        </table>
        
    
       

        
    
    </>)
}

export default Opciones;