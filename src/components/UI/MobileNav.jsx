
// fixed left-4 top-1/2 -translate-y-1/2
//flex justify-center w-[500px]
export const MobileNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full justify-center  p-3 flex  bg-amber-400">
      <div
        className="flex flex-row w-screen
                  border-4 border-secondary rounded-full
                  shadow-retro p-1 "
      >
        <div className="flex flex-row items-center gap-10 ml-6 mr-20">
          <span className="inline-block p-2 sideBarIcon">
            <i className="fa-solid fa-user fa-2xl group ">
              <p className="tooltip scale-0 group-hover:scale-100">Sobre Mi</p>
            </i>
          </span>
          <span className="inline-block p-2 sideBarIcon">
            <i className="fa-solid fa-briefcase fa-2xl group">
              <p className="tooltip scale-0 group-hover:scale-100">
                Experiencia
              </p>
            </i>
          </span>
          <span className="inline-block p-2 sideBarIcon">
            <i className="fa-solid fa-folder fa-2xl group">
              <p className="tooltip scale-0 group-hover:scale-100">Proyectos</p>
            </i>
          </span>
          <span className="inline-block p-2 sideBarIcon">
            <i className="fa-solid fa-laptop-code fa-2xl group">
              <p className="tooltip scale-0 group-hover:scale-100">
                Habilidades
              </p>
            </i>
          </span>
          <span className="inline-block p-2 sideBarIcon">
            <i className="fa-solid fa-graduation-cap fa-2xl group">
              <p className="tooltip scale-0 group-hover:scale-100">Estudios</p>
            </i>
          </span>
          <span className="inline-block p-2 sideBarIcon">
            <i className="fa-solid fa-palette fa-2xl group">
              <p className="tooltip scale-0 group-hover:scale-100">Arte</p>
            </i>
          </span>
        </div>
      </div>
    </div>
  );
};
