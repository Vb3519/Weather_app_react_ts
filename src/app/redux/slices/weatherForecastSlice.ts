import axios from 'axios';

import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Api:
import { getWeatherForecastEndpointLink } from '../../../shared/config/apiData';

// Utils:
import imitateFetchDataDelay from '../../../shared/utils/imitateFetchDataDelay';
import extractDailyWeatherForecast from '../../../shared/utils/extractDailyWeatherForecast';

// Types:
import { GeneralWeatherForecast_Type } from '../../features/weatherForecast/weatherForecastTypes';
import { ThreeHoursWeatherData_Type } from '../../../shared/utils/extractDailyWeatherForecast';

interface WeatherForecastState_Type {
  generalWeatherForecast: GeneralWeatherForecast_Type | null;
  currentDayForecast: ThreeHoursWeatherData_Type[] | null;
  fiveDaysForecast: null;
  errorMsg: string;
  isLoadingViaAPI: boolean;
}

interface WeatherForecastSlice_Type {
  weatherForecast: {
    generalWeatherForecast: GeneralWeatherForecast_Type | null;
    currentDayForecast: ThreeHoursWeatherData_Type[] | null;
    fiveDaysForecast: null;
    errorMsg: string;
    isLoadingViaAPI: boolean;
  };
}

export const getGeneralWeatherForecast = createAsyncThunk(
  'weatherForecast/getGeneralForecast',
  async (payload: { cityName: string }, thunkApi) => {
    await imitateFetchDataDelay(2000);

    const { cityName } = payload;

    const url: string = getWeatherForecastEndpointLink(cityName);

    try {
      const weatherForecastResponse = await axios.get(url);
      const generalWeatherForecast: GeneralWeatherForecast_Type =
        weatherForecastResponse.data;

      // Данные для рендера информации о прогнозе погоды на ближайшие 12 часов (шаг 3 часа):
      const dailyWeatherForecastDataToRender = extractDailyWeatherForecast(
        generalWeatherForecast
      );
      thunkApi.dispatch(
        setCurrentDayForecastData(dailyWeatherForecastDataToRender)
      );

      console.log('Общий прогноз погоды:', generalWeatherForecast);

      return generalWeatherForecast;
    } catch (error: unknown) {
      const errorMsg: string = `Error: ${(error as Error).message}`;

      console.log(errorMsg);
      thunkApi.dispatch(setErrorMsg(errorMsg));
      return thunkApi.rejectWithValue(errorMsg);
    }
  }
);

const initialState: WeatherForecastState_Type = {
  generalWeatherForecast: null,
  currentDayForecast: null,
  fiveDaysForecast: null,
  errorMsg: '',
  isLoadingViaAPI: false,
};

const weatherForecastSlice = createSlice({
  name: 'weatherForecast',
  initialState: initialState,
  reducers: {
    setErrorMsg: (state, action) => {
      return { ...state, errorMsg: action.payload };
    },

    setCurrentDayForecastData: (state, action) => {
      return { ...state, currentDayForecast: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGeneralWeatherForecast.pending, (state) => {
      return { ...state, isLoadingViaAPI: true, errorMsg: '' };
    });

    builder.addCase(getGeneralWeatherForecast.fulfilled, (state, action) => {
      return {
        ...state,
        isLoadingViaAPI: false,
        generalWeatherForecast: action.payload,
      };
    });

    builder.addCase(getGeneralWeatherForecast.rejected, (state) => {
      return { ...state, isLoadingViaAPI: false };
    });
  },
});

// Действия:
export const { setErrorMsg, setCurrentDayForecastData } =
  weatherForecastSlice.actions;

// Слайс состояния:
export const selectWeatherForecastSlice = (state: WeatherForecastSlice_Type) =>
  state.weatherForecast;

export default weatherForecastSlice.reducer;
