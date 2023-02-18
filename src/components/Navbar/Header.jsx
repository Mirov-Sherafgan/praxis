import React, {useEffect, useMemo, useRef, useState} from 'react';
import Hamburger from 'hamburger-react'
import {CSSTransition} from "react-transition-group";
import {Link} from "react-router-dom";
import "./Navbar.css";


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

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const [animationIn, setAnimationIn] = useState(false)
  const nodeRef = useRef(null);

  useEffect(() => {
    setAnimationIn(isOpen)
  }, [isOpen]);

  const menuItems = useMemo(() => {
    return links.map(link => <li
        key={link.id}
        className="list-none text-2xl border-b-2 p-4  text-slate-500 border-b-neutral-500"
    >
      <Link className="dark:text-white" to={link.path}>{link.label}</Link>
    </li>)
  }, [])

  return (
      <header
          className="fixed flex justify-between items-center top-0 left-0 z-40 text-center right-0 min-h-4 bg-gradient-to-r dark:bg-violet-900 bg-slate-200 rounded-b to-bg-current p-4"
      >
        <strong className="uppercase dark:text-white text-xl text-slate-500">Практиканты РТСУ 🇹🇯 🇷🇺 </strong>
        <Hamburger toggled={isOpen} toggle={setOpen} color="#4FD1C5"/>
        <CSSTransition
            classNames="alert"
            className="absolute dark:bg-violet-900 bg-slate-200 h-screen w-screen left-0 right-0 top-20"
            in={animationIn}
            nodeRef={nodeRef}
            timeout={400}
            unmountOnExit
            appear
        >
          <nav ref={nodeRef}>
            {menuItems}
          </nav>
        </CSSTransition>
      </header>
  );
};

export default Header;