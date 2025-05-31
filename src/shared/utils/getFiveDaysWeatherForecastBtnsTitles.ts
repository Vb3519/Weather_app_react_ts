// Сокращенные названия дней и месяцев для детальной информации в 5-ти дневном прогнозе погоды:
const shortYearMonths = [
  { name: 'Янв', days: 31, month_index: 0 },
  { name: 'Фев', days: 28, month_index: 1 },
  { name: 'Март', days: 31, month_index: 2 },
  { name: 'Апр', days: 30, month_index: 3 },
  { name: 'Май', days: 31, month_index: 4 },
  { name: 'Июнь', days: 30, month_index: 5 },
  { name: 'Июль', days: 31, month_index: 6 },
  { name: 'Авг', days: 31, month_index: 7 },
  { name: 'Сент', days: 30, month_index: 8 },
  { name: 'Окт', days: 31, month_index: 9 },
  { name: 'Нояб', days: 30, month_index: 10 },
  { name: 'Дек', days: 31, month_index: 11 },
];

const shortWeekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

// Types:
export interface DayDataProps_Type {
  currentDayValue: string;
  currentDateValue: number;
  currentMonthValue: string;
}

function getFiveDaysWeatherForecastBtnsTitles() {
  const timeNow = new Date();

  let currentDate = timeNow.getDate();
  let currentDay = timeNow.getDay();

  let currentMonth = timeNow.getMonth();

  const forecastDaysBtnsTitles: DayDataProps_Type[] = [];

  let currentMonthObj = shortYearMonths.find(
    (monthObj) => monthObj.month_index === currentMonth
  );

  let currentMonthMaxDays = currentMonthObj?.days;

  const dayDataToRender = {
    currentDayValue: '',
    currentDateValue: 0,
    currentMonthValue: '',
  };

  function setDayDataToRenderPropValues() {
    dayDataToRender.currentDayValue = shortWeekDays[currentDay];
    dayDataToRender.currentDateValue = currentDate;
    dayDataToRender.currentMonthValue = shortYearMonths[currentMonth].name;

    forecastDaysBtnsTitles.push({ ...dayDataToRender });

    if (currentDay < 6) {
      currentDay = currentDay + 1;
    } else {
      currentDay = 0;
    }
  }

  // Всего в прогнозе 5 дней:
  for (let i = 0; i < 5; i++) {
    if (currentMonthMaxDays === currentDate) {
      setDayDataToRenderPropValues();

      // Если последний день месяца, то переход на первое число следующего месяца и далее:
      currentDate = 1;
      currentMonth = currentMonth + 1;
    } else {
      setDayDataToRenderPropValues();

      currentDate = currentDate + 1;
    }
  }

  console.log('Данные для кнопок-переключателей:', forecastDaysBtnsTitles);
  return forecastDaysBtnsTitles;
}

export default getFiveDaysWeatherForecastBtnsTitles;
