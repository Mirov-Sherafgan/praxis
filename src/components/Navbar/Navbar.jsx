import React, {useEffect, useRef, useState} from 'react';
import logo from "/logo-1.png";
import {Sling as Hamburger} from 'hamburger-react'
import {CSSTransition} from 'react-transition-group';
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const [animationIn, setAnimationIn] = useState(false)
  const nodeRef = useRef(null);


  useEffect(() => {
    setAnimationIn(isOpen)
  }, [isOpen])

  const links = [
    {
      id: 1,
      path: "/",
      label: "Главная",
    },
    {
      id: 2,
      path: "/interns",
      label: "Практиканты",
    },
    {
      id: 3,
      path: "/schedule",
      label: "Расписание",
    }
  ];

  return (
      <div>
        <img
            src={logo}
            className={`w-screen h-[60%] text-slate-500 object-contain relative top-0 left-0 right-0`}
            alt="logo"
        />

        <h1 className="text-2xl text-slate-500 font-bold mt-4 text-center" data-aos="fade-up">
          Всем Хеллоу 👋🏻
        </h1>
        <h1 className="text-2xl text-slate-500 font-bold text-center" data-aos="fade-up">
          Мы практиканты РТСУ
        </h1>


        <header
            className="fixed flex justify-between items-center top-0 left-0 z-40 text-center right-0 min-h-4 bg-gradient-to-r bg-slate-200 rounded-b to-bg-current p-4"
            data-aos="fade-up"
        >
          <strong className="uppercase text-xl text-slate-500" data-aos="fade-up">Практиканты РТСУ 🇹🇯 🇷🇺 </strong>
          <Hamburger toggled={isOpen} toggle={setOpen} color="#4FD1C5"/>
          <CSSTransition
              classNames="alert"
              className="absolute bg-slate-200 h-screen w-screen left-0 right-0 top-20"
              in={animationIn}
              nodeRef={nodeRef}
              timeout={400}
              unmountOnExit
              appear
          >
            <nav ref={nodeRef}>
              {links.map(link => <li
                  key={link.id}
                  className="list-none text-2xl border p-4 text-slate-500 border-b-neutral-500"
              ><Link to={link.path}>{link.label}</Link></li>)}
            </nav>
          </CSSTransition>
        </header>
      </div>
  );
};

export default Navbar;