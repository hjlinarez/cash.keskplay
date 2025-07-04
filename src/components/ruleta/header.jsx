import React, { useEffect, useState } from "react";
import Saldouser from "../saldoUser";
import "./header.css";
function Header() {
    const [myticketConsulta , setMyticketConsulta] = useState(0);
    const [user, setUser] = useState({ name: "", id: "" });
    const SeleccionarTicket = () => {}
      const resumenVenta = () => {
      $("#ResumenVentaModal").modal("show");
    };


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href=".">
            Ruleta 
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"                                                  
                aria-label="Search"
                placeholder="Indique el ticket"
                value = { myticketConsulta }
                onChange={e => setMyticketConsulta(e.target.value)}                
              />
              <button
                className="btn btn-primary"
                id="btn_buscar"
                type="button"
                onClick={() => SeleccionarTicket()}
              >
                Buscar
              </button>

              
            </form>
          </div>
        </div>

        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li
              className={
                user.name
                  ? "nav-item dropdown "
                  : "nav-item dropdown "
              }
            >
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <Saldouser />
              </a>

              <ul className="dropdown-menu ">
                <li>
                  <a className="dropdown-item" href="#" onClick={() => resumenVenta()}>
                    <i className="fa-solid fa-chart-simple"></i> Ventas
                  </a>
                </li>


                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-users-gear"></i> Perfil delUsuario
                  </a>
                </li>

              </ul>
            </li>
          </ul>
        </div>
      </nav>
  );
}
export default Header;