import logo from '../public/logo-1.png';
import './App.css'
import {useWindowSize} from "./hooks/resize.js";
import Navbar from "./components/Navbar/Navbar.jsx";
import {useCallback, useEffect, useMemo, useState} from "react";
import Main from "./components/Main/Main.jsx";
import AOS from 'aos';
import {AnimatePresence, motion} from "framer-motion";


function App() {
  const [width, height] = useWindowSize()
  const [modalShow, setModalShow] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setModalShow(false)
      AOS.init({
        offset: 30,
        delay: 100,
        duration: 600,
        once: true,
      })
    }, 2500)

    return () => clearTimeout(timeout)
  }, [])

  const WelcomePopup = useCallback(() => {
    return modalShow &&
        <motion.div
            key="modal"
            className="w-screen grid z-[100] place-items-center fixed h-screen top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-violet-500 to-fuchsia-500"
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, transition: {duration: 1}}}>
          <motion.img
              key="logo"
              className="rounded-full w-64 h-64 animate-bounce"
              initial={{opacity: 0, scale: 0.1}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0, transition: {duration: 1}}} src={logo}
              alt="logo"
          />
        </motion.div>
  }, [])


  if (width > 655) {
    return <div>
      Извините, приложение доступна только на телефоне
    </div>
  }


  return <>
    <AnimatePresence>
      {modalShow && WelcomePopup()}
    </AnimatePresence>
    <div className="App">
      <Navbar/>
      <Main/>
    </div>
  </>

}

export default App
