import { NavLink } from "react-router";
import español from "/images/languages/spainFlag.svg";
import ingles from "/images/languages/usaFlag.svg";
import { Toggle } from "./toggle";
import { useContext } from "react";
import { TitleContext } from "../../context/TitleProvider";
import { LanguageContext } from "../../context/LanguageProvider";
import { ThemeContext } from "../../context/ThemeProvider";
import datos from "../../mocks/datos.json";

// fixed left-4 top-1/2 -translate-y-1/2
//flex justify-center w-[500px]
export const SideBar = ({ isSidebarOpen, toggleSidebar }) => {
  const { selectedLanguage } = useContext(LanguageContext);
  const { setSelectedTitle } = useContext(TitleContext);
  const { selectedTheme } = useContext(ThemeContext);

  const sideBar = datos[selectedLanguage].sidebar;
  // const idiom = texts[selectedLanguage];

  return (
    <>
      <aside className={`fixed lg:relative lg:flex flex-col h-screen items-center w-full bg-secondary/80 lg:w-64 dark:text-primary
                  lg:bg-primary dark:bg-secondary/75 transition-transform duration-300 ease-in-out z-50 text-xl lg:text-xl
                  ${isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full"} lg:translate-x-0`}>
        <div
          className="fixed top-1/2 -translate-y-1/2 h-[580px] lg:h-[680px] w-18 ml-20 lg:ml-0 lg:w-25
                  border-4 border-secondary rounded-full bg-primary lg:bg-none
                  shadow-retro p-1 
                  dark:border-primary dark:bg-secondary dark:shadow-retroDark"
        >
          <section className="flex flex-col flex-wrap items-center h-[400px] lg:h-[500px] place-content-evenly">
            {sideBar.map((datos,index) => (
              <NavLink
                to={datos.url}
                key={index}
                className={({ isActive }) => (isActive ? datos.url==="arte"? "linkActivoArte": "linkActivo" : "")}
                onClick={() => {setSelectedTitle(datos.title), toggleSidebar()}}
              >
                <span className={`inline-block p-2 ${datos.url==="arte"? "sideBarIconArt":"sideBarIcon"} group`}>
                  <i className={`${datos.icon} fa-xl `}></i>
                  <p className="left-28 lg:left-0 tooltip scale-100 lg:scale-0 group-hover:scale-100">
                    {datos.title}
                  </p>
                </span>
              </NavLink>
            ))}
          </section>

          <section className="flex flex-col items-center mt-6">
            <img
              src={selectedLanguage === "ES" ? español : ingles}
              alt="Spain Flag"
              loading="lazy"
              className="mb-1 w-9 lg:w-11"
            />
            <Toggle type="language" />

            <i
              className={`fa-solid ${
                selectedTheme === "light"
                  ? "fa-solid fa-sun"
                  : "fa-solid fa-moon"
              } fa-xl mt-5 mb-4`}
            ></i>
            <Toggle type="mode" />
          </section>
        </div>
      </aside>

      {/* <Modal
        isOpen={isSidebarOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Detalles del Proyecto"
        ariaHideApp={false}
      >
        {isSidebarOpen && (
          <>
          
          </>
        )}
      </Modal> */}
    </>
  );
};
