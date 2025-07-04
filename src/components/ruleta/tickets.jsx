import React, { useState, useEffect, useRef} from 'react';
import { userSignal, tokenSignal}  from "../../shared/userSignal.jsx"
import { urlApiSignal}  from "../../shared/urlApiSignal.jsx"

function Tickets({consultarTicket, anularTicket, setIdticketPagar, repetirTicket, actualizarTickets, btnPrint}) {
    const  user = userSignal.value;
    const  urlApi  = urlApiSignal.value;
    const[ticketsUser, SetTicketsUser ] = useState([]) // este use state contiene la informacion de los tickets realizados del usuario
    



    const uploadTicket = () => {

        if (localStorage.getItem("token")){
            //let userLocal = JSON.parse(localStorage.getItem("user"));
            let token = "Bearer " + localStorage.getItem("token");                
            fetch(urlApi+'/ruleta/ticketsuser', {
                method: "GET", // or 'PUT'            
                headers: {
                            "Accept":"application/json",
                            "Content-Type": "application/json",
                            "Authorization": token
                            },
                        }) 
                .then((res) => res.json())                
                .then((response) => {                       
                        if (response.data)
                        {                                                        
                            SetTicketsUser(response.data);
                        }
                        else
                        {                            
                            SetTicketsUser([]);
                        }                        
                        } )
                .catch((error) => console.log(error));
             
        }
        else{
            
            console.log('NO EXISTE EL TOKCET');
        }
    }



    useEffect(()=>{
            
        uploadTicket();
        const intervalo_tickets = setInterval(() => {                            
                                    uploadTicket();
                            }, 5000);
            return () => clearInterval(intervalo_tickets); // Limpiar el intervalo cuando el componente se desmonte

    },[])


    useEffect(() => {
        // Aquí pones la lógica para actualizar los tickets
        uploadTicket();
    }, [actualizarTickets]);



return (
    <>
    <div className="card mt-1">
            <div className="card-header">
                <div className="row">
                    <div className="col">Tickets
                        

                    </div>
                    <div className="col d-flex justify-content-end">
                        <button type="button" className="btn btn-success mt-1" onClick={ ()=> uploadTicket() }>Actualizar</button>
                    </div>
                </div>                
            </div>
                <div className="card-body">
                    
                    <table width="100%" className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th className="text-end">Nro</th>
                                <th className="text-end">Partida</th>
                                <th className="text-center">Fecha hora</th>
                                <th className="text-end">Monto Jugada</th>
                                <th className="text-end">Premio</th>
                                <th>Estatus</th>
                                
                                
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                                ticketsUser.map((valor, index)=>{
                                    let segundos_transcurridos = valor.segundos_transcurridos;
                                    let status = 'Jugando'                                
                                    let clase = 'text-start badge text-bg-primary fw-bold';
                                    let jackpot = 0 ;
                                    let tiempo = 25; // segundos que deben pasar despues del cierre para que muestre el premio
                                    let premio_total = 0;
                                    let pendiente = 0;

                                    valor.premio_jackpot == null ? jackpot = 0 : jackpot = valor.premio_jackpot;

                                    premio_total = Number(valor.premio_jackpot) + Number(valor.premio);
                                    pendiente = Number(valor.pendiente);
                                    
                                    if (premio_total > 0 && segundos_transcurridos < tiempo) premio_total = 0;
                                    if (pendiente > 0 && segundos_transcurridos < tiempo) pendiente = 0;
                                    
                                    if (valor.cerrada == 1 && premio_total == 0 && segundos_transcurridos > tiempo) 
                                    {
                                        clase = "text-start badge text-black fw-bold";
                                        status = '';
                                    }
                                    if (valor.pendiente > 0 && segundos_transcurridos > tiempo) 
                                    {
                                        clase = 'text-start badge text-bg-success fw-bold';
                                        status = 'Pendiente de Pago';
                                    }
                                    if (premio_total > 0 && valor.pendiente == 0 && segundos_transcurridos > tiempo) {
                                        clase = 'text-start badge text-bg-success fw-bold';
                                        status = 'Pagado';
                                    }

                                    if (valor.estatus == "ANU") {
                                        clase = 'text-start badge text-bg-danger fw-bold';
                                        status = 'Anulado';
                                        premio_total = 0;
                                        pendiente = 0;
                                    }

                                    
                                    return (     
                                                                        
                                            <tr key={ index }>
                                                <td className="text-end">{valor.idticket}</td>
                                                <td className="text-end">{valor.idsorteo}</td>
                                                <td className="text-center">{valor.fecha_hora_local}</td>
                                                <td className="text-end">{ valor.monto_jugada }</td>
                                                <td className="text-end">
                                                    <span className={ premio_total > 0 ? 'text-end  btn-success' :'invisible'}>{ premio_total }</span>                                                    
                                                </td>      
                                                <td > <span className={ clase }>{ status } </span> </td>                                          
                                                <td className="text-start">                                                    
                                                    


                                                    <div className="btn-group" role="group" aria-label="Large button group">
                                                        <button type="button" onClick = { () => consultarTicket(valor.idticket) } className="btn btn-primary"><i className="fa-solid fa-magnifying-glass"></i></button>
                                                        <button type="button" onClick = { () => anularTicket(valor.idticket) }  className={ status == 'Jugando' ? "btn btn-danger" : "btn btn-default disabled"}><i className="fa-solid fa-trash"></i></button>
                                                        
                                                        <button type="button" onClick = { () => setIdticketPagar(valor.idticket) }   className={ pendiente > 0 ? "btn btn-success" : "btn btn-default disabled" } ><i className="fa-solid fa-check"></i></button>                                                    
                                                        <button type="button" onClick = { () => repetirTicket(valor.idticket) } className={ btnPrint ? 'btn btn-primary' : 'btn btn-primary disabled' } ><i className="fa-solid fa-copy"></i></button>
                                                    
                                                    </div>

                                                </td>
                                                
                                            </tr>
                                    )
                                })
                            }
                           
                        </tbody>
                    </table>
            </div>
        </div>
    </>
)

}

export default Tickets