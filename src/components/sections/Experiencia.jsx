import { useContext } from "react";
import datos from "../../mocks/datos.json";
import { LanguageContext } from "../../context/LanguageProvider";
import { motion } from "framer-motion";

export const Experiencia = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const dataPortafolio = datos[selectedLanguage].experience.content;

  return (
    <>
      {dataPortafolio ? (
        <motion.ul 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="h-full space-y-6">
          {dataPortafolio.map((datos) => (
            <li
              key={datos.id}
              className="font-body border-4 rounded-2xl shadow-retro lg:border-3 border-secondary dark:border-primary dark:shadow-retroDark"
            >
              {/* Header con fecha y círculos decorativos */}
              <header className="flex items-center justify-between p-4 gap-4 h-8 border-b-4 md:p-6 lg:p-2 lg:border-b-3 border-secondary dark:border-primary">
                <span className="whitespace-nowrap font-bold">
                  {datos.date}
                </span>
                <div className="hidden sm:flex border-4 rounded-full w-4xl lg:border-3"></div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-secondary rounded-full md:w-5 md:h-5 ml-auto dark:bg-primary"></div>
                  <div className="hidden md:flex w-8 h-8 bg-secondary rounded-full md:w-5 md:h-5 ml-auto dark:bg-primary"></div>
                  <div className="hidden md:flex w-8 h-8 bg-secondary rounded-full md:w-5 md:h-5 ml-auto dark:bg-primary"></div>
                </div>
              </header>

              {/* Sección de imagen y texto */}
              <section className="flex flex-col p-4 md:flex-row md:p-6 lg:p-4 lg:pb-0">
                <img
                  src={datos.image}
                  alt={datos.alt}
                  loading="lazy"
                  className="w-20 h-20 mx-auto border-4 rounded-2xl md:w-21 md:h-21 md:mx-0 md:mr-3 lg:w-15 lg:h-15 lg:border-3 border-secondary"
                />
                <div className="flex flex-col justify-center mt-4 text-center md:text-left md:mt-0">
                  <h1 className="text-xl font-bold md:text-2xl lg:text-lg">
                    {datos.job}
                  </h1>
                  <span className="text-lg md:text-xl lg:text-base">
                    {datos.company}
                  </span>
                </div>
              </section>

              {/* Descripción */}
              <section className="p-4 md:p-6 lg:p-4">
                <p className="break-words whitespace-pre-line">
                  {datos.description}
                </p>
              </section>
            </li>
          ))}
        </motion.ul>
      ) : (
        <p>No hay datos</p>
      )}
    </>
  );
};
