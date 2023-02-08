import React from 'react';
import schedule from "../../../public/raspisanie.jpg";
import interns from '../../../public/Nuriddin-Kamil.jpg';
import videoDay5 from '../../../public/video.mp4';
import monday6 from "../../../public/06-monday.jpg";
import monday6Video from "../../../public/monday6.mp4";
import {Schedule} from "./Schedule.jsx";
import Blockquote from "./Blockquote.jsx";
import Post from "./Post.jsx";
import madina7 from "../../../public/madina7.mp4";

const posts = [
  {
    id: 1,
    day: "День 1",
    image: schedule,
    desc: "Сегодня 31.01.2023г мы впервые познакомились с нашим руководителём в школе. Я, Камиль, Нуриддин и эта\n" +
        "              красивая девушка Гулчахон обсуждаем дальнейшие планы.",
    schedule: <Schedule data={[{id: 1, lesson: "Geometry", time: "08:00 - 08:45"}]}/>,
  },
  {
    id: 2,
    image: interns,
    day: "День 4",
    blockquote: <Blockquote text="Может быть, Нуриддин увлекся поиском новых миров в других галактиках, или же он просто нашел способ
    обходить законы физики."/>,
    desc: `4 дней практики и Нуриддин, Камиль и Якуб уже стали экспертами в физике!
              Вы думаете, они просто сходили на практику? Нет, они вошли в мир физики!
              Когда Нуриддин, Камиль и Якуб выходят из лаборатории, физика идет за ними.
              5 дней практики и они уже знают все о физике, что не могут сказать о своей математике.
              Они сходили на практику, чтобы изучить физику, но теперь они могут делать физические эксперименты во сне!`,
    blockquote2: <Blockquote text="Возможно, Нуриддин ушел в поисках своей потерянной диссертации, или же он просто хочет добиться свободы
                от
                физики навсегда."/>,
    schedule: <Schedule data={[
      {lesson: "Родной язык", time: "8:00 - 8:45"},
      {lesson: "Литература", time: "08:50 - 09:35"},
      {lesson: "Английский язык", time: "09:45 - 10:30"},
      {lesson: "История", time: "10:40 - 11:25"},
      {lesson: "Общество", time: "11:30 - 12:10"},
    ]}/>,
    video: videoDay5
  },
  {
    id: 3,
    day: "День 6",
    desc: <>
      <span className="text-start block px-4 text-xl mt-6" data-aos="fade-up">Шерафган, Якуб, Камиль и Махинахон - это группа друзей, которые всегда вместе и никогда не расстаются. Они познакомились в университете и с тех пор неразрывно связаны. Каждый из них обладает уникальными качествами и талантами, которые делают их компанию незабываемой.</span>
      <span className="text-start block px-4 text-xl mt-6" data-aos="fade-up">
              Шерафган - это человек, всегда улыбающийся и радующий других. Якуб - это спортсмен, всегда вдохновляющий других своей энергией и уверенностью. Камиль - это музыкант, приносящий в их жизнь радость и красоту своей музыкой. Махинахон - это исследователь, всегда желающий узнать больше и открывать новые горизонты.
      </span>
      <span className="text-start block px-4 text-xl mt-6" data-aos="fade-up">
        Вместе они прожили много запоминающихся приключений и увлекательных историй, которые они всегда вспоминают
      </span>
    </>,
    blockquote: <Blockquote
        text="Теоретическая физика на самом деле является философией, но практическая физика является настоящей наукой. - Ричард Фейнман"/>,
    image: monday6,
    schedule: <Schedule data={[
      {lesson: "Классный час", time: "8:00 - 8:45"},
      {lesson: "Труд", time: "08:50 - 09:35"},
      {lesson: "Физика", time: "09:45 - 10:30"},
      {lesson: "Алгебра", time: "10:40 - 11:25"},
      {lesson: "История Таджикского народа", time: "11:30 - 12:10"},
      {lesson: "ОБЖ", time: "12:15 - 13:00"},
    ]}/>,
    video: monday6Video,
  },
  {
    id: 4,
    day: "День 7",
    emergency: madina7,
    desc: "День началась с комплиментов Мадины",
    schedule: <Schedule data={[
      {lesson: "Классный час", time: "8:00 - 8:45"},
      {lesson: "Труд", time: "08:50 - 09:35"},
      {lesson: "Физика", time: "09:45 - 10:30"},
      {lesson: "Алгебра", time: "10:40 - 11:25"},
      {lesson: "История Таджикского народа", time: "11:30 - 12:10"},
      {lesson: "ОБЖ", time: "12:15 - 13:00"},
    ]}/>,
  }
]

const Main = () => {
  return (
      <div className="mt-2 grid place-items-center justify-center text-center">
        <p data-aos="fade-up">Это наш <span className="font-bold italic">"ДОРОГОЙ ДНЕВНИК..."</span> где мы будем выкладывать все, что проходили на практике. <span
            className="text-3xl">🧑🏻‍🏫</span></p>
        <p data-aos="fade-up">Будет интересно, погнали <span className="text-4xl">🫶🏻</span></p>
        <section>
          {posts.map(el => <Post post={el}/>)}
        </section>
      </div>
  );
};

export default Main;