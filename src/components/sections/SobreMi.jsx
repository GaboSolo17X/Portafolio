import datos from "../../mocks/datos.json";
import { LanguageContext } from "../../context/LanguageProvider";
import { useContext } from "react";

import ProfilePicture from "/images/pp.png";

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
      <section className="flex h-[45%] gap-10">
        <img
          src={about.profilePic}
          alt="Mi foto"
          className="border-4  border-secondary rounded-2xl shadow-retro 
                   dark:border-primary dark:shadow-retroDark"
        />
        <div
          className="relative w-[calc(100%-390px)]   border-4  border-secondary rounded-2xl shadow-retro 
                      dark:border-primary dark:shadow-retroDark"
        >
          <header className=" flex items-center p-5 border-b-4 mb-5 h-10 border-secondary dark:border-primary">
            <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
          </header>
          <section className="p-4 ">
            {about.description.map((datos, index) => (
              <div key={index}>
                <p>
                  {datos.phrase1} <br />
                  <span className="font-title text-9xl text-salmon">
                    {datos.phrase2}
                  </span>
                </p>
                <p>
                  {datos.phrase3}
                  <span className="font-title text-3xl"> {datos.phrase4} </span>
                  {datos.phrase5}
                  <span className="font-title text-3xl"> {datos.phrase6}</span>
                </p>
              </div>
            ))}

            <div>
              <button
              onClick={handleCopyEmail}
                className="inline-block px-4 py-2 mr-3 cursor-pointer bg-salmon rounded-full hover:bg-secondary hover:text-salmon
                                  dark:border-primary dark:hover:bg-primary"
              >
                <i className="fa-solid fa-envelope fa-lg mr-2"></i>
                <span>{about.email}</span>
              </button>
              <button
                className="inline-block px-4 py-2 rounded-full border-4 cursor-pointer border-secondary hover:bg-secondary hover:text-salmon
                                dark:border-primary dark:hover:bg-primary"
              >
                <i className="fa-solid fa-file-pdf fa-lg mr-2"></i>
                <span>Descargar CV</span>
              </button>
              <div>
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
      <section className="h-[40%] pt-8 ">
        <h1 className="font-title text-5xl">{about.aboutMeTitle}</h1>
        <div className="border-4  border-secondary rounded-2xl shadow-retro dark:border-primary dark:shadow-retroDark">
          <header className=" flex items-center p-5 border-b-4  h-10 border-secondary dark:border-primary ">
            <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
          </header>
          <p className="p-4">{about.aboutMeText}</p>
        </div>
      </section>
      <section className="h-[15%]">
        <h1 className="mb-2 font-title text-5xl">{about.prinTextTitle}</h1>
        <ul className="flex gap-2">
          {
            about.tecs.map(tecs=>(
              <li
              key={tecs.id}
              className="inline-block bg-secondary text-primary px-4 py-2 rounded-full   
                         dark:bg-primary dark:text-secondary"
            >
              <i className={`${tecs.icon} fa-lg mr-2`}></i>
              <span>{tecs.tec}</span>
            </li>

            ))
          }

        </ul>
      </section>
    </>
  );
};
