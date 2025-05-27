export const API_KEY: string = '0d7b538e37d8be8642a8f62cd18c61e3';
const lang: string = 'ru';
const measurementUnits: string = 'metric';
const weatherEndpointType: string[] = ['weather', 'forecast'];

export const getCurrentWeatherEndpointLink = (cityName: string): string => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=${lang}&units=${measurementUnits}`;
};

export const getWeatherForecastEndpointLink = (cityName: string): string => {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&lang=${lang}&units=${measurementUnits}`;
};
