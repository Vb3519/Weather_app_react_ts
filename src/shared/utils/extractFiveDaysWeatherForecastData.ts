import {
  GeneralWeatherForecast_Type,
  WeatherForecastDay_Type,
} from '../../app/features/weatherForecast/weatherForecastTypes';

const shortWeekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

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

export interface DayWeatherParams_Type {
  // день недели:
  currentDayValue: string;

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
export const extractWeatherForecastDataToRender = (
  generalWeatherForecast: GeneralWeatherForecast_Type
) => {
  const timeNow = new Date();

  let currentDayIndex: number = timeNow.getDay();

  // массив разделен на 5 массивов (отдельно под каждые сутки):
  const forecastSplittedPerDay = splitGeneralWeatherForecast(
    generalWeatherForecast
  );

  const everyDayWeatherForecastToRender: DayWeatherParams_Type[] = [];

  forecastSplittedPerDay.forEach((dayForecast) => {
    const dayWeatherParams: DayWeatherParams_Type = {
      currentDayValue: '',

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
      dayWeatherParams.currentDayValue = shortWeekDays[currentDayIndex];
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

    if (currentDayIndex < 6) {
      currentDayIndex = currentDayIndex + 1;
    } else {
      currentDayIndex = 0;
    }
  });

  return everyDayWeatherForecastToRender;
};

// Расчет усредненной дневной температуры:
const calcAverageDayTemp = (dayForecast: WeatherForecastDay_Type[]): number => {
  let dayTempValues: number = 0;

  dayForecast.forEach((elem) => {
    dayTempValues += elem.main.temp;
  });

  const avgTemp: number = Math.floor(dayTempValues / dayForecast.length);

  return avgTemp;
};
