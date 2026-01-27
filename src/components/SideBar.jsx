import MenuIcon from '../assets/icons/menu-burger.svg';
const SideBar = () => {
  return (
    <section className="w-16 h-full bg-brand-100 dark:bg-brand-900 border-r border-brand-200 dark:border-brand-700 flex flex-col items-center py-4">
      <img
        src={MenuIcon}
        alt="Sidebar Icon"
        className="h-6 w-6 p-1 mt-0.5 dark:invert"
      />
    </section>
  );
}

export default SideBar