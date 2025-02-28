import { useContext, useState } from "react"
import { LanguageContext } from "../../context/LanguageProvider";
import { ThemeContext } from "../../context/ThemeProvider";


export const Toggle = ({type}) => {
const [toggle, setToggle] = useState(false);


const {setSelectedLanguage} = useContext(LanguageContext)
const {setSelectedTheme} = useContext(ThemeContext);


const toggleMode=()=>{
    setToggle(!toggle);
    setSelectedTheme((prev)=>(prev==='light'?'dark':'light'))
}

const toggleLanguage=()=>{
    setToggle(!toggle);
    setSelectedLanguage((prev)=>(prev==='ES'?'EN':'ES'))
}


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
