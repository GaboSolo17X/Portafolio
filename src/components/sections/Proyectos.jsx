export const Proyectos = () => {
  return (
    <>
      <main className="h-full">
        <div className="flex justify-evenly w-full h-[8%]">
          <button className="w-40 p-5 border-4 rounded-full hover:bg-salmon bg-secondary border-primary shadow-retro text-primary 
                           dark:bg-primary dark dark:border-secondary dark:text-secondary dark:shadow-retroDark">
            Todos
          </button>
          <button className="w-40 p-5 border-4 rounded-full hover:bg-salmon bg-secondary border-primary shadow-retro text-primary 
                           dark:bg-primary dark dark:border-secondary dark:text-secondary dark:shadow-retroDark">
            Full-Stack
          </button>
          <button className="w-40 p-5 border-4 rounded-full hover:bg-salmon bg-secondary border-primary shadow-retro text-primary 
                           dark:bg-primary dark dark:border-secondary dark:text-secondary dark:shadow-retroDark">
            Frontend
          </button>
          <button className="w-40 p-5 border-4 rounded-full hover:bg-salmon bg-secondary border-primary shadow-retro text-primary 
                           dark:bg-primary dark dark:border-secondary dark:text-secondary dark:shadow-retroDark">
            Backend
          </button>
          <button className="w-40 p-5 border-4 rounded-full hover:bg-salmon bg-secondary border-primary shadow-retro text-primary 
                           dark:bg-primary dark dark:border-secondary dark:text-secondary dark:shadow-retroDark">
            UI/UX
          </button>
          <button className="w-40 p-5 border-4 rounded-full hover:bg-salmon bg-secondary border-primary shadow-retro text-primary 
                           dark:bg-primary dark dark:border-secondary dark:text-secondary dark:shadow-retroDark">
            BI
          </button>
        </div>

        <section className="h-[92%">
          <ul className="h-full grid grid-cols-2 justify-center p-4 space-y-6">
            <li
              className=" w-[90%] h-[560px] font-body text-2xl border-4  border-secondary rounded-2xl shadow-retro 
                                dark:border-primary dark:shadow-retroDark"
            >
              <header className=" flex items-center justify-between p-5 border-b-4 gap-5  h-10 border-secondary dark:border-primary ">
                <span>Nombressssss</span>
                <div className="border-4 w-4xl rounded-full"> </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 ml-auto bg-secondary rounded-full dark:bg-primary "></div>
                </div>
              </header>
              <section className="flex flex-col">
                <img
                  src=""
                  alt="BCIE"
                  className="h-[190px]  border-b-4 border-secondary dark:border-primary"
                />
                <div className="flex flex-col ">
                  <div className="flex justify-center gap-x-5 p-2">
                    <div className="inline-block px-4 py-2 rounded-full text-primary bg-secondary dark:bg-primary dark:text-secondary">
                      <span>Frontend</span>
                    </div>
                    <span className="flex justify-center items-center w-12 h-12 rounded-full mr-1 text-primary  bg-secondary dark:bg-primary dark:text-secondary">
                      <i className="fa-brands fa-linkedin-in fa-sm"></i>
                    </span>
                  </div>
                  <p className="p-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus quae corrupti adipisci tenetur repudiandae error.
                    Facere exercitationem veniam suscipit id quae quas
                    repudiandae inventore eos earum, rem expedita eligendi
                    aliquam?
                  </p>
                  <div className="flex justify-center gap-4">
                    <button
                      className="w-40 px-4 py-2 mr-3 cursor-pointer shadow-retro rounded-full bg-secondary border-4 border-primary text-primary 
                               hover:bg-salmon hover:text-primary dark:bg-primary dark:border-secondary dark:text-secondary dark:shadow-retroDark"
                    >
                      <span>Code</span>
                    </button>
                    <button
                      className="w-40 px-4 py-2 mr-3 cursor-pointer shadow-retro rounded-full bg-secondary border-4 border-primary text-primary 
                               hover:bg-salmon hover:text-primary dark:bg-primary dark:border-secondary dark:text-secondary dark:shadow-retroDark"
                    >
                      <span>Figma</span>
                    </button>
                  </div>
                </div>
              </section>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};
