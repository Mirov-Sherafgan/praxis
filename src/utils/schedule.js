import * as dayjs from 'dayjs'

const schedule = {
  1: [
    {lesson: "Классный час", time: "8:00 - 8:45"},
    {lesson: "Труд", time: "08:50 - 09:35"},
    {lesson: "Физика", time: "09:45 - 10:30"},
    {lesson: "Алгебра", time: "10:40 - 11:25"},
    {lesson: "История Таджикского народа", time: "11:30 - 12:10"},
    {lesson: "ОБЖ", time: "12:15 - 13:00"}
  ],
  2: [
    {lesson: "География", time: "8:00 - 8:45"},
    {lesson: "Алгебра", time: "08:50 - 09:35"},
    {lesson: "Биология", time: "09:45 - 10:30"},
    {lesson: "Химия", time: "10:40 - 11:25"},
    {lesson: "Английский язык", time: "11:30 - 12:10"},
    {lesson: "Таджикский язык", time: "12:15 - 13:00"}
  ],
  3: [
    {lesson: "Химия", time: "8:00 - 8:45"},
    {lesson: "Английский язык", time: "08:50 - 09:35"},
    {lesson: "Физкультура", time: "09:45 - 10:30"},
    {lesson: "Алгебра", time: "10:40 - 11:25"},
    {lesson: "Русский язык", time: "11:30 - 12:10"},
    {lesson: "Литература", time: "12:15 - 13:00"}
  ],
  4: [
    {lesson: "Физика", time: "8:00 - 8:45"},
    {lesson: "География", time: "08:50 - 09:35"},
    {lesson: "ИОВТ", time: "09:45 - 10:30"},
    {lesson: "История", time: "10:40 - 11:25"},
    {lesson: "Физкультура", time: "11:30 - 12:10"},
    {lesson: "Геометрия", time: "12:15 - 13:00"}
  ],
  5: [
    {lesson: "Немецкий язык", time: "8:00 - 8:45"},
    {lesson: "Таджикский язык", time: "08:50 - 09:35"},
    {lesson: "Биология", time: "09:45 - 10:30"},
    {lesson: "Русский язык", time: "10:40 - 11:25"},
    {lesson: "Русский язык", time: "11:30 - 12:10"},
    {lesson: "Геометрия", time: "12:15 - 13:00"}
  ],
  6: [
    {lesson: "Родной язык", time: "8:00 - 8:45"},
    {lesson: "Литература", time: "08:50 - 09:35"},
    {lesson: "Английский язык", time: "09:45 - 10:30"},
    {lesson: "История", time: "10:40 - 11:25"},
    {lesson: "Общество", time: "11:30 - 12:10"},
  ]
};

export function defineSchedule(dayIndex) {
  if (dayIndex) {
    return schedule[dayIndex]
  }
  const currentDayIndex = dayjs().get("day")

  return schedule[currentDayIndex]
}