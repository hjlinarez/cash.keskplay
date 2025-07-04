import React from "react";
import { useEffect, useState, useContext } from "react";

import btn_1 from "../../img/boton_1.png";
import btn_2 from "../../img/boton_2.png";
import btn_3 from "../../img/boton_3.png";
import btn_4 from "../../img/boton_4.png";
import btn_5 from "../../img/boton_5.png";
import btn_6 from "../../img/boton_6.png";

import "./trifectas.css";
function Trifectas({ carrera,  agregarJugada }) {
  

  return (
    <>
      <ul className="nav nav-pills nav-fill" id="myTabs">
        <li className="nav-item">
          <a className="nav-link active" data-bs-toggle="tab" href="#div_1">
            <img src={btn_1} width="40" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#div_2">
            <img src={btn_2} width="40" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#div_3">
            <img src={btn_3} width="40" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#div_4">
            <img src={btn_4} width="40" />
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#div_5">
            <img src={btn_5} width="40" />
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#div_6">
            <img src={btn_6} width="40" />
          </a>
        </li>
      </ul>

      <div className="card-body body-jugadas">
        <div className="tab-content mt-3">

          <div className="tab-pane fade show active" id="div_1">
            <div className="row d-flex flex-wrap justify-content-between">
              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#123", 0, carrera.trifecta123)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta123?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#124", 0, carrera.trifecta124)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta124?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#125", 0, carrera.trifecta125)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta125?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#126", 0, carrera.trifecta126)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta126?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#132", 0, carrera.trifecta132)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta132?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#134", 0, carrera.trifecta134)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta134?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#135", 0, carrera.trifecta135)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta135?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#136", 0, carrera.trifecta136)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta136?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#142", 0, carrera.trifecta142)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta142?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#143", 0, carrera.trifecta143)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta143?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#145", 0, carrera.trifecta145)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta145?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#146", 0, carrera.trifecta146)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta146?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#152", 0, carrera.trifecta152)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta152?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#153", 0, carrera.trifecta153)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta153?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#154", 0, carrera.trifecta154)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta154?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#156", 0, carrera.trifecta156)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta156?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#162", 0, carrera.trifecta162)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta162?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#163", 0, carrera.trifecta163)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta163?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#164", 0, carrera.trifecta164)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta164?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_1} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#165", 0, carrera.trifecta165)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta165?.toFixed(0)}
                </button>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="div_2">
            <div className="row d-flex flex-wrap justify-content-between">
              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#213", 0, carrera.trifecta213)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta213?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#214", 0, carrera.trifecta214)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta214?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#215", 0, carrera.trifecta215)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta215?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#216", 0, carrera.trifecta216)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta216?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#231", 0, carrera.trifecta231)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta231?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#234", 0, carrera.trifecta234)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta234?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#235", 0, carrera.trifecta235)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta235?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#236", 0, carrera.trifecta236)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta236?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#241", 0, carrera.trifecta241)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta241?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#243", 0, carrera.trifecta243)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta243?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#245", 0, carrera.trifecta245)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta245?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#246", 0, carrera.trifecta246)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta246?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#251", 0, carrera.trifecta251)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta251?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#253", 0, carrera.trifecta253)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta253?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#254", 0, carrera.trifecta254)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta254?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#256", 0, carrera.trifecta256)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta256?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#261", 0, carrera.trifecta261)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta261?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#263", 0, carrera.trifecta263)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta263?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#264", 0, carrera.trifecta264)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta264?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_2} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#265", 0, carrera.trifecta265)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta265?.toFixed(0)}
                </button>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="div_3">
            <div className="row d-flex flex-wrap justify-content-between">
              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#312", 0, carrera.trifecta312)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta312?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#314", 0, carrera.trifecta314)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta314?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#315", 0, carrera.trifecta315)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta315?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#316", 0, carrera.trifecta316)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta316?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#321", 0, carrera.trifecta321)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta321?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#324", 0, carrera.trifecta324)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta324?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#325", 0, carrera.trifecta325)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta325?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#326", 0, carrera.trifecta326)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta326?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#341", 0, carrera.trifecta341)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta341?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#342", 0, carrera.trifecta342)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta342?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#345", 0, carrera.trifecta345)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta345?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#346", 0, carrera.trifecta346)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta346?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#351", 0, carrera.trifecta351)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta351?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#352", 0, carrera.trifecta352)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta352?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#354", 0, carrera.trifecta354)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta354?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#356", 0, carrera.trifecta356)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta356?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#361", 0, carrera.trifecta361)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta361?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#362", 0, carrera.trifecta362)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta362?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#364", 0, carrera.trifecta364)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta364?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_3} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#365", 0, carrera.trifecta365)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta365?.toFixed(0)}
                </button>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="div_4">
            <div className="row d-flex flex-wrap justify-content-between">
              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#412", 0, carrera.trifecta412)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta412?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#413", 0, carrera.trifecta413)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta413?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#415", 0, carrera.trifecta415)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta415?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#416", 0, carrera.trifecta416)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta416?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#421", 0, carrera.trifecta421)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta421?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#423", 0, carrera.trifecta423)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta423?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#425", 0, carrera.trifecta425)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta425?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#426", 0, carrera.trifecta426)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta426?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#431", 0, carrera.trifecta431)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta431?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#432", 0, carrera.trifecta432)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta432?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#435", 0, carrera.trifecta435)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta435?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#436", 0, carrera.trifecta436)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta436?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#451", 0, carrera.trifecta451)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta451?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#452", 0, carrera.trifecta452)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta452?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#453", 0, carrera.trifecta453)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta453?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#456", 0, carrera.trifecta456)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta456?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#461", 0, carrera.trifecta461)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta461?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#462", 0, carrera.trifecta462)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta462?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#463", 0, carrera.trifecta463)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta463?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_4} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#465", 0, carrera.trifecta465)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta465?.toFixed(0)}
                </button>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="div_5">
            <div className="row d-flex flex-wrap justify-content-between">
              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#512", 0, carrera.trifecta512)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta512?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#513", 0, carrera.trifecta513)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta513?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#514", 0, carrera.trifecta514)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta514?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#516", 0, carrera.trifecta516)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta516?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#521", 0, carrera.trifecta521)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta521?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#523", 0, carrera.trifecta523)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta523?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#524", 0, carrera.trifecta524)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta524?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#526", 0, carrera.trifecta526)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta526?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#531", 0, carrera.trifecta531)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta531?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#532", 0, carrera.trifecta532)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta532?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#534", 0, carrera.trifecta534)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta534?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#536", 0, carrera.trifecta536)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta536?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#541", 0, carrera.trifecta541)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta541?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#542", 0, carrera.trifecta542)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta542?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#543", 0, carrera.trifecta543)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta543?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_6} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#546", 0, carrera.trifecta546)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta546?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#561", 0, carrera.trifecta561)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta561?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#562", 0, carrera.trifecta562)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta562?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#563", 0, carrera.trifecta563)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta563?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_5} width="40" />
                <img src={btn_6} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#564", 0, carrera.trifecta564)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta564?.toFixed(0)}
                </button>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="div_6">
            <div className="row d-flex flex-wrap justify-content-between">
              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#612", 0, carrera.trifecta612)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta612?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#613", 0, carrera.trifecta613)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta613?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#614", 0, carrera.trifecta614)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta614?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_1} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#615", 0, carrera.trifecta615)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta615?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#621", 0, carrera.trifecta621)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta621?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#623", 0, carrera.trifecta623)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta623?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#624", 0, carrera.trifecta624)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta624?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_2} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#625", 0, carrera.trifecta625)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta625?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#631", 0, carrera.trifecta631)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta631?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#632", 0, carrera.trifecta632)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta632?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#634", 0, carrera.trifecta634)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta634?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_3} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#635", 0, carrera.trifecta635)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta635?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#641", 0, carrera.trifecta641)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta641?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#642", 0, carrera.trifecta642)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta642?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#643", 0, carrera.trifecta643)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta643?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_4} width="40" />
                <img src={btn_5} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#645", 0, carrera.trifecta645)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta645?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_1} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#651", 0, carrera.trifecta651)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta651?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_2} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#652", 0, carrera.trifecta652)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta652?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_3} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#653", 0, carrera.trifecta653)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta653?.toFixed(0)}
                </button>
              </div>

              <div className="alert alert-secondary">
                <img src={btn_6} width="40" />
                <img src={btn_5} width="40" />
                <img src={btn_4} width="40" />
                <button
                  type="button"
                  onClick={() =>
                    agregarJugada("TRIFECT#654", 0, carrera.trifecta654)
                  }
                  className="btn btn-outline-dark"
                >
                  {carrera?.trifecta654?.toFixed(0)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trifectas;
