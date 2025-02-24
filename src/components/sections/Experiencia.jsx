import bcie from "../../images/experiencia/bcie.png";

export const Experiencia = () => {
  return (
    <>
      <ul className="h-full space-y-4">
        <li className="font-body text-2xl border-4  border-secondary rounded-2xl shadow-retro 
                      dark:border-primary dark:shadow-retroDark">
          <header className=" flex items-center justify-between p-5 border-b-4  h-10 border-secondary dark:border-primary ">
            <span>18/08/2024 - 05/02/2025</span>
            <div className="border-4 w-4xl rounded-full"> </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
              <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
              <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
            </div>
          </header>
          <section className="flex p-4">
            <img src={bcie} alt="BCIE" className="border-4  border-secondary rounded-2xl mr-3" />
            <div className="flex flex-col justify-center">
              <h1>Analisis y Calidad de Datos</h1>
              <span>Banco Centroamericano de Integracion Economica</span>
            </div>
          </section>
          <section className="p-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              quae corrupti adipisci tenetur repudiandae error. Facere
              exercitationem veniam suscipit id quae quas repudiandae inventore
              eos earum, rem expedita eligendi aliquam?
            </p>
          </section>
        </li>

      </ul>
    </>
  );
};
