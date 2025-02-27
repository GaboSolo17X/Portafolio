import { Suspense, useContext } from "react";
import { TitleContext } from "../../context/TitleProvider";
import { Outlet } from "react-router";
import { MobileNav } from "./MobileNav";

export const Content = ({ toggleSidebar }) => {
  const { selectedTitle } = useContext(TitleContext);
  //flex content-center w-screen p-3
  return (
    <main className="flex flex-auto flex-col items-center p-2 overflow-auto ">
      <div
        className="w-full h-full border-4 border-secondary rounded-2xl xl:w-[1250px]
                        3xl:w-[1500px] dark:border-primary"
      >
        <header className="flex flex-row justify-between border-b-4 h-20 p-5">
          <div>
            <MobileNav toggleSidebar={toggleSidebar} className=" lg:hidden" />
          </div>

          <div className="flex w-[250px] sm:w-[300px] md:w-[500px] h-10 p-1.5 border-4 rounded-lg font-body text-sm md:text-2xl ">
            https://www.
            <span className="flex flex-col justify-center font-title text-xl md:text-5xl">
              {selectedTitle}
            </span>
            .com
          </div>
          <div className="flex gap-4">
            <div className="hidden md:flex w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary"></div>
            <div className="hidden md:flex w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary"></div>
            <div className="hidden md:flex w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary"></div>
          </div>
        </header>
        <section className="p-6 h-[calc(100%-80px)] font-body text-sm text-secondary dark:text-primary overflow-y-auto md:text-2xl">
          <Suspense fallback={<h1>Cargando...</h1>}>
            <Outlet />
          </Suspense>
        </section>
      </div>
    </main>
  );
};
