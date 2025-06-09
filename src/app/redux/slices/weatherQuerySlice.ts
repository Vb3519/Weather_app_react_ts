import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface WeatherQuery_Type {
  cityName: string;
  weather_icon: string;
  temp: number;
  id: number;
}

interface WeatherQueryHistory_Type {
  weatherQueryHistory: WeatherQuery_Type[];
  isHistoryMenuOpened: boolean;
}

interface WeatherQuerySlice_Type {
  weatherQueryHistory: WeatherQueryHistory_Type;
}

const initialState: WeatherQueryHistory_Type = {
  weatherQueryHistory: [],
  isHistoryMenuOpened: false,
};

const weahterQuerySlice = createSlice({
  name: 'weatherQueryHistory',
  initialState: initialState,

  reducers: {
    addCityWeatherQuery: (state, action) => {
      const weatherQuery: WeatherQuery_Type = {
        id: uuidv4(),
        ...action.payload,
      };

      state.weatherQueryHistory.push(weatherQuery);
    },

    deleteWeatherQueryElem: (state) => {
      state.weatherQueryHistory.shift();
    },

    toggleHistoryMenuVisibility: (state) => {
      return { ...state, isHistoryMenuOpened: !state.isHistoryMenuOpened };
    },
  },
});

// Действия:
// --------------
export const {
  addCityWeatherQuery,
  deleteWeatherQueryElem,
  toggleHistoryMenuVisibility,
} = weahterQuerySlice.actions;

// Состояние:
// --------------
export const selectWeatherQueryHistorySlice = (state: WeatherQuerySlice_Type) =>
  state.weatherQueryHistory;
export const selectWeatherQueryHistory = (state: WeatherQuerySlice_Type) =>
  state.weatherQueryHistory.weatherQueryHistory;

export default weahterQuerySlice.reducer;
