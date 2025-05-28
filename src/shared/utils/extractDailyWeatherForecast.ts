import {
  GeneralWeatherForecast_Type,
  WeatherForecastDay_Type,
} from '../../app/features/weatherForecast/weatherForecastTypes';

interface threeHoursWeatherData_Type {
  time: string;
  temp: number | null;
  icon: string;
}

// Данные для рендера информации о прогнозе погоды на ближайшие 12 часов (шаг 3 часа):
const extractDailyWeatherForecast = (
  generalWeatherForecast: GeneralWeatherForecast_Type
) => {
  // Первые 5 элементов массива (это ближайшие 12 часов) данных о прогнозе погоды:
  const dailyWeatherForecastData: WeatherForecastDay_Type[] =
    generalWeatherForecast.list.slice(0, 5);

  const dailyWeatherForecastDataToRender: threeHoursWeatherData_Type[] = [];

  const threeHoursWeatherData: threeHoursWeatherData_Type = {
    time: '',
    temp: null,
    icon: '',
  };

  dailyWeatherForecastData.forEach((elem) => {
    if (elem.weather) {
      threeHoursWeatherData.time = elem.dt_txt.slice(-8, -3);
      threeHoursWeatherData.temp = elem.main.temp;
      threeHoursWeatherData.icon = elem.weather[0].icon;
    }

    // нужен spread-оператор, чтобы пушить в массив объекты с разными данными (т.к. иначе идет копирование по ссылке):
    dailyWeatherForecastDataToRender.push({ ...threeHoursWeatherData });
  });

  console.log(
    'Данные для рендера суточной погоды:',
    dailyWeatherForecastDataToRender
  );

  return dailyWeatherForecastDataToRender;
};

export default extractDailyWeatherForecast;
