import datos from "../../mocks/datos.json";
import { LanguageContext } from "../../context/LanguageProvider";
import { useContext } from "react";

export const Habilidades = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const skills = datos[selectedLanguage].skills;
  console.log(skills);

  const filters = skills.content.filter((datos) => datos.area === "Frontend");
  console.log(filters);

  return (
    <>
      {skills ? (
        <main className="w-full h-full p-4  overflow-y-scroll gap-4 grid grid-cols-1 lg:grid-cols-2 ">
          {/* Categorias de habilidades */}
          {skills.categories.map((datos) => (
            <div
              key={datos.id}
              className="border-4  border-secondary rounded-2xl shadow-retro 
                     dark:border-primary dark:shadow-retroDark"
            >
              <header className="flex items-center p-4 md:p-6 border-b-4 h-12 border-secondary dark:border-primary">
                <div className="w-8 h-8 bg-secondary rounded-full dark:bg-primary "></div>
                <span className="flex-1 text-center font-title text-4xl md:text-5xl lg:text-6xl">
                  {datos.name}
                </span>
              </header>

              {/* Lista de habilidades */}
              <ul className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
                {skills.content
                  .filter((skill) => skill.area === datos.name)
                  .map((dato) => (
                    <li
                      key={dato.id}
                      className="flex  md:gap-2 justify-center items-center h-14 bg-secondary text-primary px-4 py-2 rounded-full font-body text-sm sm:text-base md:text-lg 
                     dark:bg-primary dark:text-secondary"
                    >
                      <i className={`hidden md:flex ${dato.icon} fa-xl mr-3`}></i>

                      <span>{dato.skill}</span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </main>
      ) : (
        <p>No hay datos</p>
      )}
    </>
  );
};
