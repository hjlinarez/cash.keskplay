import { createContext, useState } from "react";
export const GalgosContext = createContext();
export const GalgosProvider = ({ children }) => {
    
    const [carrera, setCarrera]  = useState([]);    

    return (
        <GalgosContext.Provider value={{ carrera, setCarrera }}>
            {children}
        </GalgosContext.Provider>
    );
};