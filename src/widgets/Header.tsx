import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

// React-Icons:
import { MdOutlineSegment } from 'react-icons/md';
import { FaMagnifyingGlass } from 'react-icons/fa6';

// State:
import {
  setCityName,
  fetchCurrentWeatherData,
  selectCurrentWeatherSlice,
} from '../app/redux/slices/currentWeatherSlice';

// Types:
import { AppDispatch } from '../app/redux/store';
import { CurrentWeatherData_Type } from '../app/redux/slices/currentWeatherSlice';

const Header = () => {
  const dispatch: AppDispatch = useDispatch();

  const currentWeatherStateSlice = useSelector(selectCurrentWeatherSlice);
  const cityName: string = currentWeatherStateSlice.cityName;

  console.log('currentWeatherStateSlice:', currentWeatherStateSlice);

  const API_KEY: string = '0d7b538e37d8be8642a8f62cd18c61e3';
  const lang: string = 'ru';
  const measurementUnits: string = 'metric';
  const queryType: string[] = ['weather', 'forecast'];
  // `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=${lang}&units=${measurementUnits}`

  const handleSeteCityName = (cityNameVal: string) => {
    dispatch(setCityName(cityNameVal));
  };

  const handleFetchCurrentWeatherData = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('done');
      }, 2000);
    });

    try {
      const currentWeatherDataResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=${lang}&units=${measurementUnits}`
      );

      console.log('Данные о погоде:', currentWeatherDataResponse.data);
      dispatch(fetchCurrentWeatherData(currentWeatherDataResponse.data));

      return currentWeatherDataResponse.data;
    } catch (error: unknown) {
      console.log(`Error: ${(error as Error).message}`);
    } finally {
      dispatch(setCityName(''));
    }
  };

  return (
    <header className="w-full p-2 font-[inter] flex justify-between items-center gap-4">
      <button className="p-2 text-[whitesmoke] bg-white/20 rounded-sm cursor-pointer">
        <MdOutlineSegment className="text-2xl" />
      </button>

      <form className="w-full p-2 flex gap-2 justify-center items-center bg-[whitesmoke] rounded-sm">
        <button
          className="text-gray-500 text-xl cursor-pointer"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();

            handleFetchCurrentWeatherData();
          }}
        >
          <FaMagnifyingGlass />
        </button>
        <input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const cityName: string = event.target.value;
            handleSeteCityName(cityName);
          }}
          value={cityName}
          className="outline-none w-full"
          placeholder="Название города..."
          type="text"
        />
      </form>
    </header>
  );
};

export default Header;
