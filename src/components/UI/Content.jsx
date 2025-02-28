import { Suspense} from "react";
import { Outlet, useLocation } from "react-router";
import { MobileNav } from "./MobileNav";
// lg:max-w-[90%]

export const Content = ({ toggleSidebar }) => {

  const location = useLocation();

  // Función para obtener el título basado en la ruta
  const obtenerTitulo = (path) => {
    switch (path) {
      case "/":
        return "Sobre Mí";
      case "/experiencia":
        return "Experiencia";
      case "/proyectos":
        return "Proyectos";
      case "/habilidades":
        return "Habilidades";
      case "/educacion":
        return "Educación";
      case "/arte":
        return "Arte";
      default:
        return "Sobre Mí";
    }
  };

  const selectedTitle = obtenerTitulo(location.pathname);

  return (
    <main className="flex flex-auto flex-col items-center p-2 overflow-auto">
      <div className="w-full max-w-full  lg:max-w-[1100px] xl:max-w-[1100px] 3xl:max-w-[1500px] h-full border-4 lg:border-3 border-secondary rounded-2xl dark:border-primary">
        {/* Header */}
        <header className="flex flex-row justify-between border-b-4 lg:border-b-3 h-20 p-5">
          <div>
            <MobileNav toggleSidebar={toggleSidebar} className="lg:hidden" />
          </div>

          {/* URL */}
          <div className="flex w-[250px] ml-7 sm:ml-0 sm:w-[300px] md:w-[500px] h-10 p-1.5 border-4 lg:border-3 rounded-lg font-body text-sm md:text-2xl xl:text-lg">
            https://www.
            <span className="flex flex-col justify-center font-title text-xl md:text-5xl xl:text-4xl">
              {selectedTitle}
            </span>
            .com
          </div>

          {/* Círculos decorativos */}
          <div className="md:flex gap-4">
            <div className="hidden md:flex w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary"></div>
            <div className="hidden md:flex w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary"></div>
            <div className="hidden md:flex w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary"></div>
          </div>
        </header>

        {/* Contenido principal */}
        <section className=" p-4 pb-0 md:p-10 md:pt-5 lg:p-4 h-[calc(100%-85px)] lg:h-[calc(100%-85px)] font-body text-sm text-secondary dark:text-primary overflow-y-auto md:text-xl  lg:text-sm 3xl:text-xl scrollStyleDark">
          <Suspense fallback={<h1>Cargando...</h1>}>
            <Outlet />
          </Suspense>
        </section>
      </div>
    </main>
  );
};
