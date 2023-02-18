import React from "react";

export const Schedule = ({title = "Расписание", data = []}) => {
  return (
      <div>
        <h5
            className="font-bold text-xl dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-green-500 dark:via-purple-500 dark:to-yellow-500 dark:text-white text-slate-500"
            data-aos="fade-in"
        >
          {title}
        </h5>
        <table className="border-collapse border border-slate-400 w-full">
          <thead>
          <tr>
            <th className="border border-slate-300 ..." data-aos="fade-up">Предмет</th>
            <th className="border border-slate-300 ..." data-aos="fade-up">Время</th>
          </tr>
          </thead>
          <tbody>
          {data?.map((el, index) => <tr key={index}>
            <td className="border border-slate-300 ...">{el?.lesson}</td>
            <td className="border border-slate-300 ...">{el?.time}</td>
          </tr>)}
          </tbody>
        </table>
      </div>
  )
}
