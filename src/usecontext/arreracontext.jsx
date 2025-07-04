import { createContext, useState } from "react";
export const CarreraContext = createContext();
export const CarreraProvider = ({ children }) => {
    
    const [carrera, setCarrera]  = useState([]);    

    return (
        <CarreraContext.Provider value={{ carrera, setCarrera }}>
            {children}
        </CarreraContext.Provider>
    );
};