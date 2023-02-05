import React from 'react';
import schedule from "../../../public/raspisanie.jpg";
import ReactPlayer from 'react-player'
import interns from '../../../public/Nuriddin-Kamil.jpg';
import videoDay5 from '../../../public/video.mp4';
import monday6 from "../../../public/06-monday.jpg";
import monday6Video from "../../../public/monday6.mp4";

console.log(videoDay5)

const Main = () => {
  return (
    <div className="mt-2 grid place-items-center justify-center text-center">
      <p>Это наш ежедневний журнал, где мы будем выкладывать все, что проходили на практике. <span
        className="text-3xl	">🧑🏻‍🏫</span></p>
      <p>Будет интересно, погнали <span className="text-4xl">🫶🏻</span></p>

      <section>
        <article className="grid gap-6 mt-8   drop-shadow-2xl">
          <h3 className="bg-white sticky top-[80px] z-40">
            <span
              className="font-extrabold block text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-400 to-pink-600 text-6xl rounded-b-lg shadow-xl font-bold italic px-6 pb-2">
            День 1
          </span>
          </h3>
          <img src={schedule}
               className="object-cover rounded-2xl p-2 brightness-125"
               alt="расписание"/>
          <p>Сегодня 31.01.2023г мы впервые познакомились с нашим руководителём в школе. Я, Камиль, Нуриддин и эта
            красивая девушка Гулчахон обсуждаем дальнейшие планы.</p>
          <h5 className="font-bold text-slate-500">Расписание</h5>
          <table className="border-collapse border border-slate-400 ...">
            <thead>
            <tr>
              <th className="border border-slate-300 ...">Предмет</th>
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

          {/*<div className='relative pt-[56.25%]'>*/}
          {/*  <ReactPlayer*/}
          {/*    className='absolute top-0 left-0'*/}
          {/*    url='https://www.youtube.com/watch?v=6X-1QLibZRA'*/}
          {/*    width='100%'*/}
          {/*    height='100%'*/}
          {/*    controls*/}
          {/*  />*/}
          {/*</div>*/}
        </article>

        <article className="grid gap-6 mt-8   drop-shadow-2xl">
          <h3
            className="text-5xl sticky top-[80px] z-40 bg-slate-200 border-b-8 text-slate-500 rounded-b-lg shadow-2xl  font-bold italic px-6 pb-2">
            День 4
          </h3>
          <blockquote className="italic font-semibold text-gray-900 dark:text-white text-start">
            <svg aria-hidden="true" className="w-10 inline mr-4 h-10 text-gray-400 dark:text-gray-600"
                 viewBox="0 0 24 27"
                 fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"/>
            </svg>
            Может быть, Нуриддин увлекся поиском новых миров в других галактиках, или же он просто нашел способ
            обходить законы физики.
          </blockquote>
          <img
            src={interns}
            className="object-cover rounded-2xl p-2 brightness-125"
            alt="расписание"
          />
          <p>
            5 дней практики и Нуриддин, Камиль и Якуб уже стали экспертами в физике!
            Вы думаете, они просто сходили на практику? Нет, они вошли в мир физики!
            Когда Нуриддин, Камиль и Якуб выходят из лаборатории, физика идет за ними.
            5 дней практики и они уже знают все о физике, что не могут сказать о своей математике.
            Они сходили на практику, чтобы изучить физику, но теперь они могут делать физические эксперименты во сне!
            <blockquote className="italic font-semibold text-gray-900 dark:text-white text-start">
              <svg aria-hidden="true" className="w-10 h-10 inline mr-4 text-gray-400 dark:text-gray-600"
                   viewBox="0 0 24 27"
                   fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"/>
              </svg>
              Возможно, Нуриддин ушел в поисках своей потерянной диссертации, или же он просто хочет добиться свободы от
              физики навсегда.
            </blockquote>
          </p>
          <h5 className="font-bold text-slate-500">Расписание</h5>
          <table className="border-collapse border border-slate-400 ...">
            <thead>
            <tr>
              <th className="border border-slate-300 ...">Предмет</th>
              <th className="border border-slate-300 ...">Время</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className="border border-slate-300 ...">Родной язык</td>
              <td className="border border-slate-300 ...">8:00 - 8:45</td>
            </tr>
            <tr>
              <td className="border border-slate-300 ...">Литература</td>
              <td className="border border-slate-300 ...">08:50 - 09:35</td>
            </tr>
            <tr>
              <td className="border border-slate-300 ...">Английский язык</td>
              <td className="border border-slate-300 ...">09:45 - 10:30</td>
            </tr>
            <tr>
              <td className="border border-slate-300 ...">История</td>
              <td className="border border-slate-300 ...">10:40 - 11:25</td>
            </tr>
            <tr>
              <td className="border border-slate-300 ...">Общество</td>
              <td className="border border-slate-300 ...">11:30 - 12:10</td>
            </tr>
            </tbody>
          </table>

          <div className='relative pt-[56.25%]'>
            <ReactPlayer
              config={{file: {attributes: {controlsList: 'nodownload'}}}}
              className='absolute top-0 left-0'
              url={[videoDay5]}
              width='100%'
              height='100%'
              controls
            />
          </div>
        </article>

        <article className="grid gap-6 mt-8   drop-shadow-2xl">
          <h3
            className="text-5xl sticky top-[80px] z-40 bg-slate-200 border-b-8 text-slate-500 rounded-b-lg shadow-2xl  font-bold italic px-6 pb-2">
            День 6
          </h3>
          <section>
            <span className="text-start block px-4 text-xl mt-6">Шерафган, Якуб, Камиль и Махинахон - это группа друзей, которые всегда вместе и никогда не расстаются. Они познакомились в университете и с тех пор неразрывно связаны. Каждый из них обладает уникальными качествами и талантами, которые делают их компанию незабываемой.</span>
            <span className="text-start block px-4 text-xl mt-6">
              Шерафган - это человек, всегда улыбающийся и радующий других. Якуб - это спортсмен, всегда вдохновляющий других своей энергией и уверенностью. Камиль - это музыкант, приносящий в их жизнь радость и красоту своей музыкой. Махинахон - это исследователь, всегда желающий узнать больше и открывать новые горизонты.
            </span>
            <span className="text-start block px-4 text-xl mt-6">
              Вместе они прожили много запоминающихся приключений и увлекательных историй, которые они всегда вспоминают
            </span>
          </section>
          <blockquote className="italic font-semibold text-gray-900 dark:text-white text-start px-4">
            <svg aria-hidden="true" className="w-10 inline mr-4 h-10 text-gray-400 dark:text-gray-600"
                 viewBox="0 0 24 27"
                 fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"/>
            </svg>
            Теоретическая физика на самом деле является философией, но практическая физика является настоящей наукой." -
            Ричард Фейнман
          </blockquote>
          <img
            src={monday6}
            className="object-cover rounded-2xl p-2 brightness-125"
            alt="расписание"
          />
          <h5 className="font-bold text-slate-500">Расписание</h5>
          <table className="border-collapse border border-slate-400 ...">
            <thead>
            <tr>
              <th className="border border-slate-300 ...">Предмет</th>
              <th className="border border-slate-300 ...">Время</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className="border border-slate-300 ...">Классный час</td>
              <td className="border border-slate-300 ...">8:00 - 8:45</td>
            </tr>
            <tr>
              <td className="border border-slate-300 ...">Труд</td>
              <td className="border border-slate-300 ...">08:50 - 09:35</td>
            </tr>
            <tr>
              <td className="border border-slate-300 ...">Физика</td>
              <td className="border border-slate-300 ...">09:45 - 10:30</td>
            </tr>
            <tr>
              <td className="border border-slate-300 ...">Алгебра</td>
              <td className="border border-slate-300 ...">10:40 - 11:25</td>
            </tr>
            <tr>
              <td className="border border-slate-300 ...">История Таджикского народа</td>
              <td className="border border-slate-300 ...">11:30 - 12:10</td>
            </tr>
            <tr>
              <td className="border border-slate-300 ...">ОБЖ</td>
              <td className="border border-slate-300 ...">12:15 - 13:00</td>
            </tr>
            </tbody>
          </table>

          <div className='relative pt-[56.25%]'>
            <ReactPlayer
              config={{file: {attributes: {controlsList: 'nodownload'}}}}
              className='absolute top-0 left-0'
              url={[monday6Video]}
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