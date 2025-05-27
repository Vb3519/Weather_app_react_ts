const weekDays = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const yearMonths = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
];

export const getCurrentDate = () => {
  const currentDate = new Date();

  const date = currentDate.getDate();
  const dayIndex: number = currentDate.getDay();
  const monthIndex: number = currentDate.getMonth();

  return `${date} ${yearMonths[monthIndex]}, ${weekDays[dayIndex]}`;
};
