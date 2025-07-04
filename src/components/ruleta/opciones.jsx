import React from 'react';
import { useEffect, useState, useContext } from "react";
import MontoApuesta from '../montoApuesta.jsx';

function Opciones({jugadas, setJugadas,pagos})
{

    const[monto, setMonto] = useState("");

    
    const agregarJugada = (codJugada, jugada) => {
        
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
                monto: montoInput,
            };
            setJugadas((prevJugadas) => [...prevJugadas, nuevaJugada]);

        }

        
    };


    const cargarJugadas1 = () => {
        setTimeout(() => {
            agregarJugada("EXACTO#1", "EXACTO #01", 1);
        }, 0);

        setTimeout(()=>{
            agregarJugada("EXACTO#2", "EXACTO #02", 2);

        })
                
                
                };

    
    

    return (<>
        <div className="row">
            <div className="col">
                <MontoApuesta monto={monto} setMonto={setMonto}/>                
            </div>
        </div>
        
    
        <div className="row mt-4">
            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
            
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#1","EXACTO #01",1)}  className="me-1 btn btn-lg bg-black text-white w-100 fs-1">1</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#2","EXACTO #02",2)}  className="me-1 btn btn-lg bg-danger text-white w-100 fs-1 ">2</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#3","EXACTO #03",3)}  className="me-1 btn btn-lg bg-black text-white w-100 fs-1">3</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#4","EXACTO #04",4)}  className="me-1 btn btn-lg bg-danger text-white w-100 fs-1">4</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#5","EXACTO #05",5)}  className="me-1 btn btn-lg bg-black text-white w-100 fs-1">5</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#6","EXACTO #06",6)}  className="me-1 btn btn-lg bg-danger text-white w-100 fs-1">6</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#7","EXACTO #07",7)}  className="me-1 btn btn-lg bg-black text-white w-100 fs-1">7</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#8","EXACTO #08",8)}  className="me-1 btn btn-lg bg-danger text-white w-100 fs-1">8</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#9","EXACTO #09",9)}  className="me-1 btn btn-lg bg-black text-white w-100 fs-1">9</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#10","EXACTO #10",10)}  className="me-1 btn btn-lg bg-danger text-white w-100 fs-1">10</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#11","EXACTO #11",11)}  className="me-1 btn btn-lg bg-black text-white w-100 fs-1">11</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#12","EXACTO #12",12)}  className="me-0 btn btn-lg bg-danger text-white w-100 fs-1">12</button></div>
            </div>
        </div>
        <div className="row mt-1">
            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
            
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#13","EXACTO #13",13)}  className="me-1 btn btn-lg bg-black text-white w-100 fs-1">13</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#14","EXACTO #14",14)}  className="me-1 btn btn-lg bg-danger text-white w-100 fs-1">14</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#15","EXACTO #15",15)}  className="me-1 btn btn-lg bg-black text-white w-100 fs-1">15</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#16","EXACTO #16",16)}  className="me-1 btn btn-lg bg-danger text-white w-100 fs-1">16</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#17","EXACTO #17",17)}  className="me-1 btn btn-lg bg-black text-white w-100 fs-1">17</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#18","EXACTO #18",18)}  className="me-1 btn btn-lg bg-danger text-white w-100 fs-1">18</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#19","EXACTO #19",19)}  className="me-1 btn btn-lg bg-black text-white w-100 fs-1">19</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#20","EXACTO #20",20)}  className="me-1 btn btn-lg bg-danger text-white w-100 fs-1">20</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#21","EXACTO #21",21)}  className="me-1 btn btn-lg bg-black text-white w-100 fs-1">21</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#22","EXACTO #22",22)}  className="me-1 btn btn-lg bg-danger text-white w-100 fs-1">22</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#23","EXACTO #23",23)}  className="me-1 btn btn-lg bg-black text-white w-100 fs-1">23</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#24","EXACTO #24",24)}  className="me-0 btn btn-lg bg-danger text-white w-100 fs-1">24</button></div>
            </div>
        </div>

        <div className="row mt-1">
            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
            
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#25","EXACTO #25",25)} className="me-1 btn btn-lg bg-black text-white w-100 fs-1">25</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#26","EXACTO #26",26)} className="me-1 btn btn-lg bg-danger text-white w-100 fs-1">26</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#27","EXACTO #27",27)} className="me-1 btn btn-lg bg-black text-white w-100 fs-1">27</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#28","EXACTO #28",28)} className="me-1 btn btn-lg bg-danger text-white w-100 fs-1">28</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#29","EXACTO #29",29)} className="me-1 btn btn-lg bg-black text-white w-100 fs-1">29</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#30","EXACTO #30",30)} className="me-1 btn btn-lg bg-danger text-white w-100 fs-1">30</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#31","EXACTO #31",31)} className="me-1 btn btn-lg bg-black text-white w-100 fs-1">31</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#32","EXACTO #32",32)} className="me-1 btn btn-lg bg-danger text-white w-100 fs-1">32</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#33","EXACTO #33",33)} className="me-1 btn btn-lg bg-black text-white w-100 fs-1">33</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#34","EXACTO #34",34)} className="me-1 btn btn-lg bg-danger text-white w-100 fs-1">34</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#35","EXACTO #35",35)} className="me-1 btn btn-lg bg-black text-white w-100 fs-1">35</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#36","EXACTO #36",36)} className="me-0 btn btn-lg bg-danger text-white w-100 fs-1">36</button></div>
            </div>
        </div>

        <div className="row mt-1">
            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
            <div className="col"><button type="button" onClick={()=> agregarJugada("EXACTO#0","EXACTO #0",0)} className="me-1 btn btn-lg bg-success text-white w-100 fs-1">0</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("ROJO","ROJO",99)} className="me-1 btn btn-lg bg-danger text-warning w-100 fs-1">Rojo</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("NEGRO","NEGRO",99)} className="me-1 btn btn-lg bg-black text-warning w-100 fs-1">Negro</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("PAR","PAR",99)} className="me-1 btn btn-lg btn-success text-warning w-100 fs-1">Par</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("IMPAR","IMPAR",99)} className="me-1 btn btn-lg btn-success text-warning w-100 fs-1">Impar</button></div>
            
            </div>

        </div>
        <div className="row mt-1">
            <div className="col"><button type="button" onClick={()=> agregarJugada("1-18","1-18",99)} className="me-1 btn btn-lg btn-success text-warning w-100 fs-1 fw-bold">1-18</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("19-36","19-36",99)} className="btn btn-lg btn-success text-warning w-100 fs-1 fw-bold">19-36</button></div>
        </div>

        <div className="row mt-1">
            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
            <div className="col"><button type="button" onClick={()=> agregarJugada("1-12","1-12",99)} className="me-1 btn btn-lg btn-success text-warning w-100 fs-1 fw-bold">1-12</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("13-24","13-24",99)} className="me-1 btn btn-lg btn-success text-warning w-100 fs-1 fw-bold">13-24</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("25-36","25-36",99)} className="btn btn-lg btn-success text-warning w-100 fs-1 fw-bold">25-36</button></div>
            </div>
        </div>
        
        <div className="row mt-1">
            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
            <div className="col"><button type="button" onClick={()=> agregarJugada("1-6","1-6",99)} className="me-1 btn btn-lg btn-success text-warning w-100 fs-1 fw-bold">1-6</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("7-12","7-12",99)} className="me-1 btn btn-lg btn-success text-warning w-100 fs-1 fw-bold">7-12</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("13-18","13-18",99)} className="me-1 btn btn-lg btn-success text-warning w-100 fs-1 fw-bold">13-18</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("19-24","19-24",99)} className="me-1 btn btn-lg btn-success text-warning w-100 fs-1 fw-bold">19-24</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("25-30","25-30",99)} className="me-1 btn btn-lg btn-success text-warning w-100 fs-1 fw-bold">25-30</button></div>
            <div className="col"><button type="button" onClick={()=> agregarJugada("31-36","31-36",99)} className="me-1 btn btn-lg btn-success text-warning w-100 fs-1 fw-bold">31-36</button></div>
            
            
            </div>
        </div>
    
    </>)
}

export default Opciones;