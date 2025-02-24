import español from "../../images/languages/spainFlag.svg";
export const Estudios = () => {
  return (
    <>
      <section className="flex h-[45%] bg-red-400  ">
        <ul className="w-full h-full space-y-4 ">
          <li
            className="bg-green-200 border-4  border-secondary rounded-2xl shadow-retro 
                              dark:border-primary dark:shadow-retroDark"
          >
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
              <img
                src={español}
                alt="BCIE"
                className="border-4  border-secondary rounded-2xl mr-3"
              />
              <div className="flex flex-col justify-center">
                <h1>Ingenieria en Sistemas</h1>
                <span>Universidad Nacional Autonoma de Honduras</span>
              </div>
              <div className="inline-block h-14 ml-auto bg-secondary text-primary px-4 py-2 rounded-full dark:bg-primary">
                Por graduar
              </div>
            </section>
          </li>
          <li
            className="bg-green-200 border-4  border-secondary rounded-2xl shadow-retro 
                              dark:border-primary dark:shadow-retroDark"
          >
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
              <img
                src={español}
                alt="BCIE"
                className="border-4  border-secondary rounded-2xl mr-3"
              />
              <div className="flex flex-col justify-center">
                <h1>Ingenieria en Sistemas</h1>
                <span>Universidad Nacional Autonoma de Honduras</span>
              </div>
              <div className="inline-block h-14 ml-auto bg-secondary text-primary px-4 py-2 rounded-full dark:bg-primary">
                Por graduar
              </div>
            </section>
          </li>
        </ul>
      </section>
      <section className="h-[40%] bg-green-500">
        <h1 className="text-6xl font-title">Certificaciones</h1>
        <ul>
          <li
            className="bg-green-200 border-4  border-secondary rounded-2xl shadow-retro 
                              dark:border-primary dark:shadow-retroDark"
          >
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
              <img
                src={español}
                alt="BCIE"
                className="border-4  border-secondary rounded-2xl mr-3"
              />
              <div className="flex flex-col justify-center">
                <h1>Ingenieria en Sistemas</h1>
                <span>Universidad Nacional Autonoma de Honduras</span>
              </div>
              <div className="inline-block h-14 ml-auto bg-secondary text-primary px-4 py-2 rounded-full dark:bg-primary">
                Por graduar
              </div>
            </section>
          </li>
        </ul>
      </section>
      <section className="h-[15%] bg-blue-600">
        <h1 className="text-6xl font-title">Idiomas</h1>
        <ul>
          <li
            className="inline-block bg-green-200 border-4  border-secondary rounded-2xl shadow-retro 
                              dark:border-primary dark:shadow-retroDark"
          >
            <header className=" flex items-center justify-between p-5 border-b-4  h-10 border-secondary dark:border-primary ">
              <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
            </header>
            <section className="flex p-4">
              <img src={español} alt="BCIE" className=" rounded-2xl mr-3" />
              <div className="flex flex-col justify-center">
                <h1>Espa;ol</h1>
                <span>Nativo</span>
              </div>
            </section>
          </li>
        </ul>
      </section>
    </>
  );
};
