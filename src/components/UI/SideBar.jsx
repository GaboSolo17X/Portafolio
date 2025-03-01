import { NavLink } from "react-router";
import español from "/images/languages/spainFlag.svg";
import ingles from "/images/languages/usaFlag.svg";
import { Toggle } from "../UI/Toggle";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import { ThemeContext } from "../../context/ThemeProvider";
import datos from "../../mocks/datos.json";


export const SideBar = ({ isSidebarOpen, toggleSidebar }) => {
  const { selectedLanguage } = useContext(LanguageContext);
  const { selectedTheme } = useContext(ThemeContext);

  const sideBar = datos[selectedLanguage].sidebar;
  // const idiom = texts[selectedLanguage];

  return (
    <>
      <aside
        className={`fixed flex-col h-screen items-center w-full text-xl lg:text-sm lg:flex lg:relative lg:w-32  bg-secondary/80  dark:text-primary
                  lg:bg-primary dark:bg-secondary/75 transition-transform duration-300 ease-in-out z-50 
                  ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                  } lg:translate-x-2`}
      >
        <div
          className="fixed top-8 lg:top-1/2 lg:-translate-y-1/2 h-[180px] lg:h-[420px] w-18 ml-20 border-4 lg:ml-0 lg:w-14
                   lg:border-3  border-secondary rounded-full bg-primary lg:bg-none
                  shadow-retro p-1 
                  dark:border-primary dark:bg-secondary dark:shadow-retroDark"
        >
          <section className="hidden lg:flex lg:flex-col lg:flex-wrap lg:items-center h-[400px] lg:h-[270px] place-content-evenly">
            {sideBar.map((datos, index) => (
              <NavLink
                to={datos.url}
                key={index}
                className={({ isActive }) =>isActive ? datos.url === "arte"? "linkActivoArte": "linkActivo": ""}
                onClick={() => {
                  toggleSidebar();
                }}
              >
                <span className={`inline-block p-2 ${ datos.url === "arte" ? "sideBarIconArt" : "sideBarIcon"} group`}>
                  <i className={`${datos.icon} fa-xl `}></i>
                  <p className="left-28 lg:left-0 tooltip scale-100 lg:scale-0 group-hover:scale-100">
                    {datos.title}
                  </p>
                </span>
              </NavLink>
            ))}
          </section>

          <section className="flex flex-col items-center mt-6 lg:mt-4">
            <img
              src={selectedLanguage === "ES" ? español : ingles}
              alt="Spain Flag"
              loading="lazy"
              className="mb-1 w-9 lg:w-7"
            />
            <Toggle type="language" />
            <i className={`fa-solid ${selectedTheme === "light"? "fa-solid fa-sun": "fa-solid fa-moon"} fa-xl  mt-5 mb-4`}></i>
            <Toggle type="mode" />
          </section>
        </div>
      </aside>


    {/*Navbar Movil */}
      <aside
        className={`fixed bottom-0 w-full lg:hidden text-xl flex dark:text-primary z-50`}
      >
        <div className="flex flex-row w-full justify-between items-center h-20 text-base sm:px-4 md:px-6 sm:text-lg md:text-xl bg-primary border-4 border-secondary rounded-full dark:bg-secondary dark:border-primary ">
          {/* Sección de enlaces */}
          <section className="flex flex-row w-full justify-around items-center">
            {sideBar.map((datos, index) => (
              <NavLink
                to={datos.url}
                key={index}
                className={({ isActive }) => isActive ? datos.url === "arte" ? "linkActivoArte" : "linkActivo" : ""}
              >
                <span className={`inline-block p-2 ${datos.url === "arte" ? "sideBarIconArt" : "sideBarIcon"} group`}>
                  <i className={`${datos.icon} fa-xl`}></i>
                </span>
              </NavLink>
            ))}
          </section>
        </div>
      </aside>
    </>
  );
};
