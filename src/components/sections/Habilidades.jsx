import datos from "../../mocks/datos.json";
import { LanguageContext } from "../../context/LanguageProvider";
import { useContext } from "react";
import { motion } from "framer-motion";

export const Habilidades = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const skills = datos[selectedLanguage].skills;


  return (
    <>
      {skills ? (
        <motion.main
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full p-4  gap-4 grid grid-cols-1 overflow-y-scroll lg:p-5 lg:grid-cols-1 xl:grid-cols-2"
        >
          {/* Categorias de habilidades */}
          {skills.categories.map((datos) => (
            <div
              key={datos.id}
              className="border-4 rounded-2xl shadow-retro lg:border-3 border-secondary dark:border-primary dark:shadow-retroDark"
            >
              {/* Header */}
              <header className="flex items-center p-4 h-12 border-b-4 md:p-6 lg:p-4 lg:h-8 lg:border-b-3 border-secondary dark:border-primary">
                <div className="w-6 h-6 bg-secondary rounded-full md:w-5 md:h-5 dark:bg-primary"></div>
                <span className="flex-1 text-center font-title text-4xl md:text-5xl lg:text-4xl">
                  {datos.name}
                </span>
              </header>

              {/* Lista de habilidades */}
              <ul className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:gap-2 md:p-2 3xl:gap-4">
                {skills.content
                  .filter((skill) => skill.area === datos.name)
                  .map((dato) => (
                    <li
                      key={dato.id}
                      className="flex justify-center items-center h-14 px-4 py-2  rounded-full bg-secondary text-primary sm:text-base md:gap-2 lg:h-8  lg:text-base xl:test-lg 3xl:h-14 3xl:py-6 font-body dark:bg-primary dark:text-secondary"
                    >
                      <i
                        className={`hidden md:flex ${dato.icon} fa-xl mr-3`}
                      ></i>
                      <span>{dato.skill}</span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </motion.main>
      ) : (
        <p>No hay datos</p>
      )}
    </>
  );
};
