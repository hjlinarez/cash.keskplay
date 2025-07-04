import React from 'react';
import { useEffect, useState, useContext } from "react";

import btn_1 from "../../img/boton_1.png";
import btn_2 from "../../img/boton_2.png";
import btn_3 from "../../img/boton_3.png";
import btn_4 from "../../img/boton_4.png";
import btn_5 from "../../img/boton_5.png";
import btn_6 from "../../img/boton_6.png";

function Ganadores( {  carrera, agregarJugada }) {

    return (
            <>
                <table className="table table-striped" width="100%">
                                <thead>
                                    <tr>
                                    <td></td>
                                    <td>
                                        <img src={ btn_1} width="80"/>
                                    </td>
                                    <td>
                                        <img src={ btn_2} width="80"/>
                                    </td>
                                    <td>    
                                        <img src={ btn_3} width="80"/>
                                    </td>
                                    <td>    
                                        <img src={ btn_4} width="80"/>
                                    </td>
                                    <td>    
                                        <img src={ btn_5} width="80"/>
                                    </td>
                                    <td>    
                                        <img src={ btn_6} width="80"/>
                                    </td>
                                </tr>
                                    
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>WIN</td>
                                        <td>
                                            <button type="button" onClick={ ()=> agregarJugada("WIN#1",1, carrera.win1)} className="btn btn-outline-dark">{ carrera?.win1?.toFixed(2) }</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={ ()=> agregarJugada("WIN#2",2, carrera.win2)} className="btn btn-outline-dark">{ carrera?.win2?.toFixed(2) }</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={ ()=> agregarJugada("WIN#3",3, carrera.win3)} className="btn btn-outline-dark">{ carrera?.win3?.toFixed(2) }</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={ ()=> agregarJugada("WIN#4",4, carrera.win4)} className="btn btn-outline-dark">{ carrera?.win4?.toFixed(2) }</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={ ()=> agregarJugada("WIN#5",5, carrera.win5)} className="btn btn-outline-dark">{ carrera?.win5?.toFixed(2) }</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={ ()=> agregarJugada("WIN#6",6, carrera.win6)} className="btn btn-outline-dark">{ carrera?.win6?.toFixed(2) }</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>PLACE</td>
                                        <td>
                                            <button type="button" onClick={ ()=> agregarJugada("PLACE#1",1, carrera.place1)}  className="btn btn-outline-dark">{ carrera?.place1?.toFixed(2) }</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={ ()=> agregarJugada("PLACE#2",2, carrera.place2)}  className="btn btn-outline-dark">{ carrera?.place2?.toFixed(2) }</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={ ()=> agregarJugada("PLACE#3",3, carrera.place3)}  className="btn btn-outline-dark">{ carrera?.place3?.toFixed(2) }</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={ ()=> agregarJugada("PLACE#4",4, carrera.place4)}  className="btn btn-outline-dark">{ carrera?.place4?.toFixed(2) }</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={ ()=> agregarJugada("PLACE#5",5, carrera.place5)}  className="btn btn-outline-dark">{ carrera?.place5?.toFixed(2) }</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={ ()=> agregarJugada("PLACE#6",6, carrera.place6)}  className="btn btn-outline-dark">{ carrera?.place6?.toFixed(2) }</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>SHOW</td>
                                        <td>
                                            <button type="button" onClick={ ()=> agregarJugada("SHOW#1",1, carrera.show1)} className="btn btn-outline-dark">{ carrera?.show1?.toFixed(2) }</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={ ()=> agregarJugada("SHOW#2",2, carrera.show2)} className="btn btn-outline-dark">{ carrera?.show2?.toFixed(2) }</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={ ()=> agregarJugada("SHOW#3",3, carrera.show3)} className="btn btn-outline-dark">{ carrera?.show3?.toFixed(2) }</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={ ()=> agregarJugada("SHOW#4",4, carrera.show4)} className="btn btn-outline-dark">{ carrera?.show4?.toFixed(2) }</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={ ()=> agregarJugada("SHOW#5",5, carrera.show5)} className="btn btn-outline-dark">{ carrera?.show5?.toFixed(2) }</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={ ()=> agregarJugada("SHOW#6",6, carrera.show6)} className="btn btn-outline-dark">{ carrera?.show6?.toFixed(2) }</button>
                                        </td>
                                    </tr>
                                </tbody>
                                
                            </table>

                <div className="row">
                    <div className="col">
                        <div className="card w-100">
                            <div className="card-header text-center">
                                Impar <img src={ btn_1} width="30"/><img src={ btn_3} width="30"/><img src={ btn_5} width="30"/>
                            </div>
                            <div className="card-body text-center">
                                <button type="button" onClick={ ()=> agregarJugada("IMPAR",0, carrera.impar)} className="btn btn-outline-dark">{ carrera?.impar?.toFixed(2) } </button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card w-100">
                            <div className="card-header text-center">
                                Par <img src={ btn_2} width="30"/><img src={ btn_4} width="30"/><img src={ btn_6} width="30"/>
                            </div>
                            <div className="card-body text-center">
                                <button type="button" onClick={ ()=> agregarJugada("PAR",0, carrera.par)} className="btn btn-outline-dark">{ carrera?.par?.toFixed(2) }</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card w-100">
                            <div className="card-header text-center">
                                Baja: <img src={ btn_1} width="30"/><img src={ btn_2} width="30"/><img src={ btn_3} width="30"/>
                            </div>
                            <div className="card-body text-center">
                                <button type="button" onClick={ ()=> agregarJugada("BAJA",0, carrera.baja)} className="btn btn-outline-dark">{ carrera?.baja?.toFixed(2) }</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card w-100">
                            <div className="card-header text-center">
                                Alta: <img src={ btn_4} width="30"/><img src={ btn_5} width="30"/><img src={ btn_6} width="30"/>
                            </div>
                            <div className="card-body text-center">
                                <button type="button" onClick={ ()=> agregarJugada("ALTA",0, carrera.alta)} className="btn btn-outline-dark">{ carrera?.alta?.toFixed(2) }</button>
                            </div>
                        </div>
                    </div>
                </div>
</>



  );
}
export default Ganadores;