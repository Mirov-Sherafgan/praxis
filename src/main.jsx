import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Interns from "./components/Interns/Interns.jsx";
import { AnimatePresence } from "framer-motion"

import 'aos/dist/aos.css';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "interns",
    element: <Interns/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
