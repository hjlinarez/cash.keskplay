function Jugadas({jugadas, setJugadas}){

     const eliminarJugada = (index) => {
        setJugadas(jugadas.filter((_, i) => i !== index));
    };

    const limpiarJugadas = () => {
        setJugadas([]); // Vacía el estado jugadas
    };

    const total = jugadas.reduce((sum, jugada) => sum + jugada.monto, 0);



    return(<>
    <div >
            <button type="button" className="btn btn-sm btn-danger mt-2" onClick={limpiarJugadas}>Limpiar Todo</button>

            <table className="table table-striped table-sm" width="100%">                    
            <thead>
            <tr>
                <th>Jugada</th>          
                <th className="text-end">Monto</th>          
            </tr>
            </thead>
            <tbody>                  
                            
      {jugadas.map((jugada, index) => (
        <tr key={index}>
          
          <td>
            <a href="#" className="me-1" onClick={() => eliminarJugada(index)}><i className="fa-solid fa-trash"></i></a>{jugada.jugada } ({jugada.logro}) 
        </td>
          <td className="text-end">{jugada.monto.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
          
        </tr>
      ))}
      </tbody>
    <tfoot>
        <tr>
            <th>
                Total
            </th>
            <th className="text-end">
            {total.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </th>
        </tr>
    </tfoot>

</table>

    </div>
    </>)
}

export default Jugadas;
