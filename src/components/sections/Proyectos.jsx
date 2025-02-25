import { motion } from "framer-motion";
import datos from "../../mocks/datos.json";
import { LanguageContext } from "../../context/LanguageProvider";
import { useContext } from "react";


//Validar que existan los datos con dats?():()
export const Proyectos = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const projects = datos[selectedLanguage].projects;
  console.log(projects.content[0].tecs);
  return (
    <>
      <motion.main
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="h-full"
      >
        <div className="flex justify-evenly w-full h-[8%]">
          <button
            className="w-40 p-5 border-4 rounded-full shadow-retro hover:bg-salmon bg-secondary border-primary  text-primary 
                           dark:bg-primary dark:border-secondary dark:text-secondary dark:shadow-retroDark"
          >
            Todos
          </button>
          <button
            className="w-40 p-5 border-4 rounded-full shadow-retro hover:bg-salmon bg-secondary border-primary  text-primary 
                           dark:bg-primary dark:border-secondary dark:text-secondary dark:shadow-retroDark"
          >
            Full-Stack
          </button>
          <button
            className="w-40 p-5 border-4 rounded-full shadow-retro hover:bg-salmon bg-secondary border-primary  text-primary 
                           dark:bg-primary dark:border-secondary dark:text-secondary dark:shadow-retroDark"
          >
            Frontend
          </button>
          <button
            className="w-40 p-5 border-4 rounded-full shadow-retro hover:bg-salmon bg-secondary border-primary  text-primary 
                           dark:bg-primary dark:border-secondary dark:text-secondary dark:shadow-retroDark"
          >
            Backend
          </button>
          <button
            className="w-40 p-5 border-4 rounded-full shadow-retro hover:bg-salmon bg-secondary border-primary  text-primary 
                           dark:bg-primary dark:border-secondary dark:text-secondary dark:shadow-retroDark"
          >
            UI/UX
          </button>
          <button
            className="w-40 p-5 border-4 rounded-full shadow-retro hover:bg-salmon bg-secondary border-primary  text-primary 
                           dark:bg-primary dark:border-secondary dark:text-secondary dark:shadow-retroDark"
          >
            BI
          </button>
        </div>

        <section className="h-[92%">
          <ul className="h-full grid grid-cols-2 justify-center p-4 space-y-6">
            {projects.content.map((datos) => (
              <li
                key={datos.id}
                className=" w-[90%] h-[560px] font-body text-2xl border-4  border-secondary rounded-2xl shadow-retro 
                                dark:border-primary dark:shadow-retroDark"
              >
                <header className=" flex items-center justify-between p-5 border-b-4 gap-5  h-10 border-secondary dark:border-primary ">
                  <span>{datos.name}</span>
                  <div className="border-4 w-4xl rounded-full"> </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                  </div>
                </header>
                <section className="flex flex-col">
                  <img
                    src={datos.image}
                    alt="BCIE"
                    className="h-[190px]  border-b-4 border-secondary dark:border-primary"
                  />
                  <div className="flex flex-col ">
                    <div className="flex justify-center gap-x-5 p-2">
                      <div className="inline-block px-4 py-2 rounded-full text-primary bg-secondary dark:bg-primary dark:text-secondary">
                        <span>{datos.category}</span>
                      </div>
                      <ul>
                        {datos.tecs.map((tecs) => (
                          <li
                            key={tecs.idTec}
                            className="flex justify-center items-center w-12 h-12 rounded-full mr-1 text-primary  bg-secondary dark:bg-primary dark:text-secondary"
                          >
                            <i className={`${tecs.icon} fa-sm`}></i>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="p-4">{datos.description}</p>
                    <div className="flex justify-center gap-4">
                      {datos.links.map((link) => (
                        <a href={link.url} target="_blank" key={link.web}>
                          <button
                            
                            className="w-40 px-4 py-2 mr-3 cursor-pointer shadow-retro rounded-full bg-secondary border-4 border-primary text-primary 
                                 hover:bg-salmon hover:text-primary dark:bg-primary dark:border-secondary dark:text-secondary dark:shadow-retroDark"
                          >
                            <span>{link.web}</span>
                          </button>
                        </a>
                      ))}
                    </div>
                  </div>
                </section>
              </li>
            ))}
          </ul>
        </section>
      </motion.main>
    </>
  );
};
