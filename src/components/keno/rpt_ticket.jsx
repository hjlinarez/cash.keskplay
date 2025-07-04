import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";

import { userSignal } from "../../shared/userSignal.jsx"
import { urlApiSignal }  from "../../shared/urlApiSignal.jsx"
import { printSignal }  from "../../shared/printSignal.jsx"

import './rpt_ticket.css';

function Rpt_ticket({id, setPrint}) {
    //let { id } = useParams();
    const [ticket, setTicket] = useState([]);
    const [clase, setClase] = useState('font-sm');
    const [ user, setUser ] = useState(userSignal.value);
    const [ urlApi, setUrlApi ] = useState(urlApiSignal.value);


    let token = localStorage.getItem("token");


    // Espera a que el contexto esté listo
    if (!user || !token) return <div>Cargando...{ urlApi }</div>;

    useEffect(() => {
        if (id > 0) {
            fetch(urlApi + "/keno/ticket/" + id, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((response) => {
                    if (response.data && response.data.ticketPrint) {                        
                        setPrint(response.data.ticketPrint);
                        //setTimeout(()=>{window.print()},0)
                    } else {
                        setPrint([]);
                    }
                    let font = 0;
                    if (user && user.parametros_keno && user.parametros_keno.font) font = user.parametros_keno.font;
                    switch (font) {
                        case 0: setClase('font-sm'); break;
                        case 1: setClase('font-md'); break;
                        case 2: setClase('font-lg'); break;
                        case 3: setClase('font-xl'); break;
                        default: setClase('font-sm'); break;
                    }
                    
                })
                .catch((error) => {
                    setPrint([]);
                });
        }
    }, [id]);

    //if (ticket.length === 0) return <div>No hay datos para este ticket.</div>;

    return (
        <>
        </>
    );
}

export default Rpt_ticket;