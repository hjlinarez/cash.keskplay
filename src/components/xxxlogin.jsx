import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';



function login({setUser, urlApi}) {

  const [loading, setLoading]  = useState(false)
  const [message, setMessage]  = useState(null);

  useEffect(()=>{
    $('#modalLogin').on('show.bs.modal', function (event) { 
      
      setMessage("");
      document.getElementById('login').value = "";
      document.getElementById('password').value = "";
      document.getElementById('login').focus();
    })
  },[])

  const validarUser = (()=>{
    setLoading(true);

    
    var data = { login: document.getElementById('login').value, password: document.getElementById('password').value };

    fetch(urlApi+'/login', {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Accept":"application/json",
        "Content-Type": "application/json",

      },
    })
      .then((res) => res.json())
      .catch((error) => { swal("Disculpe","Fallo en la conexion","error"); console.error(error); setLoading(false); })
      .then((response) => {
        
        if (response.success){
          let user = {"name":response.data.user.name, "token": response.data.user.jwt}
          localStorage.setItem('user', JSON.stringify(user));
          let parametros_keno = { 
                            "pagos": response.data.user.pagos,
                            "apuesta_minima": response.data.user.apuesta_minima,
                            "apuesta_maxima": response.data.user.apuesta_maxima,
                            "font": response.data.user.font,
                          };
          setUser({name: response.data.user.name, token: response.data.user.jwt, parametros_keno: parametros_keno})
          $('#modalLogin').modal('hide');          
        }
        else 
        {          
          //swal("Disculpe",response.message,"error");
          setMessage(response.message);
        }
        setLoading(false);
        
      } );

        //
      })
  return (
    <>


    <div className="modal fade" id="modalLogin" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={1} aria-labelledby="modalLoginLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="modalLoginLabel">Ingresar</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                  
                  <form>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Usuario </label>
                      <input type="text" className="form-control" id="login" name="login"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Clave</label>
                      <input type="password" className="form-control" id="password" name="password"/>
                    </div>
                    <button type="button" 
                      className={loading ? 'btn btn-success disabled form-control': 'btn btn-success form-control'}
                      onClick={validarUser}>
                      <div className={ loading ? 'spinner-border' : 'spinner-border visually-hidden'} role="status"></div>
                      {loading ? 'Ingresando...' : 'Ingresar'}
                    </button>
                    <p className="text-danger text-center fs-6 mt-2 fw-bold">{ message }</p>
                  </form>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default login
