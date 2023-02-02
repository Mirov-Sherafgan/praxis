import logo from '../public/logo-1.png';
import './App.css'
import {useWindowSize} from "./hooks/resize.js";
import Navbar from "./components/Navbar/Navbar.jsx";
import {useEffect, useState} from "react";
import Main from "./components/Main/Main.jsx";


function App() {
  const [width, height] = useWindowSize()
  const [modalShow, setModalShow] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      // setModalShow(false)
    }, 4000)
  }, [])

  if (modalShow) return <div className="w-screen grid place-items-center fixed h-screen top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-violet-500 to-fuchsia-500">
    <img src={logo} className="rounded-full w-64 h-64 animate-bounce" alt="logo"/>
  </div>

  if (width > 655) {
    return <div>Извините, приложение доступна только на телефоне</div>
  }



  return (
    <div className="App">
      <Navbar/>
      <Main/>
    </div>
  )
}

export default App
