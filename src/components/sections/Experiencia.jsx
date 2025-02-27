
import { useContext } from "react";
import datos from "../../mocks/datos.json";
import { LanguageContext } from "../../context/LanguageProvider";

export const Experiencia = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const dataPortafolio = datos[selectedLanguage].experience.content;
  const hasData=dataPortafolio.length>0
  

  return (
    <>
      {hasData ? (
        <ul className="h-full space-y-6 p-4 md:p-0">
          {
            dataPortafolio.map(datos=>(
              <li
              className="font-body text-lg md:text-2xl border-4 border-secondary rounded-2xl shadow-retro 
                        dark:border-primary dark:shadow-retroDark"
                        key={datos.id}
            >
              {/* Header con fecha y círculos decorativos */}
              <header className="flex items-center justify-between p-4 gap-4 md:p-6 border-b-4 h-12 border-secondary dark:border-primary">
                <span className="whitespace-nowrap">{datos.date}</span>
                <div className="hidden sm:flex border-4 w-4xl rounded-full"> </div>
                <div className="flex gap-4">
                  <div className="hidden md:flex w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                  <div className="hidden md:flex w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                  <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                </div>
              </header>

              {/* Sección de imagen y texto */}
              <section className="flex flex-col md:flex-row p-4 md:p-6">
                <img
                  src={datos.image}
                  alt={datos.alt}
                  loading="lazy"
                  className="border-4  border-secondary rounded-2xl w-20 h-20 mx-auto md:w-[82px] md:h-[82px] md:mx-0 md:mr-3 "
                />
                <div className="flex flex-col justify-center text-center md:text-left mt-4 md:mt-0 ">
                  <h1 className="text-xl md:text-2xl font-bold">{datos.job}</h1>
                  <span className="text-lg md:text-xl">{datos.company}</span>
                </div>
              </section>

               {/* Descripción */}
              <section className="p-4 md:p-6">
                <p className="break-words whitespace-pre-line">
                  {datos.description}
                </p>
              </section>
            </li>
            ))
          }
         
        </ul>
      ) : (
        <p>No hay datos</p>
      )}
    </>
  );
};

