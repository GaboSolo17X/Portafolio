import ProfilePicture from "../../images/pp.png";
export const SobreMi = () => {
  return (
    <>
      <section className="flex h-[45%] gap-10">
        <img
          src={ProfilePicture}
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
            <p >
              Hola soy <br />
              <span className="font-title text-9xl text-salmon">
                GABRIEL SOLORZANO
              </span>
            </p>
            <p>
              Un ingeniero en sistemas que le gusta el
              <span className="font-title text-3xl"> Desarrollo de Software </span> 
              y el 
              <span className="font-title text-3xl"> Analisis de Datos.</span>
            </p>
            <div>
              <button className="inline-block px-4 py-2 mr-3 cursor-pointer bg-salmon rounded-full hover:bg-secondary hover:text-salmon
                                  dark:border-primary dark:hover:bg-primary">
                <i className="fa-solid fa-envelope fa-lg mr-2"></i> 
                <span>Gabosolorzano17@gmail.com</span>
              </button>
              <button className="inline-block px-4 py-2 rounded-full border-4 cursor-pointer border-secondary hover:bg-secondary hover:text-salmon
                                dark:border-primary dark:hover:bg-primary">                
                <i className="fa-solid fa-file-pdf fa-lg mr-2"></i>
                <span>Descargar CV</span>
              </button>
              <div>
              <button className=" w-15 h-15 rounded-full mr-1 cursor-pointer text-primary  bg-secondary dark:bg-primary dark:text-secondary">
                <i className="fa-brands fa-linkedin-in fa-lg"></i> 
              </button>
              <button className=" w-15 h-15 rounded-full cursor-pointer text-primary  bg-secondary dark:bg-primary dark:text-secondary">
                <i className="fa-brands fa-github fa-xl"></i> 
              </button>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="h-[40%] pt-8 ">
        <h1 className="font-title text-5xl">SOBRE MI</h1>
        <div className="border-4  border-secondary rounded-2xl shadow-retro dark:border-primary dark:shadow-retroDark">
          <header className=" flex items-center p-5 border-b-4  h-10 border-secondary dark:border-primary ">
            <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
          </header>
          <p className="  p-4">
            Soy una persona altamente comprometida con el aprendizaje continuo y
            el desarrollo personal y profesional. Cuando enfrento un tema o
            herramienta desconocida, invierto mi tiempo en investigarlo,
            practicarlo y buscar asesoría para dominarlo. Mi enfoque es siempre
            dar lo mejor de mí en cada proyecto, asegurándome de entregar
            resultados de alta calidad y aprendiendo de cada experiencia
          </p>
        </div>
      </section>
      <section className="h-[15%]">
        <h1 className="mb-2 font-title text-5xl">TECNOLOGIAS PRINCIPALES</h1>
        <ul className="flex gap-2">
          <li
            className="inline-block bg-secondary text-primary px-4 py-2 rounded-full   
                       dark:bg-primary dark:text-secondary"
          >
            <i className="fa-brands fa-linkedin fa-lg mr-2"></i>
            <span>Linkedin</span>
          </li>
          <li
            className="inline-block bg-secondary text-primary px-4 py-2 rounded-full  
                       dark:bg-primary dark:text-secondary"
          >
            <i className="fa-brands fa-linkedin fa-lg mr-2"></i>
            <span>Link</span>
          </li>
        </ul>
      </section>
    </>
  );
};
