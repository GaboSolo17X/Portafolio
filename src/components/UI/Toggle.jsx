import { useContext, useEffect, useState } from "react"
import { LanguageContext } from "../../context/LanguageProvider";
import { ThemeContext } from "../../context/ThemeProvider";


export const Toggle = ({type}) => {
const [toggle, setToggle] = useState(false);


const {selectedLanguage, setSelectedLanguage} = useContext(LanguageContext)
const {selectedTheme,setSelectedTheme} = useContext(ThemeContext);


const toggleMode=()=>{
    setToggle(!toggle);
    setSelectedTheme((prev)=>(prev==='light'?'dark':'light'))
    console.log(selectedTheme)

}

const toggleLanguage=()=>{
    setToggle(!toggle);
    setSelectedLanguage((prev)=>(prev==='ES'?'EN':'ES'))
    console.log(selectedLanguage)


}

useEffect(() => {
    console.log("El idioma cambió a:", selectedLanguage);
  }, [selectedLanguage]);



  return (
    <div>
        <button 
            className={`toggle-btn  ${toggle ? "toggled" :"" }`}
            onClick={type==="mode"?toggleMode:toggleLanguage}
        >
            <div className="thumb">

            </div>
        </button>
    </div>
  )
}
