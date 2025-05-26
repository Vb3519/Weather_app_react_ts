import { createSlice } from '@reduxjs/toolkit';

interface Main {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface Sys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface CurrentWeatherData_Type {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lat: number; lon: number };
  dt: number;
  id: number;
  main: Main;
  name: string;
  rain?: { '1h': number };
  sys: Sys;
  timezone: number;
  visibility: number;
  weather?: Weather[];
  wind: { deg: number; speed: number };
}

interface CurrentWeatherState_Type {
  cityName: string;
  currentWeather: CurrentWeatherData_Type | null;
  isLoadingViaAPI: boolean;
}

const initialState: CurrentWeatherState_Type = {
  cityName: '',
  currentWeather: null,
  isLoadingViaAPI: false,
};

const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState: initialState,
  reducers: {
    setCityName: (state, action) => {
      return { ...state, cityName: action.payload };
    },

    fetchCurrentWeatherData: (state, action) => {
      return {
        ...state,
        isLoadingViaAPI: true,
        currentWeather: action.payload,
      };
    },
  },
});

// Действия:
export const { setCityName, fetchCurrentWeatherData } =
  currentWeatherSlice.actions;

// Слайсы состояния:
export const selectCurrentWeatherSlice = (state: any) => state.currentWeather;

export default currentWeatherSlice.reducer;
