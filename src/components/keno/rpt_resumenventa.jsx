import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { userSignal } from "../../shared/userSignal.jsx"
import { urlApiSignal }  from "../../shared/urlApiSignal.jsx"

import './rpt_resumenventa.css';

function Rpt_resumenventa() {
    let { fecha, venta, premios, jackpot } = useParams();
    const [clase, setClase] = useState('font-sm');
    const [ user, setUser ] = useState(userSignal.value);
    const [ urlApi, setUrlApi ] = useState(urlApiSignal.value);
    console.log("paso");
    let token = localStorage.getItem("token");

    // Espera a que el contexto esté listo
    if (!user || !token) return <div>Cargando...</div>;
    

    useEffect(() => {
        

        if (token && user) {
            
            let font = 0;
            if (user && user.parametros_keno && user.parametros_keno.font) font = user.parametros_keno.font;
            switch (font) {
                case 0: setClase('font-sm'); break;
                case 1: setClase('font-md'); break;
                case 2: setClase('font-lg'); break;
                case 3: setClase('font-xl'); break;
                default: setClase('font-sm'); break;
            }
            setTimeout(() => {
                window.print()
            }, 0);
        }
    }, []);


    

    return (
        <div className={clase}>
            <h1>Resumen Venta</h1>
        </div>
    );
}

export default Rpt_resumenventa;