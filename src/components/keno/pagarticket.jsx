import React, { useEffect, useState } from "react";
import { userSignal } from "../../shared/userSignal.jsx"
import { urlApiSignal }  from "../../shared/urlApiSignal.jsx"


function PagarTicket({ myticket, setMyticket, setProcesando, setActualizarTickets }) {

    const [ user, setUser ] = useState(userSignal.value);
    const [ urlApi, setUrlApi ] = useState(urlApiSignal.value);

   useEffect(() => {
    
        if (myticket.idticket > 0) { // ✅ Verificación correcta            
            const modal = new bootstrap.Modal(document.getElementById("pagarTicketModal"));
            modal.show();
            //setMyticket({});
        }
    }, [myticket]);


    const ProcesarPago = ()=>{

        if (localStorage.getItem("token")){
            setProcesando(true);
            let token = "Bearer " + localStorage.getItem("token");      
            let url =  urlApi+'/keno/pagarticket';
            
            fetch(url, {
                method: "POST", // or 'PUT'     
                body: JSON.stringify({'idticket': myticket.idticket, 'serial': myticket.serial}), // data can be `string` or {object}!       
                headers: {
                "Accept":"application/json",
                "Content-Type": "application/json",
                "Authorization": token
                },
            }) 
                .then((res) => res.json())
                .then((response) => {
                    //console.log(response.message)
                    if (response.message != 'Unauthenticated.') {
                        if (response.success){          
                            setActualizarTickets(true);
                            const modal = new bootstrap.Modal(document.getElementById("pagarTicketModal"));
                            modal.hide();
                            //swal("Exito",response.message, "success")
                        }
                        else {
                            swal("Error",response.message, "error")                            
                        }
                    }
                } )
                .finally(()=> setProcesando(false))
                .catch((error) => errorConexion());
        }
    }

    return (
        <>
            <div className="modal fade" id="pagarTicketModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Pagar de Ticket: {myticket.idticket}</h1>
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
                                        <div className="card-header text-center m-0 p-1">Total a Pagar</div>
                                        <div className="card-body m-0 p-1 text-center fw-bold ">{myticket.pendiente ? parseFloat(myticket.pendiente).toFixed(2) : "0.00"}</div>
                                    </div>  
                                    
                                </div>
                            </div>

                            
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success w-100" data-bs-dismiss="modal" onClick={ProcesarPago}>Pagar Ticket</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PagarTicket;
