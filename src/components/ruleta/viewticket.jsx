import React, { useEffect, useState } from "react";
import { urlApiSignal }  from "../../shared/urlApiSignal.jsx"

function ViewTicket({ idticket, setIdticket, setProcesando }) {
    const [myticket, setMyticket] = useState({})
    const [ urlApi, setUrlApi ] = useState(urlApiSignal.value);
    useEffect(() => {    
        if (idticket > 0) { // ✅ Verificación correcta
            if (localStorage.getItem("token")) 
            {                
                
                if (isNaN(idticket)) {
                    swal("Error", "Numero de ticket invalido", "error");
                    return;
                }
                setProcesando(true);
                let token = "Bearer " + localStorage.getItem("token");
                fetch(urlApi + "/ruleta/ticket/" + idticket, {
                method: "GET", // or 'PUT'
                headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            Authorization: token,
                        },
                })
                .then((res) => res.json())                                
                .finally(()=>setProcesando(false))
                .then((response) => {
                    if (response.message != "Unauthenticated.") {
                    if (response.success) {              
                        setIdticket(0);
                        setMyticket(response.data);                        
                        const modal = new bootstrap.Modal(document.getElementById("consultaTicketModal"));
                        modal.show();
                        
                    } else {
                        swal("Lo siento!!!", response.message, "error");
                    }
                    }
                })
                
                .catch((error) => {
                    swal("Error", "Indique el numero del ticket", "error");
                })
                ;
            } 
            else 
            {
                //let userLocal = {'name':'', 'token':''};
                //localStorage.setItem('user', JSON.stringify(userLocal));
                //setUser(JSON.parse(userLocal));
                console.log("NO EXISTE AQUI");
            }
            
            //setMyticket({});
        }
    }, [idticket]);

    return (
        <>
            <div className="modal fade" id="consultaTicketModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Consulta de Ticket: {myticket.idticket}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <div className="card w-100">
                                        <div className="card-header text-center m-0 p-1">Nro. ticket</div>
                                        <div className="card-body m-0 p-1 text-center">{ myticket.idticket}</div>
                                    </div>                                     
                                </div>
                                <div className="col">
                                    <div className="card w-100">
                                        <div className="card-header text-center m-0 p-1">Fecha - Hora</div>
                                        <div className="card-body m-0 p-1 text-center">{ myticket.fecha_ticket}</div>
                                    </div>                                                                         
                                </div>
                                <div className="col">
                                    <div className="card w-100">
                                        <div className="card-header text-center m-0 p-1">Apuesta</div>
                                        <div className="card-body m-0 p-1 text-center">{myticket.apuestatotal ? parseFloat(myticket.apuestatotal).toFixed(2) : "0.00"}</div>
                                    </div>                                                                         
                                    
                                </div>
                            </div>

                            <div className="row mt-1">
                                <div className="col">
                                    <div className="card w-100">
                                        <div className="card-header text-center m-0 p-1">Premio</div>
                                        <div className="card-body m-0 p-1 text-center">{myticket.totalpremio ? parseFloat(myticket.totalpremio).toFixed(2) : "0.00"}</div>
                                    </div>  
                                    
                                </div>

                                <div className="col">
                                    <div className="card w-100">
                                        <div className="card-header text-center m-0 p-1">Jackpot</div>
                                        <div className="card-body m-0 p-1 text-center">{myticket.premio_jackpot ? parseFloat(myticket.premio_jackpot).toFixed(2) : "0.00"}</div>
                                    </div>  
                                    
                                </div>

                                <div className="col">
                                    <div className="card w-100">
                                        <div className="card-header text-center m-0 p-1">Pagado</div>
                                        <div className="card-body m-0 p-1 text-center">{myticket.pagado ? parseFloat(myticket.pagado).toFixed(2) : "0.00"}</div>
                                    </div>  
                                    
                                </div>

                                <div className="col">
                                    <div className="card w-100">
                                        <div className="card-header text-center m-0 p-1">Pendiente</div>
                                        <div className="card-body m-0 p-1 text-center">{myticket.pendiente ? parseFloat(myticket.pendiente).toFixed(2) : "0.00"}</div>
                                    </div>  
                                    
                                </div>
                            </div>

                            <div className="row mt-1">
                                <div className="col">
                                    <div className="card w-100">
                                        <div className="card-header text-center m-0 p-1">Resultado</div>
                                        <div className="card-body m-0 p-1 text-center">{myticket.resultado_sorteo?.split(';').map((numero, index) => (
                    <span key={index} className="badge bg-primary mr-1 fs-6">{numero}</span>
                ))}</div>
                                    </div>                                      
                                </div>
                            </div>

                            
                                <table className="table table-sm table-striped mt-2">
                                    <thead>
                                        <tr>
                                            <th>Jugada</th>
                                            <th>Apuesta</th>
                                            <th>Premio</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            myticket.jugadas?.map((valor, index)=>{
                                                return (
                                                    <tr key={index}>
                                                        
                                                        <td>{ valor.codigojugada}</td>
                                                        <td>{ valor.monto_apuesta}</td>
                                                        <td>{ valor.estatus=="GAN" ? valor.monto_apuesta * valor.logro : null}</td>

                                                    </tr>
                                                )
                                                
                                            })
                                        }

                                    </tbody>
                                </table>
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewTicket;
