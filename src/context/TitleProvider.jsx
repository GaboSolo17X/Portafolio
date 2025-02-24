import {createContext, useState} from 'react';

//Creando Context
export const TitleContext = createContext()

//Creando Provider
export const TitleProvider = ({ children }) => {
    const [selectedTitle, setSelectedTitle,] = useState("Sobre-Mi");
    console.log("TitleContext se inicializo con:", selectedTitle)

  
    return (
      <TitleContext.Provider value={{ selectedTitle, setSelectedTitle }}>
        {children}
      </TitleContext.Provider>
    );
  };