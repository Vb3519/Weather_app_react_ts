import { useSelector, useDispatch } from 'react-redux';

// React-icons:
import { FaRegQuestionCircle } from 'react-icons/fa';

// Ui:
import WeatherQueryHistoryEmptyElem from './WeatherQueryHistoryEmptyElem';

// Types:
import { AppDispatch } from '../../redux/store';
import { WeatherQuery_Type } from '../../redux/slices/weatherQuerySlice';

// State:
import {
  toggleHistoryMenuVisibility,
  selectWeatherQueryHistory,
} from '../../redux/slices/weatherQuerySlice';

const WeatherQueryHistory = () => {
  const dispatch: AppDispatch = useDispatch();

  const weatherQueryHistory = useSelector(selectWeatherQueryHistory);

  const filledHistory: WeatherQuery_Type[] = [];

  for (let i = 0; i < 4; i++) {
    filledHistory.push(weatherQueryHistory[i] ?? null); // работа только с null и undefined, как || со всеми falsy-значениями
  }

  // Функция-тоглер отображения меню запросов о погоде:
  // ----------------------------------------------------------
  const handleToggleHistoryMenyVisibility = () => {
    dispatch(toggleHistoryMenuVisibility());
  };

  return (
    <section
      className="p-2 absolute w-full h-full flex flex-col gap-2 items-center justify-center text-[#e0e0e0] text-shadow-sm z-10 bg-black/80 xs:px-4 sm:px-16 md:px-24 lg:px-30 xl:px-36 2xl:px-46"
      onClick={() => {
        handleToggleHistoryMenyVisibility();
      }}
    >
      <h2 className="font-semibold text-xl text-center">История запросов:</h2>
      <ul className="mx-auto grid grid-cols-2 gap-2 items-center justify-center">
        {filledHistory.map((elem, index) => {
          return elem ? (
            <WeatherQueryHistoryDataElem
              key={elem.id}
              cityName={elem.cityName}
              weather_icon={elem.weather_icon}
              temp={elem.temp}
            />
          ) : (
            <WeatherQueryHistoryEmptyElem key={index} />
          );
        })}
      </ul>
    </section>
  );
};

export default WeatherQueryHistory;

// Компонент с данными погоды в запрошенном городе:
// --------------------------------------------------------
interface WeatherQueryHistoryDataElemProps_Type {
  cityName: string;
  weather_icon: string;
  temp: number;
}

const WeatherQueryHistoryDataElem: React.FC<
  WeatherQueryHistoryDataElemProps_Type
> = ({ cityName, weather_icon, temp }) => {
  return (
    <li className="h-full p-2 flex flex-col gap-2 items-center justify-center rounded-sm bg-[#20785f] cursor-pointer sm:text-lg sm:p-4">
      <h3 className="text-center">{cityName}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${weather_icon}.png`}
        alt="weather state"
      ></img>
      <p>{temp}°С</p>
    </li>
  );
};

{
  /* <li className="h-full min-h-32 p-2 flex flex-col gap-2 items-center justify-center rounded-sm bg-[#20785f] cursor-pointer sm:text-lg sm:p-4">
  <h3 className="text-center">Название города</h3>
  <img
    src={`http://openweathermap.org/img/wn/02d.png`}
    alt="weather state"
  ></img>
  <p>15°С</p>
</li>; */
}
