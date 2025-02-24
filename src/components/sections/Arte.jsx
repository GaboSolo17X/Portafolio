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
          <section className="flex h-[45%] gap-10 ">
            <img
              src={art.profilePic}
              alt="Mi foto"
              className="border-4 border-secondary rounded-2xl shadow-retro dark:shadow-retroDark"
            />
            <div
              className="relative w-[calc(100%-390px)]   border-4  border-secondary rounded-2xl shadow-retro 
                             dark:border-primary dark:shadow-retroDark"
            >
              <header className=" flex items-center p-5 border-b-4 mb-5 h-10 border-secondary dark:border-primary">
                <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
              </header>
              <section className="p-4">
                {art.description.map((datos, index) => (
                  <div key={index}>
                    <p>
                      {datos.phrase1} <br />
                      <span className="font-title text-9xl bg-gradient-to-r from-artPink to-artBlue text-transparent bg-clip-text">
                        {datos.phrase2}
                      </span>
                    </p>
                    <p>{datos.phrase3}</p>
                  </div>
                ))}
                <div className="mt-2">
                  <button
                    className="inline-block px-4 py-2 mr-3 cursor-pointer bg-gradient-to-r from-artPink to-artBlue rounded-full text-primary"
                    onClick={handleCopyEmail}
                  >
                    <i className="fa-solid fa-envelope fa-lg mr-2 "></i>
                    <span>{art.email}</span>
                  </button>
                  <a href={art.instagram} target="_blank">
                    <button className=" w-15 h-15 rounded-full mr-3 cursor-pointer bg-gradient-to-r from-artPink to-artBlue text-primary">
                      <i className="fa-brands fa-instagram fa-2xl"></i>
                    </button>
                  </a>
                  <a href={art.behance} target="_blank">
                    <button className=" w-15 h-15 rounded-full cursor-pointer bg-gradient-to-r from-artPink to-artBlue text-primary">
                      <i className="fa-brands fa-behance "></i>
                    </button>
                  </a>
                </div>
              </section>
            </div>
          </section>

          <section className="h-[30%] pt-8">
            <h1 className="font-title text-5xl">{art.ilustrationTitle}</h1>
            <div className="border-4  border-secondary rounded-2xl shadow-retro dark:border-primary dark:shadow-retroDark">
              <header className=" flex items-center p-5 border-b-4  h-10 border-secondary dark:border-primary ">
                <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
              </header>
              <p className="p-4">{art.ilustrationText}</p>
            </div>
          </section>

          <section className=" grid grid-cols-2 pt-4 gap-4 place-items-center">
            {art.ilustrations.map((datos) => (
              <img
                src={datos.url}
                alt={datos.name}
                className={`border-4 ${datos.css}  border-secondary rounded-2xl shadow-retro 
                              dark:border-primary dark:shadow-retroDark`}
                key={datos.id}
              />
            ))}
          </section>

          <section>
            <h1 className="mt-2 mb-2 font-title text-5xl">
              {art.toolsTitle}
            </h1>
            <ul className="flex gap-2">
              {
                art.tools.map(datos=>(
                  <li
                  key={datos.id}
                  className="flex  gap-2 justify-center items-center bg-secondary text-primary px-6 py-2 mr-2 rounded-full   
                         dark:bg-primary dark:text-secondary"
                >
                  <img src={datos.icon} alt={datos.tec} className="w-9 h-9"/>
                  <span>{datos.tec}</span>
                </li>
                ))
              }
            </ul>
          </section>
        </>
      ) : (
        <p>No hay datos</p>
      )}
    </>
  );
};
