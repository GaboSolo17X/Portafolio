import { NavLink } from "react-router";
import español from "/images/languages/spainFlag.svg";
import ingles from "/images/languages/usaFlag.svg";
import { Toggle } from "./toggle";
import { useContext} from "react";
import { TitleContext } from "../../context/TitleProvider";
import { LanguageContext } from "../../context/LanguageProvider";
import { ThemeContext } from "../../context/ThemeProvider";

// fixed left-4 top-1/2 -translate-y-1/2
//flex justify-center w-[500px]
export const SideBar = () => {
 const{selectedLanguage}=useContext(LanguageContext)
 const {setSelectedTitle} = useContext(TitleContext)
 const {selectedTheme}=useContext(ThemeContext)

 

 //Pasar esto luego a un JSON
  const texts = {
    ES: {
      about: "Sobre Mi",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      education: "Estudios",
      art: "Arte",
      toggleLanguage: "Cambiar idioma",
    },
    EN: {
      about: "About Me",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      art: "Art",
      toggleLanguage: "Switch Language",
    },
  };

  const idiom = texts[selectedLanguage]



  return (
    <aside className="hidden lg:flex flex-col items-center w-64 dark:text-primary">
      <div
        className="fixed top-1/2 -translate-y-1/2 h-[580px] w-16
                  border-4 border-secondary rounded-full
                  shadow-retro p-1 
                  dark:border-primary dark:shadow-retroDark"
      >
        <section className="flex flex-col flex-wrap items-center h-[400px] place-content-evenly">
          <NavLink
            to={"/sobre-mi"}
            className={({ isActive }) => (isActive ? "linkActivo" : "")}
            onClick={()=>setSelectedTitle(idiom.about)}
          >
            <span className="inline-block p-2 sideBarIcon">
              <i className="fa-solid fa-user fa-xl group ">
                <p className="tooltip scale-0 group-hover:scale-100 ">
                {idiom.about}
                </p>
              </i>
            </span>
          </NavLink>

          <NavLink
            to={"/experiencia"}
            className={({ isActive }) => (isActive ? "linkActivo" : "")}
            onClick={()=>setSelectedTitle("Experiencia")}
          >
            <span className="inline-block p-2 sideBarIcon">
              <i className="fa-solid fa-briefcase fa-xl group">
                <p className="tooltip scale-0 group-hover:scale-100">{idiom.experience}</p>
              </i>
            </span>
          </NavLink>

          <NavLink
            to={"/proyectos"}
            className={({ isActive }) => (isActive ? "linkActivo" : "")}
            onClick={()=>setSelectedTitle("Proyectos")}
          >
            <span className="inline-block p-2 sideBarIcon">
              <i className="fa-solid fa-folder fa-xl group">
                <p className="tooltip scale-0 group-hover:scale-100">{idiom.projects}</p>
              </i>
            </span>
          </NavLink>

          <NavLink
            to={"/habilidades"}
            className={({ isActive }) => (isActive ? "linkActivo" : "")}
            onClick={()=>setSelectedTitle("Habilidades")}
          >
            <span className="inline-block p-2 sideBarIcon">
              <i className="fa-solid fa-laptop-code fa-xl group">
                <p className="tooltip scale-0 group-hover:scale-100">{idiom.skills}</p>
              </i>
            </span>
          </NavLink>

          <NavLink
            to={"/educacion"}
            className={({ isActive }) => (isActive ? "linkActivo" : "")}
            onClick={()=>setSelectedTitle("Educacion")}
          >
            <span className="inline-block p-2 sideBarIcon">
              <i className="fa-solid fa-graduation-cap fa-xl group">
                <p className="tooltip scale-0 group-hover:scale-100">{idiom.education}</p>
              </i>
            </span>
          </NavLink>

          <NavLink
            to={"/arte"}
            className={({ isActive }) => (isActive ? "linkActivoArte" : "")}
            onClick={()=>setSelectedTitle("Arte")}
          >
            <span className="inline-block p-2 sideBarIconArt">
              <i className="fa-solid fa-palette fa-xl group">
                <p className="tooltip scale-0 group-hover:scale-100">{idiom.art}</p>
              </i>
            </span>
          </NavLink>
        </section>

        <section className="flex flex-col items-center mt-6">
          <img src={selectedLanguage==='ES'?español:ingles} alt="Spain Flag" className="mb-1 w-9" />
          <Toggle type="language" />

          <i className={`fa-solid ${selectedTheme==="light"?"fa-solid fa-sun":"fa-solid fa-moon"} fa-xl mt-5 mb-4`}></i>
          <Toggle type="mode" />
        </section>
      </div>
    </aside>
  );
};
