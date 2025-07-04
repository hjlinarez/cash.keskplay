import React, { useEffect, useState} from "react";
import { useAsyncError, useNavigate } from "react-router-dom";

import { userSignal, tokenSignal}  from "../shared/userSignal.jsx"
import { urlApiSignal}  from "../shared/urlApiSignal.jsx"
import { updateSaldoSignal}  from "../shared/updateSaldoSignal.jsx"

function SaldoUser() {
    const navigate = useNavigate();
    const  user = userSignal.value;
    const  urlApi  = urlApiSignal.value;
    const [saldo,   setSaldo] = useState(0);    
    const [moneda, setMoneda]  = useState(null);
    


    const actualizar = (()=>{
        if (!localStorage.getItem("token")) {
            window.location.href = "/login";
        }
        else {
            //let userLocal = JSON.parse(localStorage.getItem("user"));
            
            updateSaldoSignal.value = false;
            if (localStorage.getItem("token")){
                let token = "Bearer " + localStorage.getItem("token");
                fetch(urlApi+'/saldouser', {
                    method: "POST", // or 'PUT'
                    body: JSON.stringify(), // data can be `string` or {object}!
                    headers: {
                      "Accept":"application/json",
                      "Content-Type": "application/json",
                      "Authorization": token
                    },
                  })
                    .then((res) => res.json())                    
                    .then((response) => {
                        //console.log(response)
                        if (response.message == 'Unauthenticated.') {
                            navigate("/login"); 
                        }
                        else {
                            setSaldo(Number(response.data.saldo));    
                            setMoneda(response.data.idmoneda)
                        }
                    } )
                    .catch((error) => console.error("Error:", error));
            }
            else{
                navigate("/login"); 
                
            }    
        }
    })
    
    useEffect(() => {        
        if (updateSaldoSignal.value) {            
            actualizar();              
        }
    }, [updateSaldoSignal.value]);


    useEffect(() => {                
        actualizar();                      
    }, []);




  return (
    <>      
        {user.name}<span className="fw-bold ms-2">({ saldo.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}) { moneda } </span>
    </>
  );
}
export default SaldoUser;