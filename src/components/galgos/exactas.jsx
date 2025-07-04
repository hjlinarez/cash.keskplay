
import btn_1 from "../../img/boton_1.png";
import btn_2 from "../../img/boton_2.png";
import btn_3 from "../../img/boton_3.png";
import btn_4 from "../../img/boton_4.png";
import btn_5 from "../../img/boton_5.png";
import btn_6 from "../../img/boton_6.png";


import  "./exactas.css";
function Exactas( { carrera, agregarJugada}) {


  return (<>

<div className="row w-100">
    <div className="col">

    
        <div className="alert alert-secondary">
            <img src={btn_1} width="40" />
            <img src={btn_2} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#12", 1, carrera.exacta12)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta12?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_1} width="40" />
            <img src={btn_3} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#13", 1, carrera.exacta13)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta13?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_1} width="40" />
            <img src={btn_4} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#14", 1, carrera.exacta14)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta14?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_1} width="40" />
            <img src={btn_5} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#15", 1, carrera.exacta15)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta15?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_1} width="40" />
            <img src={btn_6} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#16", 1, carrera.exacta16)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta16?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_2} width="40" />
            <img src={btn_1} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#21", 2, carrera.exacta21)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta21?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_2} width="40" />
            <img src={btn_3} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#23", 2, carrera.exacta23)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta23?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_2} width="40" />
            <img src={btn_4} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#24", 2, carrera.exacta24)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta24?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_2} width="40" />
            <img src={btn_5} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#25", 2, carrera.exacta25)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta25?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_2} width="40" />
            <img src={btn_6} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#26", 2, carrera.exacta26)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta26?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_3} width="40" />
            <img src={btn_1} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#31", 3, carrera.exacta31)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta31?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_3} width="40" />
            <img src={btn_2} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#32", 3, carrera.exacta32)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta32?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_3} width="40" />
            <img src={btn_4} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#34", 3, carrera.exacta34)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta34?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_3} width="40" />
            <img src={btn_5} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#35", 3, carrera.exacta35)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta35?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_3} width="40" />
            <img src={btn_6} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#36", 3, carrera.exacta36)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta36?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_4} width="40" />
            <img src={btn_1} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#41", 4, carrera.exacta41)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta41?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_4} width="40" />
            <img src={btn_2} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#42", 4, carrera.exacta42)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta42?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_4} width="40" />
            <img src={btn_3} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#43", 4, carrera.exacta43)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta43?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_4} width="40" />
            <img src={btn_5} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#45", 4, carrera.exacta45)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta45?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_4} width="40" />
            <img src={btn_6} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#46", 4, carrera.exacta46)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta46?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_5} width="40" />
            <img src={btn_1} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#51", 5, carrera.exacta51)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta51?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_5} width="40" />
            <img src={btn_2} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#52", 5, carrera.exacta52)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta52?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_5} width="40" />
            <img src={btn_3} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#53", 5, carrera.exacta53)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta53?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_5} width="40" />
            <img src={btn_4} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#54", 5, carrera.exacta54)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta54?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_5} width="40" />
            <img src={btn_6} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#56", 5, carrera.exacta56)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta56?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_6} width="40" />
            <img src={btn_1} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#61", 6, carrera.exacta61)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta61?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_6} width="40" />
            <img src={btn_2} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#62", 6, carrera.exacta62)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta62?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_6} width="40" />
            <img src={btn_3} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#63", 6, carrera.exacta63)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta63?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_6} width="40" />
            <img src={btn_4} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#64", 6, carrera.exacta64)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta64?.toFixed(2)}
            </button>
        </div>

        <div className="alert alert-secondary">
            <img src={btn_6} width="40" />
            <img src={btn_5} width="40" />
            <button
                type="button"
                onClick={() => agregarJugada("EXACTA#65", 6, carrera.exacta65)}
                className="btn btn-outline-dark"
            >
                {carrera?.exacta65?.toFixed(2)}
            </button>
        </div>
    </div>
</div>





    
  </>)
}
export default Exactas;