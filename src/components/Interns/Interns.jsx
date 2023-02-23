import React from 'react';
import SheravganLogo from "../../../public/logoMe.jpg";
import kamilLogo from "../../../public/Kamil.jpg";
import nuriddin from "../../../public/Nuriddin.jpg";
import Yakub from "../../../public/Yakub.jpg";
import {useNavigate} from "react-router-dom";
import {LazyLoadImage} from 'react-lazy-load-image-component';


const Interns = () => {
  const navigate = useNavigate()
  return (
      <div>
        <button
            onClick={() => navigate("/")}
            type="button"
            className="inline-block mb-4 px-6 py-2 border-2 border-purple-700 dark:text-white text-gray-800 font-medium text-xs leading-tight uppercase rounded-2 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
          Назад в главное меню
        </button>

        <div
            className="w-full mb-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <LazyLoadImage
                effect="blur"
                className="w-full h-42 mb-3 shadow-lg"
                src={SheravganLogo}
                alt="Sheravgan Mirov photo"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Sheravgan Mirov</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">JavaScript/TypeScript Full-stack Developer</span>
            <div className="flex w-full justify-center mt-4 space-x-3 md:mt-6">
              <a href="https://t.me/sheravganmirov" target="_blank"
                 className="inline-flex w-[90%] justify-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Связаться
              </a>
            </div>
          </div>
        </div>

        <div
            className="w-full mb-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <LazyLoadImage
                effect="blur"
                className="w-full mb-3 shadow-lg"
                src={kamilLogo}
                alt="Камиль Нурматов"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Камиль Нурматов</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">Музыкант, певец, физик</span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a href="https://www.instagram.com/kamilnurmatovv/"
                 className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Связаться
              </a>
              <a href="https://www.instagram.com/kamilnurmatovv/"
                 className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div
            className="w-full mb-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <LazyLoadImage
                effect="blur"
                className="w-full object-cover mb-3 shadow-lg"
                src={nuriddin}
                alt="Нуриддин Махмудов"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Махмудов Нуриддин</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">Физик и просто очень хороший человек</span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a href="https://www.instagram.com/m.nuriddin.n/"
                 className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Связаться
              </a>
              <a href="https://www.instagram.com/m.nuriddin.n/"
                 className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div
            className="w-full mb-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <LazyLoadImage
                effect="blur"
                className="w-full object-cover mb-3 shadow-lg"
                src={Yakub}
                alt="Сафарзода Ёкубджон"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Сафарзода Ёкубджон</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">Физик, химик и биолог</span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <a href="https://www.instagram.com/bezu_m_niy_02/"
                 className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Связаться
              </a>
              <a href="https://www.instagram.com/bezu_m_niy_02/"
                 className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                Instagram
              </a>
            </div>
          </div>
        </div>

      </div>
  );
};

export default Interns;