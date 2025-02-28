// "
export const MobileNav = ({isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="lg:hidden fixed left-5 z-51">
      <button
        onClick={toggleSidebar}
        className="bg-salmon w-10 h-10 rounded-full border-3 border-secondary dark:border-primary"
      >
        <i className={`fa-solid fa-bars fa-lg`}></i>
      </button>
    </div>
  );
};