
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
        <ul className="h-full space-y-4">
          {
            dataPortafolio.map(datos=>(
              <li
              className="font-body text-2xl border-4  border-secondary rounded-2xl shadow-retro 
                        dark:border-primary dark:shadow-retroDark"
                        key={datos.id}
            >
              <header className=" flex items-center justify-between p-5 border-b-4  h-10 border-secondary dark:border-primary ">
                <span>{datos.date}</span>
                <div className="border-4 w-4xl rounded-full"> </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                  <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                  <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                </div>
              </header>
              <section className="flex p-4">
                <img
                  src={datos.image}
                  alt={datos.alt}
                  className="border-4  border-secondary rounded-2xl mr-3"
                />
                <div className="flex flex-col justify-center">
                  <h1>{datos.job}</h1>
                  <span>{datos.company}</span>
                </div>
              </section>
              <section className="p-4">
                <p>
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
