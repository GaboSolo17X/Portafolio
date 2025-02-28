import { motion } from "framer-motion";
import datos from "../../mocks/datos.json";
import { LanguageContext } from "../../context/LanguageProvider";
import { useContext, useState } from "react";
import Modal from "react-modal";
import { useFilters } from "../../hooks/useFilters";

//Validar que existan los datos con dats?():()
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "95%",
    maxWidth: "550px",
    borderRadius: "12px",
    border: "4px solid #F8F7F3",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#252525", // Fondo negro para la modal
    color: "#F8F7F3", // Color de texto primario (blanco en este caso)
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Fondo negro con opacidad
  },
};

export const Proyectos = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const projects = datos[selectedLanguage].projects;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const { selectedFilters, filteredItems, handleFilter } = useFilters(
    projects.content
  );

  // Abrir modal
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Cerrar modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      {projects ? (
        <>
          <motion.main
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full "
          >
            {/* Botones de filtrado */}
            <div className="flex flex-row gap-4 p-4 w-full h-auto overflow-x-auto md:overflow-hidden md:flex-wrap md:justify-center md:gap-6 lg:justify-evenly lg:p-6">
              {projects.categories.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilter(filter)}
                  className={`flex flex-shrink-0 items-center justify-center w-32 p-2 md:w-40 md:p-3 lg:w-36 lg:p-2 border-4 rounded-full shadow-retro lg:border-3 dark:shadow-retroDark bg-secondary border-primary text-primary hover:bg-salmon dark:bg-primary dark:border-secondary dark:text-secondary cursor-pointer transition-all duration-200 ease-in-out ${
                    selectedFilters?.includes(filter) ? "activeFilter" : ""
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Lista de proyectos */}
            <section className="h-auto overflow-y-auto pb-5 md:p-4 overflow-x-hidden lg:text-xs  lg:mx-auto ">
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center">
                {filteredItems.map((datos) => (
                  <li
                    key={datos.id}
                    className="w-[92%] md:h-auto m-0 font-body text-2xl border-4  lg:border-3 lg:w-[97%] lg:text-sm border-secondary rounded-2xl shadow-retro dark:border-primary dark:shadow-retroDark"
                  >
                    {/* Header del proyecto */}
                    <header className="flex items-center text-xs sm:text-base justify-center md:justify-between p-5 border-b-4 lg:border-b-3 gap-5 h-10 border-secondary dark:border-primary">
                      <div className="text-center whitespace-nowrap">
                        {datos.name}
                      </div>
                      <div className="hidden md:flex border-4 w-4xl lg:border-3 rounded-full">
                        {" "}
                      </div>
                      <div className="flex gap-4">
                        <div className="hidden w-8 h-8 md:w-5 md:h-5 ml-auto md:flex bg-secondary rounded-full dark:bg-primary "></div>
                      </div>
                    </header>

                    {/* Imagen del proyecto */}
                    <section className="flex flex-col">
                      <img
                        src={datos.image}
                        loading="lazy"
                        alt={datos.name}
                        className="h-[190px] lg:h-[150px] object-cover border-b-4 lg:border-b-3 border-secondary dark:border-primary"
                      />

                      {/* Categoría y tecnologías */}
                      <div className="flex flex-col p-2">
                        <div className="flex flex-col items-center md:flex-row md:justify-center gap-x-5 ">
                          <div className="text-center w-35 lg:w-25 mb-2 md:mb-0 md:inline-block px-4 py-2 rounded-full text-primary bg-secondary dark:bg-primary dark:text-secondary">
                            <span>{datos.category}</span>
                          </div>
                          <ul className="flex">
                            {datos.tecs.map((tecs) => (
                              <li
                                key={tecs.idTec}
                                className="flex justify-center items-center w-12 h-12 lg:w-8 lg:h-8 lg:text-lg rounded-full mr-1 group cursor-pointer text-primary bg-secondary dark:bg-primary dark:text-secondary relative"
                              >
                                <i className={`${tecs.icon} fa-sm`}></i>
                                <p className="absolute top-9 mb-2 scale-0 group-hover:scale-100 text-xs px-2 py-1 rounded whitespace-nowrap text-primary bg-secondary dark:bg-primary dark:text-secondary">
                                  {tecs.tec}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Descripción del proyecto */}
                        <p className="hidden xl:flex max-h-[80%] lg: p-4 text-xl lg:text-xs lg:h-[100px] lg:pt-2 break-words whitespace-pre-line">
                          {datos.description}
                        </p>

                        {/* Enlaces del proyecto */}
                        <div className="hidden xl:flex justify-center gap-3 text-lg lg:text-xs lg:gap-2">
                          {datos.links.map((link) => (
                            <a href={link.url} target="_blank" key={link.web}>
                              <button className="w-45 px-2 py-2 lg:py-2 lg:px-1 lg:w-36 cursor-pointer shadow-retro rounded-full bg-secondary border-4 lg:border-3 border-primary text-primary hover:bg-salmon hover:text-primary dark:bg-primary dark:border-secondary dark:text-secondary dark:shadow-retroDark">
                                <span className="whitespace-nowrap">
                                  {link.web}
                                </span>
                              </button>
                            </a>
                          ))}
                        </div>

                        {/* Botón solo en móviles */}
                        <div className="xl:hidden flex justify-center p-4">
                          <button
                            onClick={() => openModal(datos)}
                            className="w-full mt-4 px-4 py-2 cursor-pointer shadow-retro rounded-full bg-primary border-4 lg:border-3 border-secondary text-secondary hover:bg-salmon hover:text-primary dark:bg-secondary dark:border-primary dark:text-primary dark:shadow-retroDark"
                          >
                            Info
                          </button>
                        </div>
                      </div>
                    </section>
                  </li>
                ))}
              </ul>
            </section>
          </motion.main>

          {/* Modal */}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Detalles del Proyecto"
            ariaHideApp={false}
          >
            {selectedProject && (
              <>
                <header className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold mb-4">
                    {selectedProject.name}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 rounded-full bg-salmon flex items-center justify-center"
                  >
                    <i className="fa-solid fa-x"></i>
                  </button>
                </header>

                <p className="text-base mb-4">{selectedProject.description}</p>
                <p className="font-bold">
                  {selectedLanguage === "ES"
                    ? "Tecnologias o herramientas"
                    : "Tecs or Tools"}
                </p>
                <ul className="flex flex-col mb-5">
                  {selectedProject.tecs.map((tecs) => (
                    <li key={tecs.idTec} className="flex mr-1">
                      <p className="">{tecs.tec}</p>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap justify-center gap-3">
                  {selectedProject.links.map((link) => (
                    <a href={link.url} target="_blank" key={link.web}>
                      <button
                        className="w-40 px-4 py-2 cursor-pointer rounded-full bg-primary border-4 lg:border-3 border-secondary text-secondary shadow-retroDark
                               hover:bg-salmon hover:text-primary dark:bg-primar"
                      >
                        <span className="whitespace-nowrap">{link.web}</span>
                      </button>
                    </a>
                  ))}
                </div>
              </>
            )}
          </Modal>
        </>
      ) : (
        <p>No hay datos</p>
      )}
    </>
  );
};
