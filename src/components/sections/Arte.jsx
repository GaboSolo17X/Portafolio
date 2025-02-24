import profileArt from "../../images/art/Alost.png";
import ilustracion1 from "../../images/art/7friends.png";
import ilustracion2 from "../../images/art/FantasyR.png";
import ilustracion3 from "../../images/art/TwoLifes.jpg";
export const Arte = () => {
  return (
    <>
      <section className="flex h-[45%] gap-10 ">
        <img
          src={profileArt}
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
          <section className="p-4 ">
            <p>
              Hola soy <br />
              <span className="font-title text-9xl bg-gradient-to-r from-artPink to-artBlue text-transparent bg-clip-text">
                G4BZ.ART
              </span>
            </p>
            <p>
              Ademas de mis estudios academicos tambien disfruto practicar mi
              hobby favorito dibujar el cual tengo ya 2 años subiendo contenido
              en mis redes.
            </p>

            <div className="mt-2">
              <button
                className="inline-block px-4 py-2 mr-3 cursor-pointer bg-gradient-to-r from-artPink to-artBlue rounded-full hover:bg-secondary
                                     dark:border-primary dark:hover:bg-primary"
              >
                <i className="fa-solid fa-envelope fa-lg mr-2 "></i>
                <span>Gabotoons17@gmail.com</span>
              </button>
              <button className=" w-15 h-15 rounded-full mr-3 cursor-pointer bg-gradient-to-r from-artPink to-artBlue text-primary">
                <i className="fa-brands fa-instagram fa-2xl"></i>
              </button>
              <button className=" w-15 h-15 rounded-full cursor-pointer bg-gradient-to-r from-artPink to-artBlue text-primary">
                <i className="fa-brands fa-behance " ></i>
              </button>
            </div>
          </section>
        </div>
      </section>
      <section className="h-[30%] pt-8">
        <h1 className="font-title text-5xl">ILUSTRACIONES</h1>
        <div className="border-4  border-secondary rounded-2xl shadow-retro dark:border-primary dark:shadow-retroDark">
          <header className=" flex items-center p-5 border-b-4  h-10 border-secondary dark:border-primary ">
            <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
          </header>
          <p className="  p-4">
            Para ver otras ilustraciones mira mi instagram o behance. Me gusta
            realizar ilustraciones donde mis personajes se encuentran en una
            situacion y cuentan una historia.
          </p>
        </div>
      </section>
      <section className=" grid grid-cols-2 pt-4 gap-4 place-items-center">
        <img
          src={ilustracion1}
          alt=""
          className="border-4 col-span-2  border-secondary rounded-2xl shadow-retro 
                      dark:border-primary dark:shadow-retroDark"
        />
        <img
          src={ilustracion2}
          alt=""
          className="border-4  border-secondary rounded-2xl shadow-retro 
                      dark:border-primary dark:shadow-retroDark"
        />
        <img
          src={ilustracion3}
          alt=""
          className="border-4 w-[714px] h-[714px] border-secondary rounded-2xl shadow-retro 
                      dark:border-primary dark:shadow-retroDark"
        />
      </section>
    </>
  );
};
