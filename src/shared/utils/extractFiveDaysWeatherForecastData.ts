import {
  GeneralWeatherForecast_Type,
  WeatherForecastDay_Type,
} from '../../app/features/weatherForecast/weatherForecastTypes';

// Разделение массива данных от Api с 40 элементами на подмассивы (посуточные данные):
const splitGeneralWeatherForecast = (
  weatherForecastData: GeneralWeatherForecast_Type
) => {
  const splittedGeneralWeatherForecast = [];

  const weatherForecastDaysList = weatherForecastData.list;

  for (let i = 0; i < weatherForecastDaysList.length; i += 8) {
    const part = weatherForecastDaysList.slice(i, i + 8);

    splittedGeneralWeatherForecast.push(part);
  }

  return splittedGeneralWeatherForecast;
};

interface DayWeatherParams_Type {
  // данные для рендера общего 5ти дневного прогноза:
  avgTemp: number;
  weatherIcon: string;
  weatherDescription: string;

  // данные для ренедера детализации:
  maxTemp: number;
  minTemp: number;
  wind: number;
  humidity: number;
  visibility: number;
}

// Извлечение данных для ренедра из данных полученных от Api:
const extractWeatherForecastDataToRender = (
  generalWeatherForecast: GeneralWeatherForecast_Type
) => {
  // массив разделен на 5 массивов (отдельно под каждые сутки):
  const forecastSplittedPerDay = splitGeneralWeatherForecast(
    generalWeatherForecast
  );

  const everyDayWeatherForecastToRender: DayWeatherParams_Type[] = [];

  forecastSplittedPerDay.forEach((dayForecast) => {
    const dayWeatherParams: DayWeatherParams_Type = {
      avgTemp: 0,
      weatherIcon: '',
      weatherDescription: '',

      maxTemp: 0,
      minTemp: 0,
      wind: 0,
      humidity: 0,
      visibility: 0,
    };

    if (dayForecast[3].weather) {
      dayWeatherParams.avgTemp = calcAverageDayTemp(dayForecast);
      dayWeatherParams.weatherIcon = dayForecast[3].weather[0].icon;
      dayWeatherParams.weatherDescription =
        dayForecast[3].weather[0].description;

      dayWeatherParams.maxTemp = dayForecast[3].main.temp_max;
      dayWeatherParams.minTemp = dayForecast[3].main.temp_min;
      dayWeatherParams.wind = dayForecast[3].wind.speed;
      dayWeatherParams.humidity = dayForecast[3].main.humidity;
      dayWeatherParams.visibility = dayForecast[3].visibility;
    }

    everyDayWeatherForecastToRender.push({ ...dayWeatherParams });
  });

  return everyDayWeatherForecastToRender;
};

// Расчет усредненной дневной температуры:
const calcAverageDayTemp = (dayForecast: WeatherForecastDay_Type[]): number => {
  let dayTempValues: number = 0;

  dayForecast.forEach((elem) => {
    dayTempValues += elem.main.temp;
  });

  const avgTemp: number = dayTempValues / dayForecast.length;

  return avgTemp;
};
