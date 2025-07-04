import React, { useEffect, useState } from "react";
import { urlApiSignal }  from "../../shared/urlApiSignal.jsx"
import { updateSaldoSignal}  from "../../shared/updateSaldoSignal.jsx"
import { ticketGalgosSignal }  from "../../shared/ticketGalgosSignal.jsx"

function PagarTicket({ idticket, setIdticket, setProcesando }) {
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
                fetch(urlApi + "/galgos/ticket/" + idticket, {
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
                        const modal = new bootstrap.Modal(document.getElementById("pagarTicketModal"));
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


    const ProcesarPago = ()=>{

        if (localStorage.getItem("token")){
            setProcesando(true);
            let token = "Bearer " + localStorage.getItem("token");      
            let url =  urlApi+'/galgos/pagarticket';
            
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
                            updateSaldoSignal.value = true; // este signal actualiza el saldo del encabezado                                                                                       
                            const modal = new bootstrap.Modal(document.getElementById("pagarTicketModal"));
                            modal.hide();
                            //swal("Exito",response.message, "success")
                        }
                        else {
                            //swal("Error",response.message, "error")                            
                            console.log(response.message)
                        }
                    }
                } )
                
                .finally(()=> 
                    {
                        setProcesando(false);
                        ticketGalgosSignal.value = true;
                    }
                    )
                .catch((error) => console.log(error));
        }
    }

    return (
        <>
            <div className="modal fade" id="pagarTicketModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Pagar Ticket: {myticket.idticket}</h1>
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

                            
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success w-100" data-bs-dismiss="modal" onClick={ProcesarPago}>Pagar</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PagarTicket;
