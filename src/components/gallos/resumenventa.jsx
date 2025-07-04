import React, { useState, useEffect, useRef} from 'react';

import { useAsyncError, useNavigate } from "react-router-dom";
import FormatNumeric from '../formatNumeric';
import { fechahoy } from "./js/scripts.js";
import { urlApiSignal}  from "../../shared/urlApiSignal.jsx"
import { userSignal } from "../../shared/userSignal.jsx"



function ResumenVenta( {setPrint})
{

        

    let total_venta = 0;    
        let total_premios = 0;
        let total_jackpot = 0;
        let total_ganancia = 0;
        const navigate = useNavigate();
        const  urlApi  = urlApiSignal.value;
        const [ user, setUser ] = useState(userSignal.value);
        const [loadingResumenVenta, setLoadingResumenVenta] = useState(true)
        const [rangofecha, setRangofecha] = useState(fechahoy("ESP")+'-'+fechahoy("ESP"))
        const [desde, setDesde] = useState(fechahoy("ENG"))
        const [hasta, setHasta] = useState(fechahoy("ENG"))
        const [data, setData] = useState([]);
        
    
    
        const formatoNumerico = (monto) => {
            const decimals = 2;
            const factor = Math.pow(10, decimals);
            const valor = (Math.round(monto * factor) / factor).toLocaleString('es-ES', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
            return valor;
        }
    
    
        
    
        useEffect(()=>{
                
                $("#ResumenVentaModal").on("show.bs.modal", () => {
                    
                    setData([]);
                    setRangofecha(null);
                    setDesde(fechahoy("ENG"));
                    setHasta(fechahoy("ENG"));
                    MostrarResumenVenta();
                  
                  
                });
        
                $("#ResumenVentaModal").on("hidden.bs.modal", () => {
                    setData([]);
                    setRangofecha(null);
                    setDesde(fechahoy("ENG"));
                    setHasta(fechahoy("ENG"));
    
    
                    
                  
                });
                
                
                $(function () {
                  $('input[name="rangofecha"]').daterangepicker(
                    {
                      opens: "left",
                      ranges: {
                        'Hoy': [moment(), moment()],
                        'Ayer': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                        'Ultimos 7 dias': [moment().subtract(6, 'days'), moment()],
                        'Ultimos 30 dias': [moment().subtract(29, 'days'), moment()],
                        'Este Mes': [moment().startOf('month'), moment().endOf('month')],
                        'Mes Anterior': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                     }
                    },
                    function (start, end, label) {
                        setLoadingResumenVenta(true);
                        setDesde(start.format("YYYY-MM-DD"));                    
                        setHasta(end.format("YYYY-MM-DD"));
                    }
                  );
                });
        
            },[])
    
    
    
            const MostrarResumenVenta = () =>{
                    if (localStorage.getItem("token")){
                        setLoadingResumenVenta(true);
                        //verificacion de token
                        if (localStorage.getItem("token").length == 0) return;
                        let token = "Bearer " + localStorage.getItem("token");      
                        let url =  urlApi+'/gallos/resumenventa';
                        fetch(url, {
                            method: "POST", // or 'PUT'     
                            body: JSON.stringify({'desde': desde, 'hasta': hasta}), // data can be `string` or {object}!       
                            headers: {
                            "Accept":"application/json",
                            "Content-Type": "application/json",
                            "Authorization": token
                            },
                        }) 
                            .then((res) => res.json())                        
                            .then((response) => {
                                
                                if (response.message != 'Unauthenticated.') {
                                    if (response.success){
                                        console.log(response.data);
                                        if (response.data.length > 0)
                                        {
                                            setData(response.data); 
                                        }
                                        else 
                                        {
                                            setData([]);
                                        }
                                    }
                                    else {
                                        
                                        setData([]);
                                        setLoadingResumenVenta(false);
                                    }
                                }else 
                                {
                                    navigate("/login"); 
                                }
                            } 
                        )
                        .finally(()=> setLoadingResumenVenta(false));
                    }
                  }
            
            
        useEffect(()=>{                
            MostrarResumenVenta();
        },[desde, hasta])
    
    
        
    
    
        const PrintResumen = (fecha, ventas, premios, jackpot)=>{
            let utilidad = ventas - premios - jackpot;
            //setPrint(null);
    
            let infor = [
                            {'linea':'KeskPlay.com - Gallos'},
                            {'linea':'Resumen Diario'},
                            {'linea':'Caja: '+user.name},
                            {'linea':'Fecha: '+fecha},
                            {'linea':'------------------------'},
                            {'linea':'Venta: '+formatoNumerico(ventas)},
                            {'linea':'Premios: '+formatoNumerico(premios)},
                            {'linea':'JackPot: '+formatoNumerico(jackpot)},
                            {'linea':'Utilidad: '+formatoNumerico(utilidad)},
                            {'linea':'------------------------'}
                        ];
            setPrint(infor);        
            setTimeout(() => {
                            //window.print();
                        },0);
            
            //if (ticketPrint.lenght>0) handlePrint();
                        
        }
    
        const PrintResumenGeneral = (rango, ventas, premios, jackpot)=>{
            let utilidad = ventas - premios - jackpot;
            //setPrint(null);
    
            let infor = [
                            {'linea':'KeskPlay.com - Gallos'},
                            {'linea':'Resumen General'},
                            {'linea':'Caja: '+user.name},
                            {'linea':'Desde: '+desde},
                            {'linea':'Hasta: '+hasta},
                            {'linea':'------------------------'},
                            {'linea':'Venta: '+formatoNumerico(ventas)},
                            {'linea':'Premios: '+formatoNumerico(premios)},
                            {'linea':'JackPot: '+formatoNumerico(jackpot)},
                            {'linea':'Utilidad: '+formatoNumerico(utilidad)},
                            {'linea':'------------------------'}
                        ];
    
                       
    
            setPrint(infor);        
            
                        
        }


    return (
        <>

        <div className="modal fade" id="ResumenVentaModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="ResumenVentaModalpLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="ResumenVentaModalpLabel">Resumen de Venta</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body body_info_ticket">     

                        

                        <form action="" className='form-inline'>
                            <div className="row">
                                <div className="col-lg-4">
                                    <label htmlFor="desde">Periodo { rangofecha } </label>
                                    <input type="text" className="form-control" name="rangofecha" id="rangofecha" value={ rangofecha }  onChange={ e => setRangofecha(e.target.value) }/>
                                </div>
                                
                            </div>                                        
                        </form>

        
                            <table className="table table-striped table-sm" >
                                <thead>
                                    <tr>
                                        <th>Fecha</th>                    
                                        <th className='text-end'>Venta</th>
                                        <th className='text-end'>Premios</th>
                                        <th className='text-end'>Jackpot</th>
                                        <th className='text-end'>Utilidad</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    

                                {                  
                                    data.map((valor, index)=>{
                                        total_venta += valor.venta*1;
                                        total_premios += valor.premios*1;                    
                                        let ganancia = valor.venta - valor.premios - valor.jackpot;
                                        total_ganancia += ganancia*1;
                                        return(
                                            <tr key={ index }>
                                                <td><a href="#" onClick={ () => PrintResumen(valor.fecha, valor.venta, valor.premios, valor.jackpot) } className="text-primary"><i className="fa-solid fa-print"></i></a> { valor.fecha }</td>                            
                                                <td className='text-end'><FormatNumeric monto = { valor.venta } /> </td>
                                                <td className='text-end'><FormatNumeric monto = { valor.premios } /></td>
                                                <td className='text-end'><FormatNumeric monto = { valor.jackpot } /></td>
                                                <td className={ ganancia < 0 ? 'text-end text-danger fw-bold' : 'text-end text-primary fw-bold'} ><FormatNumeric monto = { ganancia }  /></td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th><a href="#" onClick={ () => PrintResumenGeneral(rangofecha, total_venta, total_premios, total_jackpot) } className="text-primary"><i className="fa-solid fa-print"></i></a>Totales</th>
                                        <th className='text-end'><FormatNumeric monto = { total_venta } /></th>
                                        <th className='text-end'><FormatNumeric monto = { total_premios } /></th>
                                        <th className='text-end'><FormatNumeric monto = { total_jackpot } /></th>
                                        <th className='text-end'><FormatNumeric monto = { total_ganancia } /></th>
                                    </tr>
                                </tfoot>        
                            </table>
                                    
                            
                                                        
                            <div className={ loadingResumenVenta ? 'text-center fs-3': 'visually-hidden'}>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span> 
                                </div>
                                <p>Cargando</p>
                            </div>

                </div>
                </div>
            </div>
        </div>
</>
    )
    
}

export default ResumenVenta