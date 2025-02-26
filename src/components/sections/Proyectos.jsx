import { motion } from "framer-motion";
import datos from "../../mocks/datos.json";
import { LanguageContext } from "../../context/LanguageProvider";
import { useContext, useState } from "react";
import Modal from "react-modal";

//Validar que existan los datos con dats?():()
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "400px",
    borderRadius: "12px",
    border: "4px solid #000",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export const Proyectos = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const projects = datos[selectedLanguage].projects;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
      <motion.main
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="h-full"
      >
        {/* Botones de filtrado */}
        <div className="flex flex-row overflow-x-auto md:overflow-hidden text-lg justify-start gap-4 p-4 pl-6  md:justify-evenly w-full h-auto md:h-[8%]">
          {projects.categories.map((filter) => (
            <button
              key={filter}
              className="flex-shrink-0 w-40 p-2 md:p-5 flex items-center justify-center border-4 rounded-full shadow-retro hover:bg-salmon bg-secondary border-primary text-primary 
                         dark:bg-primary dark:border-secondary dark:text-secondary dark:shadow-retroDark"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Lista de proyectos */}
        <section className="h-[92%] overflow-y-auto pb-4  md:p-4 overflow-x-hidden">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center">
            {projects.content.map((datos) => (
              <li
                key={datos.id}
                className="w-[92%] md:h-[560px] m-0 font-body text-2xl border-4 border-secondary rounded-2xl shadow-retro 
                            dark:border-primary dark:shadow-retroDark"
              >
                {/* Header del proyecto */}
                <header className="flex items-center justify-between p-5 border-b-4 gap-5 h-10 border-secondary dark:border-primary">
                  <div className="text-center whitespace-nowrap">{datos.name}</div>
                  <div className="hidden md:flex border-4 w-4xl rounded-full"></div>
                  <div className="hidden md:flex gap-4">
                    <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary"></div>
                  </div>
                </header>

                {/* Imagen del proyecto */}
                <section className="flex flex-col">
                  <img
                    src={datos.image}
                    alt="BCIE"
                    className="h-[190px] object-cover border-b-4 border-secondary dark:border-primary"
                  />

                  {/* Categoría y tecnologías */}
                  <div className="flex flex-col">
                    <div className="flex flex-col items-center  md:flex-row md:justify-center gap-x-5 p-2">
                      <div className="text-center w-35 mb-2 md: mb-0 md:inline-block px-4 py-2 rounded-full text-primary bg-secondary dark:bg-primary dark:text-secondary">
                        <span>{datos.category}</span>
                      </div>
                      <ul className="flex">
                        {datos.tecs.map((tecs) => (
                          <li
                            key={tecs.idTec}
                            className="flex justify-center items-center w-12 h-12 rounded-full mr-1 text-primary bg-secondary dark:bg-primary dark:text-secondary"
                          >
                            <i className={`${tecs.icon} fa-sm`}></i>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Descripción del proyecto */}
                    <p className="hidden md:flex h-[172px] p-4 text-xl">{datos.description}</p>

                    {/* Enlaces del proyecto */}
                    <div className="hidden md:flex justify-center gap-3 text-lg">
                      {datos.links.map((link) => (
                        <a href={link.url} target="_blank" key={link.web}>
                          <button
                            className="w-45 px-2 py-2 cursor-pointer shadow-retro rounded-full bg-secondary border-4 border-primary text-primary 
                                     hover:bg-salmon hover:text-primary dark:bg-primary dark:border-secondary dark:text-secondary dark:shadow-retroDark"
                          >
                            <span className="whitespace-nowrap">{link.web}</span>
                          </button>
                        </a>
                      ))}
                    </div>

                    {/* Botón  solo en móviles */}
                    <div className="md:hidden flex justify-center p-4">
                      <button
                        onClick={() => openModal(datos)}
                        className="w-full mt-4 px-4 py-2 cursor-pointer shadow-retro rounded-full bg-primary border-4 border-secondary text-secondary 
                         hover:bg-salmon hover:text-primary dark:bg-secondary dark:border-primary dark:text-primary dark:shadow-retroDark"
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
      >
        {selectedProject && (
          <>
            <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
            <p className="text-base mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {selectedProject.links.map((link) => (
                <a href={link.url} target="_blank" key={link.web}>
                  <button
                    className="w-40 px-4 py-2 cursor-pointer shadow-retro rounded-full bg-secondary border-4 border-primary text-primary 
                               hover:bg-salmon hover:text-primary dark:bg-primary dark:border-secondary dark:text-secondary dark:shadow-retroDark"
                  >
                    <span className="whitespace-nowrap">{link.web}</span>
                  </button>
                </a>
              ))}
            </div>
            <button
              onClick={closeModal}
              className="w-full mt-4 px-4 py-2 cursor-pointer shadow-retro rounded-full bg-primary border-4 border-secondary text-secondary 
                         hover:bg-salmon hover:text-primary dark:bg-secondary dark:border-primary dark:text-primary dark:shadow-retroDark"
            >
              {selectedLanguage==='ES'?'Cerrar':'Close'}
            </button>
          </>
        )}
      </Modal>
    </>
  );
};