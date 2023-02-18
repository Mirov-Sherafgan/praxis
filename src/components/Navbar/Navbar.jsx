import Header from "./Header.jsx";
import "./Navbar.css";

const Navbar = () => {
  return (
      <div className="pt-16">
        <h1 className="text-2xl dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-green-500 dark:via-purple-500 dark:to-yellow-500 dark:font-bold text-slate-500 font-bold mt-4 text-center"
            data-aos="fade-up">
          Всем Хеллоу <span className="text-white">👋🏻</span>
        </h1>
        <h1 className="text-2xl dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-green-500 dark:via-purple-500 dark:to-yellow-500 dark:text-white dark:font-bold text-slate-500 font-bold text-center"
            data-aos="fade-up">
          Мы практиканты РТСУ
        </h1>
        <Header/>
      </div>
  );
};

export default Navbar;