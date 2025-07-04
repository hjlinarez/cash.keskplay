import React, { useState, useEffect, useRef} from 'react';
import { userSignal } from "../shared/userSignal.jsx"
import { use } from 'react';


function MontoApuesta({monto, setMonto}) {

    const [ user, setUser ] = useState(userSignal.value);
    const [pagos, setPagos] = useState( user.parametros_keno.pagos.split(",") || []);
    
    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
        setMonto(value);
        }
    };
    
    useEffect(()=>{
        if (pagos[0]) document.getElementById("monto").value = Number(pagos[0]);
    },[])

    

  return (
    <>
    
    <div className="card w-100">
        <div className="card-header">Monto de Apuesta</div>
        <div className="card-body p-2">
    
    <div className="row">
        <div className="col">                        
            <input type="text" id="monto" value={monto} onChange={handleChange} placeholder="Ingrese el monto" className='form-control'/>
        </div>

        <div className="col m-0">
            <div className="btn-group w-100" role="group" aria-label="Button group with nested dropdown">
                {pagos.map((pago, index) => (
                        <button
                            key={index}
                            type="button"
                            className="btn btn-outline-primary "
                            onClick={() => {
                                const montoInput = document.getElementById("monto");
                                const montoActual = Number(montoInput.value) || 0; // Toma el valor actual o 0 si está vacío
                                montoInput.value = montoActual + Number(pago); // Suma el valor del botón al monto actual
                                setMonto(montoInput.value);
                            }}
                        >
                            {pago.toLocaleString('es-ES', { minimumFractionDigits: 0 })}
                        </button>
                                    ))}

                                    <button
                                        type="button"
                                        className="btn btn-outline-danger "
                                        onClick={() => {
                                            const montoInput = document.getElementById("monto");
                                            montoInput.value = ""; // Limpia el valor del input
                                            setMonto(montoInput.value);
                                            //primervalor(); // Asigna el primer valor de pagos al input
                                        }}
                                    >
                                        Limpiar
                                    </button>
                                    </div>
        </div>
    </div>
    </div>
    </div>
    
    </>
  );
}
export default MontoApuesta;