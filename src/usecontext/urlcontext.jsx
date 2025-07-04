import { createContext, useState } from "react";
export const UrlContext = createContext();
export const UrlProvider = ({ children }) => {
    
    const urlApi  = "https://api.keskplay.com/api";    
    return (
        <UrlContext.Provider value={{ urlApi }}>
            {children}
        </UrlContext.Provider>
    );
};