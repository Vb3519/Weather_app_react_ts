import { configureStore } from '@reduxjs/toolkit';

import currentWeatherReducer from './slices/currentWeatherSlice';
import weatherForecastReducer from './slices/weatherForecastSlice';

const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    weatherForecast: weatherForecastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
