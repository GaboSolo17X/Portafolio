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
      <section className="flex mb-4">
        <ul className="w-full h-full space-y-4 ">
          {degree.info.map((datos) => (
            <li
              key={datos.id}
              className=" border-4  border-secondary rounded-2xl shadow-retro 
                              dark:border-primary dark:shadow-retroDark"
            >
              <header className=" flex items-center justify-between p-5 border-b-4  h-10 border-secondary dark:border-primary gap-2">
                <span>{datos.year}</span>
                <div className="border-4 w-4xl rounded-full"> </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                  <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                  <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                </div>
              </header>
              <section className="flex p-4">
                <img
                  src={datos.logo}
                  alt="BCIE"
                  className="border-4  border-secondary rounded-2xl mr-3"
                />
                <div className="flex flex-col justify-center">
                  <h1>{datos.degree}</h1>
                  <span>{datos.institution}</span>
                </div>
                <div className="inline-block h-14 ml-auto mt-auto bg-secondary text-primary px-4 py-2 rounded-full dark:bg-primary">
                  {datos.status}
                </div>
              </section>
            </li>
          ))}
        </ul>
      </section>
      <section className=" mb-4 ">
        <h1 className="text-6xl font-title">{certificates.category}</h1>
        <ul>
          {certificates.info.map((datos) => (
            <li
              key={datos.id}
              className="w-[600px]  border-4  border-secondary rounded-2xl shadow-retro 
                              dark:border-primary dark:shadow-retroDark"
            >
              <header className=" flex items-center justify-between p-5 gap-2 border-b-4  h-10 border-secondary dark:border-primary ">
                <span>{datos.year}</span>
                <div className="border-4 w-4xl rounded-full"> </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                  <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                  <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                </div>
              </header>
              <section className="flex p-4">
                <img
                  src={datos.logo}
                  alt="BCIE"
                  className="border-4  border-secondary rounded-2xl mr-3"
                />
                <div className="flex flex-col justify-center">
                  <h1>{datos.title}</h1>
                  <span>{datos.institution}</span>
                </div>
              </section>
            </li>
          ))}
        </ul>
      </section>
      <section >
        <h1 className="text-6xl font-title">{idioms.category}</h1>

        <ul className="flex gap-9">
          {idioms.info.map((datos) => (
            <li
            key={datos.id}
              className="inline-block  border-4  border-secondary rounded-2xl shadow-retro 
                                dark:border-primary dark:shadow-retroDark"
            >
              <header className=" flex items-center justify-between p-5 border-b-4  h-10 border-secondary dark:border-primary ">
                <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
              </header>
              <section className="flex p-4">
                <img src={datos.flag} alt="BCIE" className="border-4  border-secondary rounded-2xl mr-3" />
                <div className="flex flex-col justify-center">
                  <h1>{datos.idiom}</h1>
                  <span>{datos.detail}</span>
                </div>
              </section>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

// import datos from "../../mocks/datos.json";
// import { LanguageContext } from "../../context/LanguageProvider";
// import { useContext } from "react";

// export const Estudios = () => {
//   const { selectedLanguage } = useContext(LanguageContext);
//   const education = datos[selectedLanguage].education.content;
//   console.log(education[0]);
//   const degree = education[0];
//   const certificates = education[1];
//   const idioms = education[2];

//   return (
//     <>
//       {/* Sección de títulos académicos */}
//       <section className="mb-6">
//         <ul className="w-full h-full space-y-4">
//           {degree.info.map((datos) => (
//             <li
//               key={datos.id}
//               className="border-4 border-secondary rounded-2xl shadow-retro 
//                               dark:border-primary dark:shadow-retroDark"
//             >
//               <header className="flex items-center justify-between p-4 md:p-6 border-b-4 h-12 border-secondary dark:border-primary gap-2">
//                 <span>{datos.year}</span>
//                 <div className="border-4 w-4xl rounded-full"></div>
//                 <div className="flex gap-4">
//                   <div className="w-8 h-8 bg-secondary rounded-full dark:bg-primary"></div>
//                   <div className="w-8 h-8 bg-secondary rounded-full dark:bg-primary"></div>
//                   <div className="w-8 h-8 bg-secondary rounded-full dark:bg-primary"></div>
//                 </div>
//               </header>
//               <section className="flex flex-col md:flex-row p-4 md:p-6">
//                 <img
//                   src={datos.logo}
//                   alt="Logo de la institución"
//                   className="border-4 border-secondary rounded-2xl w-24 h-24 md:w-36 md:h-36 mx-auto md:mx-0 md:mr-6"
//                 />
//                 <div className="flex flex-col justify-center mt-4 md:mt-0">
//                   <h1 className="text-xl md:text-2xl font-bold">{datos.degree}</h1>
//                   <span className="text-lg md:text-xl">{datos.institution}</span>
//                 </div>
//                 <div className="inline-block h-14 ml-auto mt-4 md:mt-auto bg-secondary text-primary px-4 py-2 rounded-full dark:bg-primary">
//                   {datos.status}
//                 </div>
//               </section>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Sección de certificados */}
//       <section className="mb-6">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-title mb-4">{certificates.category}</h1>
//         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {certificates.info.map((datos) => (
//             <li
//               key={datos.id}
//               className="border-4 border-secondary rounded-2xl shadow-retro 
//                               dark:border-primary dark:shadow-retroDark"
//             >
//               <header className="flex items-center justify-between p-4 md:p-6 border-b-4 h-12 border-secondary dark:border-primary gap-2">
//                 <span>{datos.year}</span>
//                 <div className="border-4 w-4xl rounded-full"></div>
//                 <div className="flex gap-4">
//                   <div className="w-8 h-8 bg-secondary rounded-full dark:bg-primary"></div>
//                   <div className="w-8 h-8 bg-secondary rounded-full dark:bg-primary"></div>
//                   <div className="w-8 h-8 bg-secondary rounded-full dark:bg-primary"></div>
//                 </div>
//               </header>
//               <section className="flex flex-col md:flex-row p-4 md:p-6">
//                 <img
//                   src={datos.logo}
//                   alt="Logo de la institución"
//                   className="border-4 border-secondary rounded-2xl w-24 h-24 md:w-36 md:h-36 mx-auto md:mx-0 md:mr-6"
//                 />
//                 <div className="flex flex-col justify-center mt-4 md:mt-0">
//                   <h1 className="text-xl md:text-2xl font-bold">{datos.title}</h1>
//                   <span className="text-lg md:text-xl">{datos.institution}</span>
//                 </div>
//               </section>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Sección de idiomas */}
//       <section>
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-title mb-4">{idioms.category}</h1>
//         <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {idioms.info.map((datos) => (
//             <li
//               key={datos.id}
//               className="border-4 border-secondary rounded-2xl shadow-retro 
//                                 dark:border-primary dark:shadow-retroDark"
//             >
//               <header className="flex items-center justify-between p-4 md:p-6 border-b-4 h-12 border-secondary dark:border-primary">
//                 <div className="w-8 h-8 bg-secondary rounded-full dark:bg-primary"></div>
//               </header>
//               <section className="flex flex-col md:flex-row p-4 md:p-6">
//                 <img
//                   src={datos.flag}
//                   alt="Bandera del idioma"
//                   className="border-4 border-secondary rounded-2xl w-24 h-24 md:w-36 md:h-36 mx-auto md:mx-0 md:mr-6"
//                 />
//                 <div className="flex flex-col justify-center mt-4 md:mt-0">
//                   <h1 className="text-xl md:text-2xl font-bold">{datos.idiom}</h1>
//                   <span className="text-lg md:text-xl">{datos.detail}</span>
//                 </div>
//               </section>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </>
//   );
// };