import React, { useState } from "react";

const numeros = Array.from({ length: 36 }, (_, i) => i + 1); // 1-36
const filas = [
  numeros.filter(n => (n - 1) % 3 === 0), // 1ra columna
  numeros.filter(n => (n - 2) % 3 === 0), // 2da columna
  numeros.filter(n => n % 3 === 0),       // 3ra columna
];
const colorRojo = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];

function RuletaOpciones({ onApostar }) {
  const [seleccion, setSeleccion] = useState(null);

  const handleApostar = (tipo, valor) => {
    setSeleccion({ tipo, valor });
    if (onApostar) onApostar({ tipo, valor });
  };

  return (
    <div>
      <h3>Mesa de Ruleta</h3>
      <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
        {/* Números */}
        <div>
          <table className="table table-bordered" style={{ background: "#222", color: "#fff", minWidth: 220 }}>
            <tbody>
              {/* Fila de 0 */}
              <tr>
                <td rowSpan={3} style={{ background: "#2e8b57", color: "#fff", textAlign: "center", verticalAlign: "middle" }}>
                  <button
                    className={`btn btn-sm ${seleccion?.tipo === "numero" && seleccion.valor === 0 ? "btn-warning" : "btn-outline-warning"}`}
                    onClick={() => handleApostar("numero", 0)}
                  >
                    0
                  </button>
                </td>
                {/* Primera fila */}
                {filas[0].map(n => (
                  <td key={n}>
                    <button
                      className={`btn btn-sm ${seleccion?.tipo === "numero" && seleccion.valor === n ? "btn-primary" : "btn-outline-primary"}`}
                      style={{
                        background: colorRojo.includes(n) ? "#c00" : "#222",
                        color: "#fff",
                        borderColor: colorRojo.includes(n) ? "#c00" : "#222"
                      }}
                      onClick={() => handleApostar("numero", n)}
                    >
                      {n}
                    </button>
                  </td>
                ))}
              </tr>
              {/* Segunda fila */}
              <tr>
                {filas[1].map(n => (
                  <td key={n}>
                    <button
                      className={`btn btn-sm ${seleccion?.tipo === "numero" && seleccion.valor === n ? "btn-primary" : "btn-outline-primary"}`}
                      style={{
                        background: colorRojo.includes(n) ? "#c00" : "#222",
                        color: "#fff",
                        borderColor: colorRojo.includes(n) ? "#c00" : "#222"
                      }}
                      onClick={() => handleApostar("numero", n)}
                    >
                      {n}
                    </button>
                  </td>
                ))}
              </tr>
              {/* Tercera fila */}
              <tr>
                {filas[2].map(n => (
                  <td key={n}>
                    <button
                      className={`btn btn-sm ${seleccion?.tipo === "numero" && seleccion.valor === n ? "btn-primary" : "btn-outline-primary"}`}
                      style={{
                        background: colorRojo.includes(n) ? "#c00" : "#222",
                        color: "#fff",
                        borderColor: colorRojo.includes(n) ? "#c00" : "#222"
                      }}
                      onClick={() => handleApostar("numero", n)}
                    >
                      {n}
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        {/* Opciones externas */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
          <button
            className={`btn ${seleccion?.tipo === "color" && seleccion.valor === "rojo" ? "btn-danger" : "btn-outline-danger"}`}
            onClick={() => handleApostar("color", "rojo")}
          >
            Rojo
          </button>
          <button
            className={`btn ${seleccion?.tipo === "color" && seleccion.valor === "negro" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => handleApostar("color", "negro")}
          >
            Negro
          </button>
          <button
            className={`btn ${seleccion?.tipo === "paridad" && seleccion.valor === "par" ? "btn-success" : "btn-outline-success"}`}
            onClick={() => handleApostar("paridad", "par")}
          >
            Par
          </button>
          <button
            className={`btn ${seleccion?.tipo === "paridad" && seleccion.valor === "impar" ? "btn-success" : "btn-outline-success"}`}
            onClick={() => handleApostar("paridad", "impar")}
          >
            Impar
          </button>
          <button
            className={`btn ${seleccion?.tipo === "rango" && seleccion.valor === "bajo" ? "btn-info" : "btn-outline-info"}`}
            onClick={() => handleApostar("rango", "bajo")}
          >
            1-18
          </button>
          <button
            className={`btn ${seleccion?.tipo === "rango" && seleccion.valor === "alto" ? "btn-info" : "btn-outline-info"}`}
            onClick={() => handleApostar("rango", "alto")}
          >
            19-36
          </button>
          <button
            className={`btn ${seleccion?.tipo === "docena" && seleccion.valor === 1 ? "btn-secondary" : "btn-outline-secondary"}`}
            onClick={() => handleApostar("docena", 1)}
          >
            1ra Docena (1-12)
          </button>
          <button
            className={`btn ${seleccion?.tipo === "docena" && seleccion.valor === 2 ? "btn-secondary" : "btn-outline-secondary"}`}
            onClick={() => handleApostar("docena", 2)}
          >
            2da Docena (13-24)
          </button>
          <button
            className={`btn ${seleccion?.tipo === "docena" && seleccion.valor === 3 ? "btn-secondary" : "btn-outline-secondary"}`}
            onClick={() => handleApostar("docena", 3)}
          >
            3ra Docena (25-36)
          </button>
        </div>
      </div>
      {seleccion && (
        <div className="alert alert-info mt-3">
          Seleccionaste: <b>{JSON.stringify(seleccion)}</b>
        </div>
      )}
    </div>
  );
}

export default RuletaOpciones;