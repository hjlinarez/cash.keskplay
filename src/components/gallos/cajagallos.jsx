import React from 'react';
import { useEffect, useState, useContext } from "react";
import Footer from '../footer.jsx';
import Header from './header.jsx';
import RuletaOpciones from './ruletaopciones.jsx';
import Jugadas from './jugadas.jsx';
import Contador from './contador.jsx';
import Tickets from './tickets.jsx';
import Opciones from './opciones.jsx';
import Procesando from "../Procesando.jsx";
import Resumenventa from './resumenventa.jsx'
import PrintableArea from '../printableArea.jsx';
import Viewticket from './viewticket.jsx';
import Pagarticket from './pagarticket.jsx';

import { evento } from "./js/scripts.js";
import { userSignal } from "../../shared/userSignal.jsx"
import { urlApiSignal }  from "../../shared/urlApiSignal.jsx"

import  "./cajagallos.css";

function Cajagallos() {

    useEffect(() => { 
            document.title = "GALLOS | Kesk Plays";
        }, []);

    const [ user, setUser ] = useState(userSignal.value);
    const [ urlApi, setUrlApi ] = useState(urlApiSignal.value);
    const [jugadas, setJugadas] = useState([]);
    
    const [ combate, setCombate ] = useState([]);
    const [ btnPrint, setBtnPrint] = useState(true)
    const [procesando, setProcesando] = useState(false);
    const [ print, setPrint ] = useState([]);
    const [actualizarTickets, setActualizarTickets] = useState(false);
    const [idticketPagar, setIdticketPagar] = useState(null);
    const [pagos, setPagos] = useState([100,500,1000,5000,10000]);
    
    const anularTicket = (id)=>{
    
                            swal({
                                title: "Seguro desea anular ??",
                                text: '', 
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                            })
                            .then((willDelete) => {
                                            if (willDelete) {
                                                setProcesando(true);
                                                let token = "Bearer " + localStorage.getItem("token");                
                                                fetch(urlApi+'/gallos/ticket/'+id, {
                                                    method: "DELETE", // or 'PUT'            
                                                    headers: {
                                                    "Accept":"application/json",
                                                    "Content-Type": "application/json",
                                                    "Authorization": token
                                                    },
                                                }) 
                                                    .then((res) => res.json())
                                                    .then((response) => {
                                                            if (response.success == true){                        
                                                                setActualizarTickets(true);
                                                                swal("Ticket anulado", "El ticket ha sido anulado correctamente", "success");
                                                            }
                                                            else{
                                                                swal("Error",response.message, "error")
                                                            }
                                                    } )
                                                    .finally(()=>{
                                                                setProcesando(false)})

                                                                
                                                    .catch((error) => console.error("Error:", error));
                                            } 
                                    });
                        }




    
    const repetirTicket = (id)=>{
                    //ModalRepetir(); 
                    setBtnPrint(false);
                    setProcesando(true);

                    let token = "Bearer " + localStorage.getItem("token");
                    fetch(urlApi+'/ruleta/repetirTicket/'+id, {
                                method: "GET", // or 'PUT'            
                                headers: {
                                "Accept":"application/json",
                                "Content-Type": "application/json",
                                "Authorization": token
                                },
                            })
                        .then((res) => res.json())        
                        
                        .then((response) => {
                            if (response.success){                                
                                //console.log(response.data)
                                
                                setPrint(response.ticketPrint);
                                //setJugadas([]); // Vacía el estado jugadas
                            }
                            else {             
                                console.log(response)                                                   
                                swal("Disculpe",response.message, "error");                                                                
                            }
                        } )
                        .finally(()=> {
                                            setBtnPrint(true);
                                            setProcesando(false);
                                            setActualizarTickets(true);
                                        })    
                        .catch((error) => errorConexion());
            }

    //state para la consuylta de ticket
    const [idticket, setIdticket] = useState(0);
    


    const consultarTicket = (idticket) => {
            setIdticket(idticket)
        };
    


    const Procesar = (()=>{
        if (jugadas.length == 0){
            swal("Disculpe","No hay jugadas para procesar", "error")
            return;            
        }
        else{

            setBtnPrint(false)
            setProcesando(true)
            
            let token = "Bearer " + localStorage.getItem("token");
            
            fetch(urlApi+'/gallos/ticket', {
                method: "POST", // or 'PUT'
                body: JSON.stringify(jugadas), // data can be `string` or {object}!
                headers: {
                "Accept":"application/json",
                "Content-Type": "application/json",
                "Authorization": token
                },
            })
                .then((res) => res.json())                                
                .then((response) => {
                    
                    if (response.message == 'Unauthenticated.') {
                        setBtnPrint(true);
                    }
                    else {            
                        if (response.status){
                            
                            setPrint(response.ticketPrint);
                            setJugadas([]); // Vacía el estado jugadas
                        }
                        else {
                            //console.log(response);
                            //FormLogin();
                            swal("Disculpe",response.message, "error");
                            
                            
                        }
                    }
                            
                    //swal("Disculpe","Ticket creado ", "success")
                } )
                .finally(()=> {
                    // Aquí puedes manejar la respuesta del servidor
                            setBtnPrint(true);
                            setProcesando(false);
                            setActualizarTickets(true);
                        })
                .catch((error) => console.error('Error:', error));

        }

    })
    

    //
    useEffect(() => {
            evento(setCombate);            
            const jugadasGallos = localStorage.getItem("jugadasGallos");
            if (jugadasGallos) {
                setJugadas(JSON.parse(jugadasGallos));
            }
    } , []);

    return (
        <>
        <Procesando visible={procesando} />
        <Header />

        <div className="principal">

                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <div className="card">              
                            <div className="card-header">Opciones</div>              
                            <div className="card-body">
                                
                                <Opciones jugadas={jugadas} setJugadas={setJugadas} pagos={pagos} combate={combate}/>


                                
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">

                        <div className="card">
                            <div className="card-header">
                                <Contador combate={combate} setCombate={setCombate} setJugadas={setJugadas}/>
                            </div>
                            <div className="card-body div_jugadas">
                                <Jugadas jugadas = {jugadas} setJugadas={setJugadas} />
                            </div>
                            <div className="card-footer">
                                
                                <button type="button" onClick={ Procesar } className={ btnPrint ? 'btn btn-success col-lg-6' : 'btn  btn-success col-lg-6 disabled' } ><i className="fa-solid fa-print"></i> Imprimir</button>
                            </div>
                        </div>

                    </div>
                </div>

                <Tickets 
                    
                    consultarTicket = { consultarTicket }
                    anularTicket={anularTicket}            
                    setIdticketPagar={setIdticketPagar}
                    repetirTicket = { repetirTicket } 
                    actualizarTickets={actualizarTickets} 
                    btnPrint={btnPrint}
                    
                />
        </div>
        <Viewticket idticket={idticket} setIdticket={setIdticket} setProcesando={setProcesando}/>
        <Pagarticket idticket={idticketPagar} setIdticketPagar={setIdticketPagar} setProcesando={setProcesando} setActualizarTickets={setActualizarTickets}/>
        <PrintableArea print={print} setPrint={setPrint}/>
        <Resumenventa setPrint={setPrint} />
        <Footer/>
        </>
    );
}
export default Cajagallos;