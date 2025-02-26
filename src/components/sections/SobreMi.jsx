import datos from "../../mocks/datos.json";
import { LanguageContext } from "../../context/LanguageProvider";
import {useContext } from "react";

export const SobreMi = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const about = datos[selectedLanguage].about.content;
  console.log(about);

  // Copy the email to the clipboard
  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(about.email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <>
      {/* Sección superior: Imagen y descripción */}
      <section className="flex flex-col sm:flex-row gap-6 items-center lg:gap-10">
        {/* Imagen de perfil */}
        <img
          src={about.profilePic}
          alt="Mi foto"
          className="border-4  border-secondary rounded-2xl shadow-retro 
                   dark:border-primary dark:shadow-retroDark w-36  sm:w-[200px] sm:h-[200px] lg:w-[400px] lg:h-auto"
        />
        {/* Descripción */}
        <div
          className="relative w-full border-4  border-secondary rounded-2xl shadow-retro 
                      dark:border-primary dark:shadow-retroDark  lg:w-[calc(100%-390px)] "
        >
          <header className=" flex items-center p-5 border-b-4 mb-5 h-10 border-secondary dark:border-primary">
            <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
          </header>
          <section className="p-4 pt-0 ">
            {about.description.map((datos, index) => (
              <div key={index}>
                <p>
                  {datos.phrase1} <br />
                  <span className="font-title text-4xl lg:text-9xl text-salmon">
                    {datos.phrase2}
                  </span>
                </p>
                <p>
                  {datos.phrase3}
                  <span className="text-salmon ">
                    {" "}
                    {datos.phrase4}{" "}
                  </span>
                  {datos.phrase5}
                  <span className="text-salmon">
                    {" "}
                    {datos.phrase6}
                  </span>
                </p>
              </div>
            ))}

            {/* Botones de contacto */}
            <div className="flex flex-col gap-4 mt-7 lg:flex-row">
              <button
                onClick={handleCopyEmail}
                className="w-full px-4 py-2 mr-3 lg:inline-block lg:w-auto cursor-pointer bg-salmon rounded-full hover:bg-secondary hover:text-salmon
                                  dark:border-primary dark:hover:bg-primary"
              >
                <i className="fa-solid fa-envelope fa-lg mr-2"></i>
                <span>{about.email}</span>
              </button>
              <a href={about.cvLink} target="_blank">
                <button
                  className="w-full px-4 py-2 lg:inline-block lg:w-auto  rounded-full border-4 cursor-pointer border-secondary hover:bg-secondary hover:text-salmon
                                dark:border-primary dark:hover:bg-primary"
                >
                  <i className="fa-solid fa-file-pdf fa-lg mr-2"></i>
                  <span>Descargar CV</span>
                </button>
              </a>
              <div className="flex justify-center lg:flex-none">
              <a href={about.linkedin} target="_blank">
                  <button className=" w-15 h-15 rounded-full mr-1 cursor-pointer text-primary  bg-secondary dark:bg-primary dark:text-secondary">
                    <i className="fa-brands fa-linkedin-in fa-lg"></i>
                  </button>
                </a>

                <a href={about.github} target="_blank">
                  <button className=" w-15 h-15 rounded-full cursor-pointer text-primary  bg-secondary dark:bg-primary dark:text-secondary">
                    <i className="fa-brands fa-github fa-xl"></i>
                  </button>
                </a>

              </div>
              

            </div>
          </section>
        </div>
      </section>

      {/* Sección "Sobre mí" */}
      <section className="mt-5">
        <h1 className="font-title text-2xl lg:text-5xl">
          {about.aboutMeTitle}
        </h1>
        <div className="border-4  border-secondary rounded-2xl shadow-retro dark:border-primary dark:shadow-retroDark">
          <header className=" flex items-center p-5 border-b-4  h-10 border-secondary dark:border-primary ">
            <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
          </header>
          <p className="p-4">{about.aboutMeText}</p>
        </div>
      </section>
      {/* Sección de tecnologías */}
      <section className="mt-8">
        <h1 className="font-title text-3xl lg:text-5xl mb-4">
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
    </>
  );
};

// import datos from "../../mocks/datos.json";
// import { LanguageContext } from "../../context/LanguageProvider";
// import { useContext } from "react";

// export const SobreMi = () => {
//   const { selectedLanguage } = useContext(LanguageContext);
//   const about = datos[selectedLanguage].about.content;
//   console.log(about);

//   // Copy the email to the clipboard
//   const handleCopyEmail = () => {
//     navigator.clipboard
//       .writeText(about.email)
//       .then(() => {
//         alert("Email copied to clipboard!");
//       })
//       .catch((err) => {
//         console.error("Failed to copy email: ", err);
//       });
//   };

//   return (
//     <>
//       {/* Sección superior: Imagen y descripción */}
//       <section className="flex flex-col lg:flex-row gap-6 lg:gap-10 p-4 lg:p-0">
//         {/* Imagen de perfil */}
//         <img
//           src={about.profilePic}
//           alt="Mi foto"
//           className="border-4 border-secondary rounded-2xl shadow-retro
//                      dark:border-primary dark:shadow-retroDark w-36 h-36 lg:w-48 lg:h-48 lg:w-64 lg:h-64 xl:w-[406px] xl:h-[406px] mx-auto lg:mx-0"
//         />

//         {/* Descripción */}
//         <div
//           className="relative w-full border-4 border-secondary rounded-2xl shadow-retro
//                       dark:border-primary dark:shadow-retroDark p-4 lg:p-6"
//         >
//           <header className="flex items-center p-4 border-b-4 mb-4 h-12 border-secondary dark:border-primary">
//             <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary"></div>
//           </header>
//           <section className="space-y-4">
//             {about.description.map((datos, index) => (
//               <div key={index}>
//                 <p>
//                   {datos.phrase1} <br />
//                   <span className="font-title text-4xl lg:text-6xl lg:text-7xl text-salmon">
//                     {datos.phrase2}
//                   </span>
//                 </p>
//                 <p>
//                   {datos.phrase3}
//                   <span className="font-title text-xl lg:text-2xl"> {datos.phrase4} </span>
//                   {datos.phrase5}
//                   <span className="font-title text-xl lg:text-2xl"> {datos.phrase6}</span>
//                 </p>
//               </div>
//             ))}

//             {/* Botones de contacto */}
//             <div className="flex flex-col lg:flex-row gap-4">
//               <button
//                 onClick={handleCopyEmail}
//                 className="inline-flex items-center justify-center px-4 py-2 bg-salmon rounded-full hover:bg-secondary hover:text-salmon
//                                   dark:border-primary dark:hover:bg-primary"
//               >
//                 <i className="fa-solid fa-envelope fa-lg mr-2"></i>
//                 <span>{about.email}</span>
//               </button>
//               <a href={about.cvLink} target="_blank" rel="noopener noreferrer">
//                 <button
//                   className="inline-flex items-center justify-center px-4 py-2 rounded-full border-4 cursor-pointer border-secondary hover:bg-secondary hover:text-salmon
//                                 dark:border-primary dark:hover:bg-primary"
//                 >
//                   <i className="fa-solid fa-file-pdf fa-lg mr-2"></i>
//                   <span>Descargar CV</span>
//                 </button>
//               </a>
//             </div>

//             {/* Iconos de redes sociales */}
//             <div className="flex gap-4">
//               <a href={about.linkedin} target="_blank" rel="noopener noreferrer">
//                 <button className="w-12 h-12 rounded-full cursor-pointer text-primary bg-secondary dark:bg-primary dark:text-secondary">
//                   <i className="fa-brands fa-linkedin-in fa-lg"></i>
//                 </button>
//               </a>
//               <a href={about.github} target="_blank" rel="noopener noreferrer">
//                 <button className="w-12 h-12 rounded-full cursor-pointer text-primary bg-secondary dark:bg-primary dark:text-secondary">
//                   <i className="fa-brands fa-github fa-xl"></i>
//                 </button>
//               </a>
//             </div>
//           </section>
//         </div>
//       </section>

//       {/* Sección "Sobre mí" */}
//       <section className="mt-8 p-4 lg:p-0">
//         <h1 className="font-title text-3xl lg:text-5xl">{about.aboutMeTitle}</h1>
//         <div className="border-4 border-secondary rounded-2xl shadow-retro dark:border-primary dark:shadow-retroDark mt-4">
//           <header className="flex items-center p-4 border-b-4 h-12 border-secondary dark:border-primary">
//             <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary"></div>
//           </header>
//           <p className="p-4 text-lg">{about.aboutMeText}</p>
//         </div>
//       </section>

//       {/* Sección de tecnologías */}
//       <section className="mt-8 p-4 lg:p-0">
//         <h1 className="font-title text-3xl lg:text-5xl mb-4">{about.prinTextTitle}</h1>
//         <ul className="flex flex-wrap gap-2">
//           {about.tecs.map((tecs) => (
//             <li
//               key={tecs.id}
//               className="inline-flex items-center bg-secondary text-primary px-4 py-2 rounded-full
//                          dark:bg-primary dark:text-secondary"
//             >
//               <i className={`${tecs.icon} fa-lg mr-2`}></i>
//               <span>{tecs.tec}</span>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </>
//   );
// };
