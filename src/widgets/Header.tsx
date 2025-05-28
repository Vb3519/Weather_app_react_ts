import { useDispatch, useSelector } from 'react-redux';

// React-Icons:
import { MdOutlineSegment } from 'react-icons/md';
import { FaMagnifyingGlass } from 'react-icons/fa6';

// State:
import {
  selectCurrentWeatherSlice,
  setCityName,
  getCurrentWeatherData,
} from '../app/redux/slices/currentWeatherSlice';

import {
  setCurrentDayForecastData,
  selectWeatherForecastSlice,
  getGeneralWeatherForecast,
} from '../app/redux/slices/weatherForecastSlice';

// Types:
import { AppDispatch } from '../app/redux/store';

// Utils:
import extractDailyWeatherForecast from '../shared/utils/extractDailyWeatherForecast';

const Header = () => {
  const dispatch: AppDispatch = useDispatch();

  const currentWeatherState = useSelector(selectCurrentWeatherSlice);
  const cityName: string = currentWeatherState.cityName;

  // Установка значения названия города (для прогноза погоды):
  // --------------------------------------------------------------
  const handleSetCityName = (cityNameVal: string) => {
    dispatch(setCityName(cityNameVal));
  };

  // Загрузка данных по прогнозу погоды:
  // --------------------------------------------------------------
  const handleGetWeatherData = () => {
    if (cityName) {
      // Текущий прогноз погоды:
      dispatch(getCurrentWeatherData({ cityName }));

      // Долгосрочный (сутки и 5 дней) прогноз погоды:
      dispatch(getGeneralWeatherForecast({ cityName }));
    } else {
      alert('Пожалуйста укажите название города!');
    }
  };

  return (
    <header className="w-full p-2 font-[inter] flex justify-between items-center gap-4 xs:px-4">
      <button className="p-2 text-[whitesmoke] bg-white/20 rounded-sm cursor-pointer">
        <MdOutlineSegment className="text-2xl" />
      </button>

      <form className="w-full p-2 flex gap-2 justify-center items-center bg-[whitesmoke] rounded-sm">
        <button
          disabled={currentWeatherState.isLoadingViaAPI}
          className="text-gray-500 text-xl cursor-pointer"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();

            handleGetWeatherData();
          }}
        >
          <FaMagnifyingGlass />
        </button>

        <input
          disabled={currentWeatherState.isLoadingViaAPI}
          value={cityName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const cityName: string = event.target.value;

            handleSetCityName(cityName);
          }}
          className="outline-none w-full"
          placeholder="Название города..."
          type="text"
        />
      </form>
    </header>
  );
};

export default Header;
