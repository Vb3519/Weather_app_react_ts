import axios from 'axios';

import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Api:
import { getWeatherForecastEndpointLink } from '../../../shared/config/apiData';

// Utils:
import imitateFetchDataDelay from '../../../shared/utils/imitateFetchDataDelay';
import extractDailyWeatherForecast from '../../../shared/utils/extractDailyWeatherForecast';
import { extractWeatherForecastDataToRender } from '../../../shared/utils/extractFiveDaysWeatherForecastData';
import getFiveDaysWeatherForecastBtnsTitles from '../../../shared/utils/getFiveDaysWeatherForecastBtnsTitles';

// Types:
import { GeneralWeatherForecast_Type } from '../../features/weatherForecast/weatherForecastTypes';
import { ThreeHoursWeatherData_Type } from '../../../shared/utils/extractDailyWeatherForecast';
import { DayDataProps_Type } from '../../../shared/utils/getFiveDaysWeatherForecastBtnsTitles';
import { DayWeatherParams_Type } from '../../../shared/utils/extractFiveDaysWeatherForecastData';

interface WeatherForecastState_Type {
  generalWeatherForecast: GeneralWeatherForecast_Type | null;
  currentDayForecast: ThreeHoursWeatherData_Type[] | null;
  fiveDaysForecast: DayWeatherParams_Type[];
  fiveDaysForecastBtnsTitles: DayDataProps_Type[] | null;
  errorMsg: string;
  isLoadingViaAPI: boolean;
  selectedForecastDayIndex: number;
  isForecastDetailsViewOn: boolean;
}

interface WeatherForecastSlice_Type {
  weatherForecast: {
    generalWeatherForecast: GeneralWeatherForecast_Type | null;
    currentDayForecast: ThreeHoursWeatherData_Type[] | null;
    fiveDaysForecast: DayWeatherParams_Type[];
    fiveDaysForecastBtnsTitles: DayDataProps_Type[] | null;
    errorMsg: string;
    isLoadingViaAPI: boolean;
    selectedForecastDayIndex: number;
    isForecastDetailsViewOn: boolean;
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

      // Данные для рендера информации о прогнозе погоды на ближайшие 5 суток (общие и детализированные):
      const fiveDaysWeatherForecastDataToRender =
        extractWeatherForecastDataToRender(generalWeatherForecast);
      thunkApi.dispatch(
        setFiveDaysForecastData(fiveDaysWeatherForecastDataToRender)
      );

      // Данные для кнопок-переключателей (5 шт.) по дням детализированного прогноза погоды:
      const forecastBtnsTitles: DayDataProps_Type[] =
        getFiveDaysWeatherForecastBtnsTitles();
      thunkApi.dispatch(setFiveDaysForecastBtnTitles(forecastBtnsTitles));

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
  fiveDaysForecast: [],
  fiveDaysForecastBtnsTitles: null,
  errorMsg: '',
  isLoadingViaAPI: false,
  selectedForecastDayIndex: 0,
  isForecastDetailsViewOn: false,
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

    setFiveDaysForecastData: (state, action) => {
      return { ...state, fiveDaysForecast: action.payload };
    },

    setFiveDaysForecastBtnTitles: (state, action) => {
      return { ...state, fiveDaysForecastBtnsTitles: action.payload };
    },

    setSelectedForecastDayIndex: (state, action) => {
      return { ...state, selectedForecastDayIndex: action.payload };
    },

    setIsForecastDetailsViewOn: (state, action) => {
      return { ...state, isForecastDetailsViewOn: action.payload };
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
export const {
  setErrorMsg,
  setCurrentDayForecastData,
  setFiveDaysForecastData,
  setFiveDaysForecastBtnTitles,
  setSelectedForecastDayIndex,
  setIsForecastDetailsViewOn,
} = weatherForecastSlice.actions;

// Слайс состояния:
export const selectWeatherForecastSlice = (state: WeatherForecastSlice_Type) =>
  state.weatherForecast;
export const selectFiveDaysForecast = (state: WeatherForecastSlice_Type) =>
  state.weatherForecast.fiveDaysForecast;

export const selectFiveDaysForecastBtnsTitles = (
  state: WeatherForecastSlice_Type
) => state.weatherForecast.fiveDaysForecastBtnsTitles;

export default weatherForecastSlice.reducer;
