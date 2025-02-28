import { useState } from "react"; // Importa useState
import { Content } from "../components/UI/Content";

import { SideBar } from "../components/UI/SideBar";
import { LanguageProvider } from "../context/LanguageProvider";
import { TitleProvider } from "../context/TitleProvider";
import { ThemeProvider } from "../context/ThemeProvider";

export const PortfolioApp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar la visibilidad del Sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen) // Función para alternar la visibilidad del Sidebar
  };

  return (
    <div
      className={`flex flex-col lg:flex-row h-screen bg-primary  
                   dark:bg-secondary dark:text-primary transition-colors duration-1000`}
      id="back"
    >
      <ThemeProvider>
        <LanguageProvider>
          <TitleProvider>
            {/* Pasa el estado y la función de toggle al Sidebar */}
            <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Content toggleSidebar={toggleSidebar}/>
            {/* Pasa la función de toggle al MobileNav */}
          </TitleProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};
