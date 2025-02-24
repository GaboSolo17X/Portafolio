import {createContext, useState} from 'react';

//Creating Context
export const LanguageContext = createContext()

//Creating Provider
export const LanguageProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage,] = useState('ES');
    console.log("LanguageContext se inicializo con:", selectedLanguage)

    
  
    return (
      <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
  };