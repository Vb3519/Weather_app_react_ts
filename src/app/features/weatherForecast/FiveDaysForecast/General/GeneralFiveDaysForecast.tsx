import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

// React-icons:
import { FaCaretDown } from 'react-icons/fa';
import { FaCaretUp } from 'react-icons/fa';
import { GiThermometerHot } from 'react-icons/gi';

// State:
import { selectFiveDaysForecast } from '../../../../redux/slices/weatherForecastSlice';

// --------------------------- Прогноз погоды на 5 дней (общий): ---------------------------
const GeneralFiveDaysForecast = () => {
  const fiveDaysGeneralForecast = useSelector(selectFiveDaysForecast);

  return (
    <section className="p-2 text-[#e0e0e0] text-sm text-shadow-sm bg-white/20 rounded-sm">
      <h2 className="pb-2 font-semibold text-xl text-center border-b-2 border-b-blue-800/20">
        Прогноз погоды на 5 дней:
      </h2>
      <ul className="mt-2 flex flex-col gap-2">
        {fiveDaysGeneralForecast ? (
          fiveDaysGeneralForecast.map((elem) => {
            return (
              <GeneralFiveDaysForecastElem
                key={uuidv4()}
                currentDay={elem.currentDayValue}
                weatherIcon={elem.weatherIcon}
                temp={elem.avgTemp}
                weatherDescription={elem.weatherDescription}
              />
            );
          })
        ) : (
          <GiThermometerHot className="m-auto h-[80%] text-8xl opacity-50" />
        )}
      </ul>
    </section>
  );
};

export default GeneralFiveDaysForecast;

// Элемент-переключатель (кнопка) 5ти дневного прогноза погоды (с общего вида на детализированный):
// ---------------------------------------------------------------------------------------------------------
interface GeneralFiveDaysForecastElemProps_Type {
  currentDay: string;
  weatherIcon: string;
  temp: number;
  weatherDescription: string;
}

const GeneralFiveDaysForecastElem: React.FC<
  GeneralFiveDaysForecastElemProps_Type
> = (props: GeneralFiveDaysForecastElemProps_Type) => {
  const { currentDay, weatherIcon, temp, weatherDescription } = props;

  return (
    <li className="p-2 rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)] cursor-pointer">
      <button className="w-full flex items-center gap-2 cursor-pointer">
        <span>{currentDay}</span>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
            alt="weather 5-day forecast state"
          ></img>
        </div>
        <span>{temp}°С</span>
        <span className="ml-auto text-right">{weatherDescription}</span>
        <div>
          <FaCaretDown />
        </div>
      </button>
    </li>
  );
};
