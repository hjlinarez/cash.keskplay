import React from 'react';


import btn_1 from "../../img/boton_1.png";
import btn_2 from "../../img/boton_2.png";
import btn_3 from "../../img/boton_3.png";
import btn_4 from "../../img/boton_4.png";
import btn_5 from "../../img/boton_5.png";
import btn_6 from "../../img/boton_6.png";

import  "./reversibles.css";
function Reversibles( { carrera, agregarJugada}) {

  return (<>

<div className="row w-100">
    <div className="col">

        <div className="alert alert-secondary">
            <img src={btn_1} width="40" />
            <img src={btn_2} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("REVER#12", 0, carrera.reversible12)}
                className="btn btn-outline-dark"
            >
                {carrera?.reversible12?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_1} width="40" />
            <img src={btn_3} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("REVER#13", 0, carrera.reversible13)}
                className="btn btn-outline-dark"
            >
                {carrera?.reversible13?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_1} width="40" />
            <img src={btn_4} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("REVER#14", 0, carrera.reversible14)}
                className="btn btn-outline-dark"
            >
                {carrera?.reversible14?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_1} width="40" />
            <img src={btn_5} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("REVER#15", 0, carrera.reversible15)}
                className="btn btn-outline-dark"
            >
                {carrera?.reversible15?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_1} width="40" />
            <img src={btn_6} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("REVER#16", 0, carrera.reversible16)}
                className="btn btn-outline-dark"
            >
                {carrera?.reversible16?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_2} width="40" />
            <img src={btn_3} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("REVER#23", 0, carrera.reversible23)}
                className="btn btn-outline-dark"
            >
                {carrera?.reversible23?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_2} width="40" />
            <img src={btn_4} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("REVER#24", 0, carrera.reversible24)}
                className="btn btn-outline-dark"
            >
                {carrera?.reversible24?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_2} width="40" />
            <img src={btn_5} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("REVER#25", 0, carrera.reversible25)}
                className="btn btn-outline-dark"
            >
                {carrera?.reversible25?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_2} width="40" />
            <img src={btn_6} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("REVER#26", 0, carrera.reversible26)}
                className="btn btn-outline-dark"
            >
                {carrera?.reversible26?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_3} width="40" />
            <img src={btn_4} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("REVER#34", 0, carrera.reversible34)}
                className="btn btn-outline-dark"
            >
                {carrera?.reversible34?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_3} width="40" />
            <img src={btn_5} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("REVER#35", 0, carrera.reversible35)}
                className="btn btn-outline-dark"
            >
                {carrera?.reversible35?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_3} width="40" />
            <img src={btn_6} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("REVER#36", 0, carrera.reversible36)}
                className="btn btn-outline-dark"
            >
                {carrera?.reversible36?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_4} width="40" />
            <img src={btn_5} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("REVER#45", 0, carrera.reversible45)}
                className="btn btn-outline-dark"
            >
                {carrera?.reversible45?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_4} width="40" />
            <img src={btn_6} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("REVER#46", 0, carrera.reversible46)}
                className="btn btn-outline-dark"
            >
                {carrera?.reversible46?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_5} width="40" />
            <img src={btn_6} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("REVER#56", 0, carrera.reversible56)}
                className="btn btn-outline-dark"
            >
                {carrera?.reversible56?.toFixed(2)}
            </button>
        </div>
    </div>
</div>


    
  </>)
}
export default Reversibles;