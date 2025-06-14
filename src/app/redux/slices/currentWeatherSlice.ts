import axios from 'axios';

import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Api:
import { getCurrentWeatherEndpointLink } from '../../../shared/config/apiData';

// Types:
import {
  CurrentWeatherData_Type,
  CurrentWeatherSlice_Type,
  CurrentWeatherState_Type,
} from '../../features/currentWeather/currentWeatherTypes';

// Utils:
import imitateFetchDataDelay from '../../../shared/utils/imitateFetchDataDelay';

// State:
import {
  addCityWeatherQuery,
  deleteWeatherQueryElem,
} from './weatherQuerySlice';

// Получение данных о текущей погоде по названию города:
// ------------------------------------------------------------
export const getCurrentWeatherData = createAsyncThunk(
  'currentWeather/getWeatherData',
  async (payload: { cityName: string }, thunkAPI) => {
    const { cityName } = payload;

    const url: string = getCurrentWeatherEndpointLink(cityName);

    // Имитация задержки ответа от сервера:
    await imitateFetchDataDelay(2000);

    try {
      const fetchWeatherDataResponse = await axios.get(url);
      const weatherData: CurrentWeatherData_Type =
        fetchWeatherDataResponse.data;

      // Добавление данных о запрощенной погоде (в историю запросов):
      if (weatherData.weather) {
        const weatherQueryData = {
          cityName: weatherData.name,
          weather_icon: weatherData.weather[0].icon,
          temp: weatherData.main.temp,
        };

        thunkAPI.dispatch(addCityWeatherQuery(weatherQueryData));

        thunkAPI.dispatch(incrementWeatherQueryCounter());
      }

      console.log('Текущая погода:', weatherData);
      return weatherData;
    } catch (error: unknown) {
      const errorMsg: string = `Error: ${(error as Error).message}`;
      console.log(errorMsg);

      // Сохраняем ошибку и потом выбрасываем ее (чтобы промис был rejected):
      thunkAPI.dispatch(setErrorMsg(errorMsg));
      return thunkAPI.rejectWithValue(errorMsg);
    }
  }
);

const initialState: CurrentWeatherState_Type = {
  cityName: '',
  weatherData: null,
  isLoadingViaAPI: false,
  errorMsg: '',
  weatherQueryCounter: 0,
};

const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState: initialState,
  reducers: {
    setCityName: (state, action) => {
      return { ...state, cityName: action.payload };
    },

    setErrorMsg: (state, action) => {
      return { ...state, errorMsg: action.payload };
    },

    incrementWeatherQueryCounter: (state) => {
      if (state.weatherQueryCounter < 4) {
        state.weatherQueryCounter += 1;
      }
    },
  },

  // Получение данных о текущей погоде по названию города:
  // ------------------------------------------------------------
  extraReducers: (builder) => {
    builder.addCase(getCurrentWeatherData.pending, (state) => {
      return { ...state, isLoadingViaAPI: true, errorMsg: '' };
    });

    builder.addCase(getCurrentWeatherData.fulfilled, (state, action) => {
      if (action.payload?.main) {
        state.weatherData = action.payload;
      }

      state.isLoadingViaAPI = false;
      state.cityName = '';
    });

    builder.addCase(getCurrentWeatherData.rejected, (state) => {
      return {
        ...state,
        cityName: '',
        weatherData: null,
        isLoadingViaAPI: false,
      };
    });
  },
});

// Действия:
// --------------------
export const { setCityName, incrementWeatherQueryCounter, setErrorMsg } =
  currentWeatherSlice.actions;

// Слайсы состояния:
// --------------------
export const selectCurrentWeatherSlice = (state: CurrentWeatherSlice_Type) =>
  state.currentWeather;

export default currentWeatherSlice.reducer;
