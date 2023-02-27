import React from 'react';
import schedule from "../../../public/raspisanie.jpg";
import interns from '../../../public/Nuriddin-Kamil.jpg';
import videoDay5 from '../../../public/video.mp4';
import monday6 from "../../../public/06-monday.jpg";
import monday6Video from "../../../public/monday6.mp4";
import Sheravgan from "../../../public/Sheravgan-23-02.jpg";
import Noza from "../../../public/Noza.jpg";
import Mahina from "../../../public/Mahina.jpeg";
import {Schedule} from "./Schedule.jsx";
import Blockquote from "./Blockquote.jsx";
import Post from "./Post.jsx";
import madina7 from "../../../public/madina7.mp4";
import {defineSchedule} from "../../utils/schedule.js";
import Slider from "../Slider.jsx";
import Confetti from "../Confetti.jsx";
import useWindowSize from "react-use/lib/useWindowSize";


const posts = [
  {
    id: 1,
    day: "День 1",
    image: schedule,
    desc: "Сегодня 31.01.2023г мы впервые познакомились с нашим руководителём в школе. Я, Камиль, Нуриддин и эта\n" + "              красивая девушка Гулчахон обсуждаем дальнейшие планы.",
    schedule: <Schedule data={defineSchedule(2)}/>,
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
    schedule: <Schedule data={defineSchedule(5)}/>,
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
    schedule: <Schedule data={defineSchedule(6)}/>,
    video: monday6Video,
  },
  {
    id: 4,
    day: "День 7",
    emergency: madina7,
    desc: <div className="text-start grid gap-2">
      День началась с комплиментов Мадины :)
      <p>Классный час на тему "Россия в мире" может стать интересным и познавательным мероприятием для всех участников.
        Некоторые из возможных тем, которые можно обсудить, включают в себя:
      </p>

      <ol className="grid gap-4">
        {[
          "История России. Учащиеся могут узнать о наиболее значимых событиях и периодах в истории России и том, как они повлияли на современную страну и её место в мировом сообществе.",
          "География России. Можно рассмотреть географическое положение и природные ресурсы России и то, как это влияет на экономику и международные отношения.",
          "Россия и международные отношения. Можно обсудить роль России в мировой политике и международных отношениях, а также рассмотреть её отношения с другими странами.",
          "Культура России. Учащиеся могут узнать о традициях, искусстве, музыке и литературе России и том, как они повлияли на мировую культуру.",
          " Россия сегодня. Можно рассмотреть текущее положение дел в России, её экономическое развитие и роль в мировом сообществе."
        ].map((el, id) =>
            <li key={id}><span className="mx-3">{id + 1}.</span> {el}</li>)}
      </ol>

      <p>
        Так как мы ешё не заполнили свои дневники, то настоятельно рекомендую начать это делать как можно скорее.
        Дневник
        практики
        поможет вам не только отслеживать свой прогресс и достижения, но и задуматься о том, как можно улучшить свои
        навыки и опыт. В дневнике можно отмечать свои ежедневные достижения, прогресс и заметки, которые могут
        пригодиться
        в будущем. Кроме того, дневник поможет вам лучше понять свои сильные и слабые стороны и разработать план
        действий
        для улучшения своих навыков и достижения лучших результатов в будущем.
      </p>
    </div>,
    schedule: <Schedule data={defineSchedule(1)}/>,
    footer: "Учебная практика также помогает студентам лучше понять самих себя как педагогов, развивать свои качества и преодолевать сложности в работе с учениками."
  },
  {
    id: 5,
    day: "23 февраля",
    image: Sheravgan,
    blockquote: <Blockquote text="Как 23 февраля встретишь, так 8 марта и проведёшь!"/>,
    desc: <div className="drop-shadow-2xl flex flex-col gap-8 mb-12">
      <p className="text-start shadow-blue-500 shadow-2xl border-4 border-indigo-700 px-2 py-4">В школе начались
        празднования
        23 февраля. Ученики и учителя украсили классы и коридоры, а на уроках проходят
        интересные мероприятия. Вместо обычных уроков проходят квесты, викторины и игры, которые помогают ученикам лучше
        усвоить материал и развивать командный дух. Учителя также готовят поздравления для учеников и желают им счастья,
        здоровья и успехов. Праздник продолжается и создает позитивную атмосферу в школе перед окончанием
        педагогическо-учебной практики по физике.
      </p>

      <p className="text-start shadow-blue-500 shadow-2xl border-4 border-indigo-700 px-2 py-4">
        23 февраля – это праздник, который традиционно отмечается в России и некоторых других странах. А в Таджикистане
        в этот день образовалась таджикская армия и сегодня страна праздновало 30 летие образования таджикской армии.
        Этот день посвящен защитникам Отечества и символизирует мужество, силу и настойчивость. Хуршед Бадриддинович,
        вероятно, решил порадовать Шерафгана подарком в честь этого дня – пончиком. Казалось бы, что может быть более
        простого и неособенного, но даже такой небольшой жест может создать позитивное настроение и поднять настроение.
      </p>
    </div>,
    image2: Noza,
    blockquote2: <div className="mt-12 flex flex-col gap-6 text-start">
      <p>Ноза, ученица 11 класса, сегодня получила свою заслуженную грамоту за первое место в школьной олимпиаде по
        физике.
        Это великолепное достижение, которое отражает упорный труд, настойчивость и знания, которыми Ноза обладает.
      </p>
      <p>
        Физика – это наука, которая требует серьезных знаний и понимания, чтобы достичь высоких результатов. Школьная
        олимпиада – это не только отличный способ проверить знания учеников, но и мотивирующий фактор, который
        стимулирует их к изучению науки и достижению успехов.
      </p>
      <p>Ноза, несомненно, продемонстрировала свой высокий уровень подготовки и умения применять знания в реальной
        жизни. Ее труд и настойчивость принесли заслуженную награду – первое место в олимпиаде. Награда в виде грамоты –
        это не только признание достижений Нозы, но и стимул для нее продолжать изучение физики и достижение новых
        высот.
      </p>
      <p>
        Такие достижения, как у Нозы, не только важны для личного развития и достижения успеха в учебе, но и для
        развития общества в целом. Ведь сегодняшние талантливые ученики могут стать учеными, инженерами или
        изобретателями, которые сделают важные научные открытия и разработки в будущем.
      </p>
      <p>
        Так что поздравляем Нозу с ее заслуженным успехом и желаем ей дальнейших достижений в учебе и жизни. Надеемся,
        что ее пример вдохновит других учеников изучать физику и стремиться к достижению новых высот в науке.
      </p>
    </div>,
    schedule: <Schedule data={defineSchedule(4)}/>
  },
  {
    id: 6,
    day: "Последний день",
    image: Mahina,
    blockquote: <Blockquote
        text="Закончив педагогическую практику, ты понимаешь, что прожитые дни были неповторимыми."/>,
    desc: <div className="drop-shadow-2xl text-start flex flex-col gap-8 mb-12">
      <h2>Приветствую всех!</h2>
      <p>
        Вместе со школьниками мы пережили множество занимательных уроков, экспериментов и различных научных открытий.
        Наша группа была сплоченной командой, где каждый находил свое место и вносил свой вклад в общее дело.
      </p>
      <p>
        В особенности, мне запомнится Махинахон, с которой мы вместе проходили пары. Ведь она стала для меня не только
        коллегой, но и настоящей подругой. Мы будем по нее скучать и помнить всегда.
      </p>
      <p>
        Но больше всего нам будет не хватать учеников 8 "В" класса. Ведь каждый из них был особенным, каждый со своей
        историей и индивидуальными достижениями. Они приносили свежие впечатления на каждом уроке, заставляли улыбаться
        и вдохновляли на дальнейшие достижения.
      </p>
      <p>
        Как же теперь не вспомнить, что все эти уроки проходили в стенах школы. Это место, где ты встретил своих
        учеников, где создавалась атмосфера научного творчества, где раскрывались новые таланты и возможности. Это было
        место, где мы с Махинахоном создавали чудеса и делали первые шаги на пути к просвещению.
      </p>

      <p>
        Хочу пожелать школе (СОШ РТСУ) процветания и развития, а старшеклассникам - успехов в их научных начинаниях и
        будущих достижениях. Пусть они станут настоящими лидерами в науке и культуре, а школа - местом, где будут
        раскрываться новые грани их талантов и возможностей.
      </p>

      <p>
        Так давайте же вспомним эти замечательные дни, которые были наполнены трудом и усердием, дружбой и
        взаимопониманием, научными открытиями и знаниями, которые будут сопровождать вас всю жизнь.
      </p>
      <Slider/>
    </div>,
  }
];

const Main = () => {
  const {width, height} = useWindowSize()

  return (
      <div className="mt-2 dark:text-white text-slate-500 grid place-items-center justify-center text-center">
        <p data-aos="fade-up">Это наш <span className="font-bold italic">"ДОРОГОЙ ДНЕВНИК"</span> где мы будем
          выкладывать все, что проходили на практике. <span
              className="text-3xl">🧑🏻‍🏫</span></p>
        <p data-aos="fade-up">Будет интересно, погнали <span className="text-4xl">🫶🏻</span></p>
        <section>
          {posts.map(el => <Post key={el.id} post={el}/>)}
          <Confetti width={width - 50} height={height}/>
        </section>
      </div>
  );
};

export default Main;