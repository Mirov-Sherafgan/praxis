import React from 'react';
import logo from "/logo-1.png";
import {useWindowSize} from "../../hooks/resize.js";

const Navbar = () => {
  const [width] = useWindowSize()

  return (
    <div>
      <img src={logo} className={`w-screen h-[60%] text-slate-500 object-contain relative top-0 left-0 right-0`} alt="logo"/>

      <h1 className="text-2xl text-slate-500 font-bold mt-4 text-center">
        Всем Хеллоу 👋🏻
      </h1>
      <h1 className="text-2xl text-slate-500 font-bold text-center">
        Мы практиканты РТСУ
      </h1>


      <header className="fixed top-0 left-0 z-40 text-center right-0 min-h-8 bg-gradient-to-r bg-slate-200 rounded-b to-bg-current p-8 ">
          <strong className="uppercase text-xl text-slate-500">Практиканты РТСУ 🇹🇯  🇷🇺 </strong>
      </header>
    </div>
  );
};

export default Navbar;