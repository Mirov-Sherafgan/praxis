import React from 'react';
import schedule from "../../../public/raspisanie.jpg";
import ReactPlayer from 'react-player'

const Main = () => {
  return (
    <div className="mt-2 grid place-items-center justify-center text-center">
      <p>Это наш ежедневний журнал, где мы будем выкладывать все, что проходили на практика. <span
        className="text-3xl	">🧑🏻‍🏫</span></p>
      <p>Будет интересно, погнали <span className="text-4xl">🫶🏻</span></p>

      <section>
        <article className="grid gap-6 mt-8   drop-shadow-2xl">
          <h3 className="text-5xl  border-b-8 text-slate-500 border-b-purple-600 rounded-xl font-bold italic px-6 pb-2"> День 1 </h3>
          <img src={schedule} className="object-cover  p-2 brightness-125 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" alt="расписание"/>
          <p>Сегодня 31.01.2023г мы впервые познакомились с нашим руководителём в школе. Я, Камиль, Нуриддин и эта красивая девушка Гулчахон обсуждаем дальнейшие планы.</p>
          <h5 className="font-bold text-slate-500">Расписание</h5>
          <table className="border-collapse border border-slate-400 ...">
            <thead>
            <tr>
              <th className="border border-slate-300 ...">Класс</th>
              <th className="border border-slate-300 ...">Время</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className="border border-slate-300 ...">Indiana</td>
              <td className="border border-slate-300 ...">Indianapolis</td>
            </tr>
            <tr>
              <td className="border border-slate-300 ...">Ohio</td>
              <td className="border border-slate-300 ...">Columbus</td>
            </tr>
            <tr>
              <td className="border border-slate-300 ...">Michigan</td>
              <td className="border border-slate-300 ...">Detroit</td>
            </tr>
            <tr>
              <td className="border border-slate-300 ...">Michigan</td>
              <td className="border border-slate-300 ...">Detroit</td>
            </tr>
            </tbody>
          </table>

          <div className='relative pt-[56.25%]'>
            <ReactPlayer
              className='absolute top-0 left-0'
              url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
              width='100%'
              height='100%'
              controls
            />
          </div>
        </article>
      </section>
    </div>
  );
};

export default Main;