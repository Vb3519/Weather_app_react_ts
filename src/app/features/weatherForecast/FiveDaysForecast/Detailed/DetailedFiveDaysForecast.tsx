import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

// React-icons:
import { FaWind } from 'react-icons/fa';
import { FaDroplet } from 'react-icons/fa6';
import { MdVisibility } from 'react-icons/md';

import { FaCaretDown } from 'react-icons/fa';
import { FaCaretUp } from 'react-icons/fa';

// Types:
import { AppDispatch } from '../../../../redux/store';

// State:
import {
  selectWeatherForecastSlice,
  selectFiveDaysForecastBtnsTitles,
  selectFiveDaysForecast,
  setIsForecastDetailsViewOn,
  setSelectedForecastDayIndex,
} from '../../../../redux/slices/weatherForecastSlice';

// --------------------------- Прогноз погоды на 5 дней (детализация): ---------------------------
const DetailedFiveDaysForecast = () => {
  const dispatch: AppDispatch = useDispatch();

  const forecastBtnsTitles = useSelector(selectFiveDaysForecastBtnsTitles);

  const selectedDayIndex: number = useSelector(
    selectWeatherForecastSlice
  ).selectedForecastDayIndex;

  const fiveDaysGeneralForecast = useSelector(selectFiveDaysForecast);
  const isForecastDetailsViewOn = useSelector(
    selectWeatherForecastSlice
  ).isForecastDetailsViewOn;

  // Выключение детализированного вида прогноза погоды:
  const handleTurnOffForecastDetailsView = () => {
    dispatch(setIsForecastDetailsViewOn(false));
  };

  return (
    <>
      {fiveDaysGeneralForecast.length > 0 && isForecastDetailsViewOn ? (
        <>
          <div className="flex items-center gap-2 overflow-x-auto">
            <div className="flex items-center gap-2">
              <ul className="my-2 w-full flex gap-2 text-nowrap">
                {forecastBtnsTitles?.map((elem, index) => {
                  return (
                    <ForecastTitleElem
                      key={uuidv4()}
                      index={index}
                      day={elem.currentDayValue}
                      date={elem.currentDateValue}
                      month={elem.currentMonthValue}
                    />
                  );
                })}
              </ul>
              <div
                className="cursor-pointer"
                onClick={() => {
                  handleTurnOffForecastDetailsView();
                }}
              >
                <FaCaretUp />
              </div>
            </div>
          </div>

          {/* --------------------------- Прогноз погоды на 5 дней (детали погоды): --------------------------- */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2">
              <div>
                <img
                  src={`http://openweathermap.org/img/wn/${fiveDaysGeneralForecast[selectedDayIndex].weatherIcon}.png`}
                  alt="weather 5-day forecast state"
                ></img>
              </div>
              <span className="font-semibold text-[16px]">
                {fiveDaysGeneralForecast[selectedDayIndex].weatherDescription}
              </span>
            </div>

            <ul className="flex flex-col gap-1 items-center">
              <li>
                Максимальная темп:{' '}
                {fiveDaysGeneralForecast[selectedDayIndex].maxTemp}
                °С
              </li>
              <li>
                Минимальная темп:{' '}
                {fiveDaysGeneralForecast[selectedDayIndex].minTemp}°С
              </li>
            </ul>

            <ul className="pt-3 flex gap-2 text-[#e0e0e0] border-t-2 border-t-blue-200/20">
              <li className="flex flex-col items-center justify-center gap-1 basis-1/3">
                <div
                  className="p-2 bg-[#86959d] rounded-sm shadow-sm cursor-pointer"
                  title="Скорость ветра"
                >
                  <FaWind className="text-xl text-[whitesmoke]" />
                </div>
                <span className="text-sm">
                  {fiveDaysGeneralForecast[selectedDayIndex].wind} м/с
                </span>
              </li>
              <li className="flex flex-col items-center justify-center gap-1 basis-1/3">
                <div
                  className="p-2 bg-[#86959d] rounded-sm shadow-sm cursor-pointer"
                  title="Влажность"
                >
                  <FaDroplet className="text-xl text-[whitesmoke]" />
                </div>
                <span className="text-sm">
                  {fiveDaysGeneralForecast[selectedDayIndex].humidity}%
                </span>
              </li>
              <li className="flex flex-col items-center justify-center gap-1 basis-1/3">
                <div
                  className="p-2 bg-[#86959d] rounded-sm shadow-sm cursor-pointer"
                  title="Видимость"
                >
                  <MdVisibility className="text-xl text-[whitesmoke]" />
                </div>
                <span className="text-sm">
                  {fiveDaysGeneralForecast[selectedDayIndex].visibility} км
                </span>
              </li>
            </ul>
          </div>
        </>
      ) : null}
    </>
  );
};

export default DetailedFiveDaysForecast;

interface ForecastTitleElemProps_Types {
  day: string;
  date: number;
  month: string;
  index: number;
}

const ForecastTitleElem: React.FC<ForecastTitleElemProps_Types> = (props) => {
  const { day, date, month, index } = props;

  const dispatch = useDispatch();

  const selectedDayIndex: number | null = useSelector(
    selectWeatherForecastSlice
  ).selectedForecastDayIndex;

  // Выбор индекса элемента-дня (из 5ти дневного прогноза погоды) для просмотра детальной информации:
  const handleSetSelectedForecastDayIndex = () => {
    if (selectedDayIndex === index) {
      dispatch(setIsForecastDetailsViewOn(false));
      return;
    }

    dispatch(setSelectedForecastDayIndex(index));
  };

  return (
    <li
      className={`p-2 cursor-pointer rounded-sm transition duration-200 ease-in hover:bg-white/15 hover:[box-shadow:0_4px_10px_rgba(0,0,0,0.15)] ${
        selectedDayIndex === index
          ? 'bg-white/15 [box-shadow:0_4px_10px_rgba(0,0,0,0.15)]'
          : ''
      }`}
      onClick={() => {
        handleSetSelectedForecastDayIndex();
      }}
    >
      {`${day}, ${date} ${month}`}
    </li>
  );
};
