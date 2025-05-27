import axios from 'axios';

import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Api:
import { getWeatherForecastEndpointLink } from '../../../shared/config/apiData';

// Utils:
import imitateFetchDataDelay from '../../../shared/utils/imitateFetchDataDelay';

interface WeatherForecastDay_Type {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  sys: { pod: string };
  visibility: number;
  weather?: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: { deg: number; gust: number; speed: number };
}

interface City {
  coord: { lat: number; lon: number };
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

interface GeneralWeatherForecast_Type {
  city: City;
  cnt: number;
  cod: string;
  list: WeatherForecastDay_Type[];
}

interface WeatherForecastState_Type {
  generalWeatherForecast: GeneralWeatherForecast_Type | null;
  currentDayForecast: null;
  fiveDaysForecast: null;
  errorMsg: string;
  isLoadingViaAPI: boolean;
}

interface WeatherForecastSlice_Type {
  weatherForecast: {
    generalWeatherForecast: GeneralWeatherForecast_Type | null;
    currentDayForecast: null;
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
      const weatherForecastResponse: Response = await fetch(url, {
        method: 'GET',
      });

      if (weatherForecastResponse.ok) {
        const generalWeatherForecast = await weatherForecastResponse.json();

        console.log('Общий прогноз погоды:', generalWeatherForecast);
        return generalWeatherForecast;
      } else {
        const errorMsg: string = `HTTP Error: ${weatherForecastResponse.status} ${weatherForecastResponse.statusText}`;
        console.log(errorMsg);

        thunkApi.dispatch(setErrorMsg(errorMsg));
        return thunkApi.rejectWithValue(errorMsg);
      }
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
const { setErrorMsg } = weatherForecastSlice.actions;

// Слайс состояния:
export const selectWeatherForecastSlice = (state: WeatherForecastSlice_Type) =>
  state.weatherForecast;

export default weatherForecastSlice.reducer;
