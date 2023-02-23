import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Interns from "./components/Interns/Interns.jsx";
import Footer from "./components/Footer.jsx";

import 'react-lazy-load-image-component/src/effects/blur.css';
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
      <Footer/>
    </React.StrictMode>,
)
