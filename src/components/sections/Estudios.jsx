import datos from "../../mocks/datos.json";
import { LanguageContext } from "../../context/LanguageProvider";
import { useContext } from "react";

//Validar que existan los datos con dats?():()
export const Estudios = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const education = datos[selectedLanguage].education.content;
  console.log(education[0]);
  const degree = education[0];
  const certificates = education[1];
  const idioms = education[2];

  return (
    <>
      <section className="flex mb-15">
        <ul className="w-full h-full space-y-4 ">
          {degree.info.map((datos) => (
            <li
              key={datos.id}
              className=" border-4  border-secondary rounded-2xl shadow-retro 
                              dark:border-primary dark:shadow-retroDark"
            >
              {/* Header con fecha y círculos decorativos */}
              <header className="flex items-center justify-between p-4 gap-4 md:p-6 border-b-4 h-12 border-secondary dark:border-primary">
                <span className="whitespace-nowrap">{datos.year}</span>
                <div className="hidden sm:flex border-4 w-4xl rounded-full">
                  {" "}
                </div>
                <div className="flex gap-4">
                  <div className="hidden md:flex w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                  <div className="hidden md:flex w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                  <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                </div>
              </header>

              {/* Sección de imagen y texto */}
              <section className="flex flex-col justify-center md:flex-row p-4 md:p-6">
                <img
                  src={datos.logo}
                  alt={datos.institution}
                  className="border-4  border-secondary rounded-2xl w-20 h-20 mx-auto md:w-[82px] md:h-[82px] md:mx-0 md:mr-3 "
                />
                <div className="flex flex-col justify-center  text-center md:text-left mt-4 md:mt-0 
                                ">
                  <h1 className="text-xl md:text-2xl font-bold">
                    {datos.degree}
                  </h1>
                  <span className="text-lg md:text-xl">
                    {datos.institution}
                  </span>

                  <div className="flex items-center md:hidden h-14  mt-auto bg-secondary text-primary px-4 py-2 rounded-full dark:bg-primary">
                    {datos.status}
                  </div>
                </div>

                {/* Estado */}
                <div className="hidden md:inline-block h-14 ml-auto mt-auto bg-secondary text-primary px-4 py-2 rounded-full dark:bg-primary">
                  {datos.status}
                </div>
              </section>
            </li>
          ))}
        </ul>
      </section>

      {/* Sección de certificados */}
      <section className="mb-15">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-title mb-4">
          {certificates.category}
        </h1>
        <ul>
          {certificates.info.map((datos) => (
            <li
              key={datos.id}
              className=" border-4 w-full md:w-[500px] border-secondary rounded-2xl shadow-retro 
                                       dark:border-primary dark:shadow-retroDark"
            >
              {/* Header con fecha y círculos decorativos */}
              <header className="flex items-center justify-between p-4 gap-4 md:p-6 border-b-4 h-12 border-secondary dark:border-primary">
                <span className="whitespace-nowrap">{datos.year}</span>
                <div className="hidden sm:flex border-4 w-4xl rounded-full">
                  {" "}
                </div>
                <div className="flex gap-4">
                  <div className="hidden md:flex w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                  <div className="hidden md:flex w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                  <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                </div>
              </header>

              {/* Sección de imagen y texto */}
              <section className="flex flex-col justify-center md:flex-row md:justify-start p-4 md:p-6">
                <img
                  src={datos.logo}
                  alt={datos.institution}
                  className="border-4  border-secondary rounded-2xl w-20 h-20 mx-auto md:w-[82px] md:h-[82px] md:mx-0 md:mr-3 "
                />
                <div className="flex flex-col justify-center  text-center md:text-left mt-4 md:mt-0">
                  <h1 className="text-xl md:text-2xl font-bold">
                    {datos.title}
                  </h1>
                  <span className="text-lg md:text-xl">
                    {datos.institution}
                  </span>
                </div>
              </section>
            </li>
          ))}
        </ul>
      </section>

      {/* Sección de idiomas */}
      <section>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-title mb-4">
          {idioms.category}
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {idioms.info.map((datos) => (
            <li
              key={datos.id}
              className="inline-block  border-4  border-secondary rounded-2xl shadow-retro 
                                dark:border-primary dark:shadow-retroDark"
            >
              <header className=" flex items-center justify-between p-5 border-b-4  h-10 border-secondary dark:border-primary ">
                <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
              </header>
              <section className="flex flex-col md:flex-row p-4 md:p-6">
                <img
                  src={datos.flag}
                  alt={datos.idiom}
                  className="border-4  border-secondary rounded-2xl w-20 h-20 mx-auto md:w-[82px] md:h-[82px] md:mx-0 md:mr-3 "
                />
                <div className="flex flex-col justify-center items-center text-center md:text-left mt-4 md:mt-0 ">
                  <h1 className="text-xl md:text-2xl md:text-left font-bold">
                    {datos.idiom}
                  </h1>
                  <span className="text-lg md:text-xl">{datos.detail}</span>
                </div>
              </section>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
