import datos from "../../mocks/datos.json";
import { LanguageContext } from "../../context/LanguageProvider";
import { useContext } from "react";

export const Arte = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const art = datos[selectedLanguage].art.content;
  console.log(art);

  // Copy the email to the clipboard
  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(art.email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <>
      {art ? (
        <>
          {/* Sección superior: Imagen y descripción */}
          <section className="flex flex-col sm:flex-row gap-6 items-center lg:gap-10 xl:gap-5">
            {/* Imagen de perfil */}
            <img
              src={art.profilePic}
              alt="Mi foto"
              loading="lazy"
              className="border-4 lg:border-3 border-secondary rounded-2xl shadow-retro 
                   dark:border-primary dark:shadow-retroDark w-36  sm:w-[200px] sm:h-[200px] xl:w-[300px] lg:h-auto 
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
              <section className="p-4 pt-0">
                {art.description.map((datos, index) => (
                  <div key={index}>
                    <p>
                      {datos.phrase1} <br />
                      <span className="font-title text-4xl md:text-6xl lg:text-8xl bg-gradient-to-r from-artPink to-artBlue text-transparent bg-clip-text">
                        {datos.phrase2}
                      </span>
                    </p>
                    <p>{datos.phrase3}</p>
                  </div>
                ))}

                {/* Botones de contacto */}
                <div className="flex flex-col items-center gap-4 mt-7 md:mt-2 lg:flex-row">
                  <button
                    className="w-full px-4 py-2 mr-3 lg:inline-block lg:w-auto cursor-pointer rounded-full bg-gradient-to-r from-artPink to-artBlue text-primary"
                    onClick={handleCopyEmail}
                  >
                    <i className="fa-solid fa-envelope fa-lg mr-2 "></i>
                    <span>{art.email}</span>
                  </button>
                  <div className="flex justify-center lg:flex-none">
                    <a href={art.instagram} target="_blank">
                      <button className=" w-15 h-15 lg:w-12 lg:h-12 text-2xl lg:text-lg rounded-full mr-1 cursor-pointer bg-gradient-to-r from-artPink to-artBlue text-primary">
                        <i className="fa-brands fa-instagram fa-2xl"></i>
                      </button>
                    </a>
                    <a href={art.behance} target="_blank">
                      <button className=" w-15 h-15 lg:w-12 lg:h-12 text-2xl md:text-3xl lg:text-xl rounded-full mr-1 cursor-pointer bg-gradient-to-r from-artPink to-artBlue text-primary">
                        <i className="fa-brands fa-behance "></i>
                      </button>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </section>

          {/* Sección "Ilustraciones" */}
          <section className="mt-5">
            <h1 className="font-title text-2xl sm:text-3xl lg:text-4xl">
              {art.ilustrationTitle}
            </h1>
            <div className="border-4 lg:border-3 border-secondary rounded-2xl shadow-retro dark:border-primary dark:shadow-retroDark">
              <header className=" flex items-center p-5 md:p-2 border-b-4 lg:border-b-3 h-10 border-secondary dark:border-primary ">
                <div className="w-6 h-6 md:w-5 md:h-5 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
              </header>
              <p className="p-4">{art.ilustrationText}</p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 pt-4 gap-4 place-items-center">
            {art.ilustrations.map((datos) => (
              <img
                src={datos.url}
                alt={datos.name}
                loading="lazy"
                className={`border-4 ${datos.css} border-secondary rounded-2xl shadow-retro 
                  dark:border-primary dark:shadow-retroDark w-full`}
                key={datos.id}
              />
            ))}
          </section>

          <section className="mt-8 pb-3 md:mt-3">
            <h1 className="font-title text-2xl sm:text-3xl lg:text-4xl mb-2">
              {art.toolsTitle}
            </h1>
            <ul className="flex flex-wrap gap-2">
              {art.tools.map((datos) => (
                <li
                  key={datos.id}
                  className="flex  gap-2 justify-center items-center bg-secondary text-primary px-6 py-2 mr-2 rounded-full   
                         dark:bg-primary dark:text-secondary"
                >
                  <img
                    src={datos.icon}
                    alt={datos.tec}
                    className="w-9 h-9 lg:w-5 lg:h-5"
                    loading="lazy"
                  />
                  <span>{datos.tec}</span>
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : (
        <p>No hay datos</p>
      )}
    </>
  );
};
