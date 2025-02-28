import datos from "../../mocks/datos.json";
import { LanguageContext } from "../../context/LanguageProvider";
import { useContext } from "react";
import { motion } from "framer-motion";

export const SobreMi = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const about = datos[selectedLanguage].about.content;
 

  const messages = {
    ES: "Correo copiado correctamente",
    EN: "Email copied to clipboard!",
  };

  let message = messages[selectedLanguage];

  // Copiar el correo
  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(about.email)
      .then(() => {
        alert(message);
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <>
      {about ? (
        <motion.main
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Sección superior: Imagen y descripción */}
          <section className="flex flex-col sm:flex-row gap-6 items-center lg:gap-10 xl:gap-5">
            {/* Imagen de perfil */}
            <img
              src={about.profilePic}
              alt="Mi foto"
              loading="lazy"
              className="border-4 lg:border-3 border-secondary rounded-2xl shadow-retro 
              dark:border-primary dark:shadow-retroDark w-36  sm:w-[200px] sm:h-[200px] lg:w-[230px] lg:h-auto 
                3xl:w-[400px]"
            />
            {/* Descripción */}
            <div
              className="relative w-full border-4 lg:border-3 border-secondary rounded-2xl shadow-retro 
                 dark:border-primary dark:shadow-retroDark lg:max-w-[90%]"
            >
              <header className=" flex items-center p-5 md:p-2 border-b-4 lg:border-b-3 mb-5 h-10 border-secondary dark:border-primary">
                <div className="w-6 h-6 md:w-5 md:h-5 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
              </header>
              <section className="p-4 pt-0 ">
                {about.description.map((datos, index) => (
                  <div key={index}>
                    <p>
                      {datos.phrase1} <br />
                      <span className="font-title text-4xl md:text-6xl  lg:text-7xl xl:text-8xl  text-salmon">
                        {datos.phrase2}
                      </span>
                    </p>
                    <p>
                      {datos.phrase3}
                      <span className="text-salmon ">{datos.phrase4}</span>
                      {datos.phrase5}
                      <span className="text-salmon">{datos.phrase6}</span>
                    </p>
                  </div>
                ))}

                {/* Botones de contacto */}
                <div className="flex flex-col items-center gap-4 mt-7 md:mt-2 xl:flex-row">
                  <button
                    onClick={handleCopyEmail}
                    className="w-full px-4 py-2 mr-3 xl:inline-block xl:w-auto cursor-pointer bg-salmon rounded-full hover:bg-secondary hover:text-salmon
                             dark:border-primary dark:hover:bg-primary"
                  >
                    <i className="fa-solid fa-envelope fa-lg mr-2"></i>
                    <span>{about.email}</span>
                  </button>
                  <a
                    href={about.cvLink}
                    target="_blank"
                    className="w-full xl:w-auto"
                  >
                    <button
                      className=" w-full px-4 py-2 xl:inline-block xl:w-auto  rounded-full border-4 lg:border-3 cursor-pointer border-secondary hover:bg-secondary hover:text-salmon
                           dark:border-primary dark:hover:bg-primary"
                    >
                      <i className="fa-solid fa-file-pdf fa-lg mr-2"></i>
                      <span>{about.resumeTitle}</span>
                    </button>
                  </a>
                  <div className="flex justify-center lg:flex-none">
                    <a href={about.linkedin} target="_blank">
                      <button className=" w-15 h-15 lg:w-12 lg:h-12 text-2xl md:text-3xl lg:text-xl rounded-full mr-1 cursor-pointer text-primary  bg-secondary dark:bg-primary dark:text-secondary">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </button>
                    </a>

                    <a href={about.github} target="_blank">
                      <button className=" w-15 h-15 lg:w-12 lg:h-12 text-2xl md:text-3xl lg:text-xl rounded-full cursor-pointer text-primary  bg-secondary dark:bg-primary dark:text-secondary">
                        <i className="fa-brands fa-github fa-xl"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </section>

          {/* Sección "Sobre mí" */}
          <section className="mt-5 md:mb-2 lg:mb-0 lg:mt-2 ">
            <h1 className="font-title text-2xl sm:text-3xl lg:text-4xl">
              {about.aboutMeTitle}
            </h1>
            <div className="border-4 lg:border-3 border-secondary rounded-2xl shadow-retro dark:border-primary dark:shadow-retroDark">
              <header className=" flex items-center p-5 md:p-2 border-b-4 lg:border-b-3 h-10 border-secondary dark:border-primary ">
                <div className="w-6 h-6 md:w-5 md:h-5 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
              </header>
              <p className="p-4">{about.aboutMeText}</p>
            </div>
          </section>
          {/* Sección de tecnologías */}
          <section className="mt-8 md:mb-3 lg:mb-0 lg:mt-2 pb-2">
            <h1 className="font-title text-2xl sm:text-3xl lg:text-4xl mb-2">
              {about.prinTextTitle}
            </h1>
            <ul className="flex flex-wrap gap-2">
              {about.tecs.map((tecs) => (
                <li
                  key={tecs.id}
                  className="inline-block bg-secondary text-primary px-4 py-2 rounded-full   
                    dark:bg-primary dark:text-secondary"
                >
                  <i className={`${tecs.icon} fa-lg mr-2`}></i>
                  <span>{tecs.tec}</span>
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
