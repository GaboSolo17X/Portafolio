export const Habilidades = () => {
  return (
    <>
      <main className=" w-full h-full p-4 gap-4 grid grid-cols-2">
        <div className="border-4  border-secondary rounded-2xl shadow-retro 
                   dark:border-primary dark:shadow-retroDark"
        >
          <header className=" flex items-center p-7 border-b-4  h-10 border-secondary dark:border-primary">
            <div className="w-8 h-8 bg-secondary rounded-full dark:bg-primary "></div>
            <span className="flex-1 text-center font-title text-7xl">Frontend</span>
          </header>
          <ul className="grid grid-cols-4 h-[calc(100%-44px)] p-2 gap-4 ">
            <li className="inline-block h-14 bg-secondary text-primary px-4 py-2 rounded-full font-body text-2xl 
                       dark:bg-primary dark:text-secondary"
            >
              <i className="fa-brands fa-linkedin fa-lg mr-2"></i>
              <span>Linkedin</span>
            </li>
          </ul>
        </div>
        

      </main>
    </>
  );
};
