import {createContext, useEffect, useState} from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [selectedTheme, setSelectedTheme,] = useState('light');
    console.log("ThemeContext se inicializo con:", selectedTheme)

    useEffect(() => {
      if(selectedTheme==='dark'){
        document.querySelector('#back').classList.add('dark')
      }else{
        document.querySelector('#back').classList.remove('dark')
      }
    }, [selectedTheme]);
    
  
    return (
      <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };