// "
export const MobileNav = ({isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="lg:hidden fixed left-5 z-50">
      <button
        onClick={toggleSidebar}
        className="p-2 bg-salmon  rounded-full shadow-retro dark:shadow-retroDark"
      >
        <i className={`fa-solid fa-bars fa-xl`}></i>
      </button>
    </div>
  );
};