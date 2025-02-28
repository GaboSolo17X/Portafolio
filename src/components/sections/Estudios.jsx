import datos from "../../mocks/datos.json";
import { LanguageContext } from "../../context/LanguageProvider";
import { useContext } from "react";
import { motion } from "framer-motion";


//Validar que existan los datos con dats?():()
export const Estudios = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const education = datos[selectedLanguage].education.content;
 
  const degree = education[0];
  const certificates = education[1];
  const idioms = education[2];

  return (
    <>
    {education ? (
        <motion.main
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
           <section className="flex mb-15 lg:mb-5">
            <ul className="w-full h-full space-y-4">
              {degree.info.map((datos) => (
                <li
                  key={datos.id}
                  className="font-body border-4 rounded-2xl shadow-retro lg:border-3 border-secondary dark:border-primary dark:shadow-retroDark"
                >
                  {/* Header con fecha y círculos decorativos */}
                  <header className="flex items-center justify-between p-4 gap-4 h-8 border-b-4 md:p-6 lg:p-2 lg:border-b-3 border-secondary dark:border-primary">
                    <span className="whitespace-nowrap font-bold">
                      {datos.year}
                    </span>
                    <div className="hidden sm:flex border-4 rounded-full w-4xl lg:border-3"></div>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 bg-secondary rounded-full md:w-5 md:h-5 ml-auto dark:bg-primary"></div>
                      <div className="hidden md:flex w-6 h-6 bg-secondary rounded-full md:w-5 md:h-5 ml-auto dark:bg-primary"></div>
                      <div className="hidden md:flex w-6 h-6 bg-secondary rounded-full md:w-5 md:h-5 ml-auto dark:bg-primary"></div>
                    </div>
                  </header>
    
                  {/* Sección de imagen y texto */}
                  <section className="flex flex-col justify-center md:flex-row p-4 md:p-6">
                    <img
                      src={datos.logo}
                      alt={datos.institution}
                      loading="lazy"
                      className="w-20 h-20 mx-auto border-4 rounded-2xl md:w-21 md:h-21 md:mx-0 md:mr-3 lg:w-15 lg:h-15 lg:border-3 border-secondary"
                    />
                    <div className="flex flex-col justify-center mt-4 text-center md:text-left md:mt-0">
                      <h1 className="text-xl font-bold md:text-2xl lg:text-lg">
                        {datos.degree}
                      </h1>
                      <span className="text-lg md:text-xl lg:text-base">
                        {datos.institution}
                      </span>
                      <div className="inline-block md:hidden mt-auto text-sm bg-secondary text-primary px-3 py-1 rounded-full dark:bg-primary dark:text-secondary">
                        {datos.status}
                      </div>
                    </div>
    
                    {/* Estado (más pequeño en pantallas grandes) */}
                    <div className="hidden md:inline-block ml-auto mt-auto text-sm bg-secondary text-primary px-3 py-1 rounded-full dark:bg-primary dark:text-secondary">
                      {datos.status}
                    </div>
                  </section>
                </li>
              ))}
            </ul>
          </section>
    
          {/* Sección de certificados */}
          <section className="mb-15 lg:mb-5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-title mb-1">
              {certificates.category}
            </h1>
            <ul>
              {certificates.info.map((datos) => (
                <li
                  key={datos.id}
                  className="border-4 w-full md:w-[500px] rounded-2xl shadow-retro lg:border-3 lg:w-[400px] border-secondary dark:border-primary dark:shadow-retroDark"
                >
                  {/* Header con fecha y círculos decorativos */}
                  <header className="flex items-center justify-between p-4 gap-4 h-8 border-b-4 md:p-6 lg:p-2 lg:border-b-3 border-secondary dark:border-primary">
                    <span className="whitespace-nowrap font-bold">
                      {datos.year}
                    </span>
                    <div className="hidden sm:flex border-4 rounded-full w-4xl lg:border-3"></div>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 bg-secondary rounded-full md:w-5 md:h-5 ml-auto dark:bg-primary"></div>
                      <div className="hidden md:flex w-6 h-6 bg-secondary rounded-full md:w-5 md:h-5 ml-auto dark:bg-primary"></div>
                      <div className="hidden md:flex w-6 h-6 bg-secondary rounded-full md:w-5 md:h-5 ml-auto dark:bg-primary"></div>
                    </div>
                  </header>
    
                  {/* Sección de imagen y texto */}
                  <section className="flex flex-col p-4 md:flex-row md:p-6 lg:p-4">
                    <img
                      src={datos.logo}
                      alt={datos.institution}
                      loading="lazy"
                      className="w-20 h-20 mx-auto border-4 rounded-2xl md:w-21 md:h-21 md:mx-0 md:mr-3 lg:w-15 lg:h-15 lg:border-3 border-secondary"
                    />
                    <div className="flex flex-col justify-center mt-4 text-center md:text-left md:mt-0">
                      <h1 className="text-xl font-bold md:text-2xl lg:text-lg">
                        {datos.title}
                      </h1>
                      <span className="text-lg md:text-xl lg:text-base">
                        {datos.institution}
                      </span>
                    </div>
                  </section>
                </li>
              ))}
            </ul>
          </section>
    
          {/* Sección de idiomas */}
          <section className="pb-4 xl:pb-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-title mb-1">
              {idioms.category}
            </h1>
            <ul className="flex flex-wrap  gap-6">
              {" "}
              {/* Cambiamos grid por flex */}
              {idioms.info.map((datos) => (
                <li
                  key={datos.id}
                  className="w-fit font-body border-4 rounded-2xl shadow-retro lg:border-3 border-secondary dark:border-primary dark:shadow-retroDark"
                >
                  <header className="flex items-center justify-between p-4 gap-4 h-8 border-b-4 md:p-6 lg:p-2 lg:border-b-3 border-secondary dark:border-primary">
                    <div className="w-6 h-6 bg-secondary rounded-full md:w-5 md:h-5 ml-auto dark:bg-primary"></div>
                  </header>
                  <section className="flex flex-col items-center p-4 gap-2 sm:flex-row sm:p-6 lg:p-4">
                    <img
                      src={datos.flag}
                      alt={datos.idiom}
                      loading="lazy"
                      className="w-17 h-17 mx-auto border-4 rounded-2xl md:w-21 md:h-21 md:mx-0 md:mr-3 lg:w-13 lg:h-13 lg:border-3 border-secondary"
                    />
                    <div className="flex flex-col justify-center mt-4 text-center sm:text-left md:mt-0">
                      <h1 className="text-xl font-bold md:text-2xl lg:text-lg">
                        {datos.idiom}
                      </h1>
                      <span className="text-lg md:text-xl lg:text-base">
                        {datos.detail}
                      </span>
                    </div>
                  </section>
                </li>
              ))}
            </ul>
          </section>
        </motion.main>
         
      ) : (
        <p>No hay datos</p>
      )}
    
    </>
  );
};
