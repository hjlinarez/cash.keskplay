import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {

    const [user, setUser]  = useState({});    
    const [token, setToken] = useState(null);
    useEffect(() => {
        setToken(localStorage.getItem("token"))
    }, [])
    const [loading, setLoading] = useState(true); // Estado de carga
    const navigate = useNavigate();
    const urlApi = "https://api.keskplay.com/api";

    localStorage.token
    

    useEffect(() => {
        
        if (token) {
            fetch(`${urlApi}/user`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.json())
                .then((response) => {
                    if (response) {
                        let userlocal = {
                            "name":response.name,                             
                            "parametros_keno": { 
                                            "pagos": response.pagos,
                                            "apuesta_minima": response.apuesta_minima,
                                            "apuesta_maxima": response.apuesta_maxima,
                                            "font": response.font,
                                        }
                            };
                        setUser(userlocal);
                        localStorage.setItem("user", JSON.stringify(userlocal));
                        navigate("/keno");
                
                    }else {
                        //logout();
                    }
                        })
                
                .finally(() => {setLoading(false)})

                
                 // Finaliza la carga
        }
        else {
            setLoading(false);
        }
    }, [token]);





    const validarlogin = () => {
        

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
        
        .then((response) => {
            
            if (response.success){
                
                localStorage.setItem('token', response.data.user.jwt);
                setToken(response.data.user.jwt);
                
                //setUser(local_user);
                
                
                
            }
            else 
            {          
            //swal("Disculpe",response.message,"error");
            setMessage(response.message);
            }
            
            
        } )
        .catch((error) => { swal("Disculpe","Fallo en la conexion","error"); console.error(error); setLoading(false); });

    };





    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };


    if (loading) {
        return <div>Cargando...</div>; // Muestra un indicador de carga mientras se valida el token
    }


    return (
        <UserContext.Provider value={{ user, token, validarlogin, logout, urlApi }}>
            {children}
        </UserContext.Provider>
    );
};