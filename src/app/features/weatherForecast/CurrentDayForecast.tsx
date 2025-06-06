import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

// State:
import { selectWeatherForecastSlice } from '../../redux/slices/weatherForecastSlice';

// Types:
import { AppDispatch } from '../../redux/store';
import { ThreeHoursWeatherData_Type } from '../../../shared/utils/extractDailyWeatherForecast';

// UI:
import EmptyCurrentDayForecast from './EmptyCurrentDayForecast';

// --------------------------- Погода на ближайшие 12 часов: ---------------------------
const CurrentDayForecast = () => {
  const dispatch = useDispatch();

  const weatherForecastState = useSelector(selectWeatherForecastSlice);
  const currentDayForecastData: null | ThreeHoursWeatherData_Type[] =
    weatherForecastState.currentDayForecast;

  return (
    <section className="p-2 text-[#e0e0e0] text-sm text-shadow-sm bg-white/20 rounded-sm sm:p-4">
      <ul className="flex gap-1 items-center justify-between">
        {currentDayForecastData ? (
          currentDayForecastData.map((elem: ThreeHoursWeatherData_Type) => {
            return (
              <CurrentDayForecastPart
                key={uuidv4()}
                time={elem.time}
                temp={elem.temp}
                icon={elem.icon}
              />
            );
          })
        ) : (
          <EmptyCurrentDayForecast />
        )}
      </ul>
    </section>
  );
};

// Компонент-часть прогноза погоды на ближайшие 12 часов:
// ------------------------------------------------------------------
interface CurrentDayForecastPartProps_Type {
  time: string;
  icon: string;
  temp: number | null;
}

const CurrentDayForecastPart: React.FC<CurrentDayForecastPartProps_Type> = ({
  time,
  icon,
  temp,
}) => {
  // const { time, icon, temp } = props;

  return (
    <li className="p-1 flex flex-col items-center justify-center gap-1 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)] sm:text-lg sm:p-4">
      <p>{time}</p>
      <img
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt="weather state"
      ></img>
      <p>{temp}°С</p>
    </li>
  );
};

export default CurrentDayForecast;
