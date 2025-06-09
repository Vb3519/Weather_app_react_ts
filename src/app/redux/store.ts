import { configureStore } from '@reduxjs/toolkit';

import currentWeatherReducer from './slices/currentWeatherSlice';
import weatherForecastReducer from './slices/weatherForecastSlice';
import weatherQueryHeistoryReducer from './slices/weatherQuerySlice';

const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    weatherForecast: weatherForecastReducer,
    weatherQueryHistory: weatherQueryHeistoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
