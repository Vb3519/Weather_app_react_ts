import { useSelector } from 'react-redux';

// React-icons:
import { FaWind } from 'react-icons/fa';
import { FaDroplet } from 'react-icons/fa6';
import { MdVisibility } from 'react-icons/md';

// State:
import { selectCurrentWeatherSlice } from '../../redux/slices/currentWeatherSlice';

// Types:
import { CurrentWeatherData_Type } from './currentWeatherTypes';

// Ui:
import EmptyCurrentWeather from './EmptyCurrentWeather';

// Utils:
import { getCurrentDate } from '../../../shared/utils/getCurrentDate';

// --------------------------- Текущая погода: ---------------------------
const CurrentWeather = () => {
  const currentWeatherState = useSelector(selectCurrentWeatherSlice);

  const currentWeatherData: CurrentWeatherData_Type | null =
    currentWeatherState.weatherData;

  if (currentWeatherData && currentWeatherData.weather) {
    const currentDate: string = getCurrentDate();

    return (
      <section className="p-2 text-[#e0e0e0] text-shadow-sm flex flex-col gap-1 bg-white/20 rounded-sm sm:text-xl sm:gap-2 sm:p-4">
        <h2 className="font-semibold text-xl text-center sm:text-2xl">
          {currentWeatherData.name}
        </h2>
        <p>
          <span>{currentDate}</span>
        </p>
        <p className="font-semibold text-lg sm:text-xl">
          {currentWeatherData.main.temp}°С
        </p>
        <p>Ощущается как {currentWeatherData.main.feels_like}°С</p>

        <ul className="flex gap-2 items-center justify-start">
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}.png`}
              alt="weather state"
            ></img>
          </li>
          <li>{currentWeatherData.weather[0].description}</li>
        </ul>

        <ul className="pt-3 flex gap-2 text-[#e0e0e0] border-t-2 border-t-blue-200/20">
          <li className="flex flex-col items-center justify-center gap-1 basis-1/3">
            <div
              className="p-2 bg-[#86959d] rounded-sm shadow-sm cursor-pointer sm:p-3"
              title="Скорость ветра"
            >
              <FaWind className="text-xl text-[whitesmoke] sm:text-2xl" />
            </div>
            <span className="text-sm sm:text-xl">
              {currentWeatherData.wind.speed} м/с
            </span>
          </li>
          <li className="flex flex-col items-center justify-center gap-1 basis-1/3">
            <div
              className="p-2 bg-[#86959d] rounded-sm shadow-sm cursor-pointer sm:p-3"
              title="Влажность"
            >
              <FaDroplet className="text-xl text-[whitesmoke] sm:text-2xl" />
            </div>
            <span className="text-sm sm:text-xl">
              {currentWeatherData.main.humidity}%
            </span>
          </li>
          <li className="flex flex-col items-center justify-center gap-1 basis-1/3">
            <div
              className="p-2 bg-[#86959d] rounded-sm shadow-sm cursor-pointer sm:p-3"
              title="Видимость"
            >
              <MdVisibility className="text-xl text-[whitesmoke] sm:text-2xl" />
            </div>
            <span className="text-sm sm:text-xl">
              {currentWeatherData.visibility / 1000} км
            </span>
          </li>
        </ul>
      </section>
    );
  }

  return <EmptyCurrentWeather />;
};
export default CurrentWeather;
