import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

// React-icons:
import { FaCaretDown } from 'react-icons/fa';
import { FaCaretUp } from 'react-icons/fa';
import { GiThermometerHot } from 'react-icons/gi';

// State:
import {
  selectWeatherForecastSlice,
  selectFiveDaysForecast,
  setIsForecastDetailsViewOn,
  setSelectedForecastDayIndex,
} from '../../../../redux/slices/weatherForecastSlice';

// Types:
import { AppDispatch } from '../../../../redux/store';

// Ui:
import DetailedFiveDaysForecast from '../Detailed/DetailedFiveDaysForecast';

// --------------------------- Прогноз погоды на 5 дней (общий): ---------------------------
const GeneralFiveDaysForecast = () => {
  const fiveDaysGeneralForecast = useSelector(selectFiveDaysForecast);
  const isForecastDetailsViewOn = useSelector(
    selectWeatherForecastSlice
  ).isForecastDetailsViewOn;

  return (
    <section className="p-2 text-[#e0e0e0] text-sm text-shadow-sm bg-white/20 rounded-sm sm:p-4">
      <h2 className="pb-2 font-semibold text-xl text-center border-b-2 border-b-blue-800/20 sm:text-2xl">
        Прогноз погоды на 5 дней:
      </h2>

      {isForecastDetailsViewOn ? (
        <DetailedFiveDaysForecast />
      ) : (
        <ul className="min-h-[310px] mt-2 flex flex-col gap-2">
          {fiveDaysGeneralForecast.length > 0 ? (
            fiveDaysGeneralForecast.map((elem, index) => {
              return (
                <GeneralFiveDaysForecastElem
                  index={index}
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
      )}
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
  index: number;
}

const GeneralFiveDaysForecastElem: React.FC<
  GeneralFiveDaysForecastElemProps_Type
> = (props: GeneralFiveDaysForecastElemProps_Type) => {
  const dispatch: AppDispatch = useDispatch();

  const { currentDay, weatherIcon, temp, weatherDescription, index } = props;

  // Переключение вида детализации о суточной погоде (общий / подробный):
  const handleSetIsForecastDetailsViewAndDayIndex = () => {
    dispatch(setIsForecastDetailsViewOn(true));
    dispatch(setSelectedForecastDayIndex(index));
  };

  return (
    <li
      className="p-2 rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)] cursor-pointer sm:text-lg sm:p-4"
      onClick={() => {
        handleSetIsForecastDetailsViewAndDayIndex();
      }}
      title="Детализация"
    >
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
